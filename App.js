/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { authorize } from 'react-native-app-auth';

const config = {
  clientId: '3MVG9d8..z.hDcPJX2tzahVexonVdzflNXZ7KURGjAWPShuFmZHXN3ZXDiBNhLFT9RdckpotLghMlkigQqfs8',
  clientSecret: '5965382566575883207',
  redirectUrl: 'org.reactjs.native.example.sfauth:/oauthredirect',
  serviceConfiguration: {
    authorizationEndpoint: 'https://login.salesforce.com/services/oauth2/authorize',
    tokenEndpoint: 'https://login.salesforce.com/services/oauth2/token',
    revocationEndpoint: 'https://login.salesforce.com/services/oauth2/revoke'
  }
};



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {};

  componentDidMount() {
    
      authorize(config)
        .then(result => {
          this.setState({ ...result })
        }).catch(err => {
          console.error(err)
        });
      
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.welcome}>{this.state.accessToken}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
