import environment from '../environment.env';

const environmentVariables = [
    'FIREBASE_API_KEY',
    'FIREBASE_AUTH_DOMAIN',
    'FIREBASE_DATABASE_URL',
    'FIREBASE_PROJECT_ID',
    'FIREBASE_STORAGE_BUCKET',
    'FIREBASE_MESSAGE_SENDER'
].filter(variable => !environment[variable]);

if (environmentVariables.length) {
    console.log(`Missing the following environment variables:\n [\n\t${environmentVariables.join(',\n\t')}\n], shutting down`);
}

const config = {
    firebase: {
        apiKey: environment.FIREBASE_API_KEY,
        authDomain: environment.FIREBASE_AUTH_DOMAIN,
        databaseURL: environment.FIREBASE_DATABASE_URL,
        projectId: environment.FIREBASE_PROJECT_ID,
        storageBucket: environment.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: environment.FIREBASE_MESSAGE_SENDER
    }
};

export default config;
