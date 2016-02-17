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
  Text,
  MapView
} from 'react-native';

var HelloWorld  = React.createClass({
  render: function(){
    return (
      <View>
        <MapView annotations={[{latitude: 25, longitude: 125, animateDrop: true, draggable: true, title:'title', subtitle:'subtitle'}]} pitchEnabled={true} showsUserLocation={true} style={{height:640,width:375}} region={{latitude: 25, longitude: 125, latitudeDelta: 0, longitudeDelta: 0}}></MapView>
      </View>

    )
  }
})

AppRegistry.registerComponent('HelloReact', () => HelloWorld);
