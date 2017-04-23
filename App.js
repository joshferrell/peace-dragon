import React from 'react';
import Expo, { AppLoading } from 'expo';
import { Container, Content, Header, Body, Title } from 'native-base';
import { Platform } from 'react-native';
import * as firebase from "firebase";
import TileCard from './Cards/card.comp';
import config from './Config/index';

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            isReady: false
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        });

      firebase.initializeApp(config.firebase);

        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        } else {
            return (
                <Container>
                    <Header>
                        <Body>
                            <Title>Peace Cards</Title>
                        </Body>
                    </Header>
                    <Content>
                        <TileCard title="aldf" imageUrl="http://fillmurray.com/500/500.jpg" borderColor="#ececec" />
                        <TileCard title="aldf" imageUrl="http://fillmurray.com/500/500.jpg" borderColor="#ececec" />
                        <TileCard title="aldf" imageUrl="http://fillmurray.com/500/500.jpg" borderColor="#ececec" />
                    </Content>
              </Container>
          );
        }
    }
}
