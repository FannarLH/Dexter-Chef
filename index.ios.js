import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';

export default class DexterChefApp extends Component {
  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('DexterChefApp', () => DexterChefApp);
