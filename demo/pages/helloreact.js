'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text
} from 'react-native';

//外联css
import CSSText from '../cssText';

var styles = StyleSheet.create({
   redText: {
      color:"red"
   },
   center: {
      marginTop: 300,
      marginLeft: 150
   }
});
class HelloReact extends Component {
  render() {
    return (
        <Text ref="myHello" style={[styles.redText, styles.center]}>
          Hello ReactNative
        </Text>
    );
  }
}
module.exports = HelloReact;
//AppRegistry.registerComponent('HelloReact', () => HelloReact);
