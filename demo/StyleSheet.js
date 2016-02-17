/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Text
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
        <Text style={{marginTop:300, color:"red", marginLeft: 100, fontSize:40}}>
          HelloWorld!
        </Text>
    );
  }
}
//HelloReact不能修改
AppRegistry.registerComponent('HelloReact', () => HelloWorld);
