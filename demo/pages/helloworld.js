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
        <Text onPress={this.back.bind(this)} ref="myHello" style={[styles.redText, styles.center, CSSText.hello]}>
          HelloWorld
        </Text>
    );
  }
  back(){
    this.props.navigator.pop();
  }
}
module.exports = HelloReact;
//AppRegistry.registerComponent('HelloReact', () => HelloReact);
