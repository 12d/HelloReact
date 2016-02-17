/**
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text
} from 'react-native';

let styles = {
  helloClass : {marginTop:300, color:"red", marginLeft: 100, fontSize:40}
}

function onPressHandler(){
  alert('onPress was called');
}

class HelloWorld extends Component {
  render() {
    return (
        <Text style={styles.helloClass} onPress={onPressHandler}>
          HelloWorld!
        </Text>
    );
  }
}
//HelloReact不能修改
AppRegistry.registerComponent('HelloReact', () => HelloWorld);
