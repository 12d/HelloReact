'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  AppStateIOS,
  TouchableHighlight
} = React;

// class AppStateIOSExample extends React.Component {
var AppStateIOSExample = React.createClass({
  getInitialState(){
      return {
        status: AppStateIOS.currentState
      }
  },
  componentDidMount(){
    console.log(this.state)
    var self = this;
    AppStateIOS.addEventListener('change', (status)=>{
      console.log(status)
      // self.setState({status})  
    })
  },
  render(){

    return (
      <View style={{flex:1, marginTop: 100}}>
        <Text>{this.state.status+=this.state.status}</Text>  
      </View>
    )
  }
})

module.exports = AppStateIOSExample;