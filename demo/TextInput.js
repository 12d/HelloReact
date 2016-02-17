/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  View,
  TextInput
} from 'react-native';

var HelloWorld  = React.createClass({
  render: function(){
    return (
      <View style={{top:100}}>
        <TextInput placeholder={'请输入帐号'} editable={true} autoCapitalize={'none'} autoFocus={true} style={{height: 40, borderColor: 'gray', borderWidth: 2, width:300,left:50}}/> 
         <TextInput secureTextEntry={true} placeholder={'请输入密码'} editable={true} autoCapitalize={'none'} autoFocus={true} style={{height: 40, borderColor: 'gray', borderWidth: 2, width:300,left:50}}/> 
      
      </View>

    )
  }
})

AppRegistry.registerComponent('HelloReact', () => HelloWorld);
