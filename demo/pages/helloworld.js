'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

//外联css
import CSSText from '../cssText';

var styles = StyleSheet.create({
   redText: {
      color:"red",
      width:400,
      marginLeft:-100
   },
   center: {
      marginTop: 300,
      marginLeft: 150
   }
});
class HelloReact extends Component {
  render() {
    return (
        <View style={styles.center}>
          <Text onPress={this.back.bind(this)} ref="myHello" style={[CSSText.hello,styles.redText]}>
            To Be Continue
          </Text>
          <Text>by {this.props.author}</Text>
        </View>
    );
  }
  componentDidMount(){
    console.log(this.props.message);
  }
  back(){
    this.props.navigator.pop();
  }
}
module.exports = HelloReact;
//AppRegistry.registerComponent('HelloReact', () => HelloReact);
