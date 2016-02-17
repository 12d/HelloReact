/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Text
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
        <Text>
          HelloWorld!
        </Text>
    );
  }
}

AppRegistry.registerComponent('HelloReact', () => HelloWorld);
