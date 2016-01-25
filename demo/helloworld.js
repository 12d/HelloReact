'use strict';
import React, {
  AppRegistry,
  Component,
  Text
} from 'react-native';

class HelloReact extends Component {
  render() {
    return (
        <Text>
          HelloWorld
        </Text>
    );
  }
}
AppRegistry.registerComponent('HelloReact', () => HelloReact);
