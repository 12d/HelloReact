'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text
} from 'react-native';

//外联css
import CSSText from './demo/cssText';

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
        <Text ref="myHello" style={[styles.redText, styles.center, CSSText.hello]} onPress={this.pressHandler.bind(this)}>
          HelloWorld
        </Text>
    );
  }
  pressHandler(){
    alert('onPress called');
    // this.refs.myHello.props.onPress=null;
    // this.refs.myHello.addListener('press',this.pressHandler)
    // alert()
  }
  componentDidMount(){
    // debugger;
    // alert(this.refs.myHello);  
  }
}
AppRegistry.registerComponent('HelloReact', () => HelloReact);
