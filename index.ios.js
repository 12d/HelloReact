'use strict';
import React, {
  AppRegistry,
  Component,
  View,
  TextInput,
  Text,
  WebView,
  TouchableHighlight
} from 'react-native';

var HelloWorld  = React.createClass({
  getInitialState: function(){
    return {
      url: '__blank'
    }
  },
  render: function(){
    var self = this;
    return (
      <View style={{top:100}}>
        <TextInput ref={'url'} placeholder={'请输入网址'} editable={true} autoCapitalize={'none'} autoFocus={true} style={{height: 40, borderColor: 'gray', borderWidth: 2, width:300,left:20}}/> 
        <TouchableHighlight onPress={this.goHandler.bind(self)}>
          <Text style={{backgroundColor:'#cccccc',padding:10,borderWidth:1,width:60,left:70,top:10}}>GO</Text>
        </TouchableHighlight>
        <WebView source={{uri:this.state.url}} style={{height:400,width:500,backgroundColor:'#eeeeee'}}/>
      
      </View>

    )
  },
  goHandler: function(){
    debugger;
    this.setState({
      url: this.refs.url.value
    })
  }
})

AppRegistry.registerComponent('HelloReact', () => HelloWorld);