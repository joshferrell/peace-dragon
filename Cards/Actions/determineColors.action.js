import {getNamedSwatches} from 'react-native-palette';

const getColors = async (imageUrl) => {
    try {
        getNamedSwatches(imageUrl);
    } catch(e) {
        console.log(e);
        return "#ececec";
    }
};

export default getColors;
