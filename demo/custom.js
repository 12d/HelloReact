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
        <HelloWorld/>
    );
  }
}
AppRegistry.registerComponent('HelloReact', () => HelloReact);
