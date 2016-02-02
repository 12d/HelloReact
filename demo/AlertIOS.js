'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  AlertIOS,
  TouchableHighlight
} = React;

class AlertIOSExample extends React.Component {
  constructor(){

  }         
// })
// var AlertIOSExample = React.createClass({
  showAlert(){
      AlertIOS.alert('title', 'message', [
        {text: 'sure', onPress:()=>alert('sure clicked')},
        {text:'cancel', onPress:()=>alert('cancel clicked')}
      ])
  }
  showPrompt(){
    AlertIOS.prompt('title', 'message', [
        {text: 'sure', onPress:()=>alert()},
        {text:'cancel', onPress:()=>alert(arguments[0])}
      ])
  }
  render(){
    return (
      <View style={{flex:1, marginTop: 100}}>
        <TouchableHighlight onPress={this.showAlert}>
          <Text>Show ALert</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.showPrompt}>
          <Text>Show Prompt</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = AlertIOSExample;