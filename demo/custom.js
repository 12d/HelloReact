'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text
} from 'react-native';

import HelloWorld from "./demo/pages/helloworld";

class HelloReact extends Component {
  render() {
    return (
        <HelloWorld author="陈旭伟"/>
    );
  }
}
AppRegistry.registerComponent('HelloReact', () => HelloReact);
