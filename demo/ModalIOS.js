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
  Modal,
  Text,
  MapView
} from 'react-native';

var HelloWorld  = React.createClass({
  render: function(){
    return (
      <View>
        <Modal animated={true} transparent={false} visible={true}>
          <MapView annotations={[{latitude: 25, longitude: 125, animateDrop: true, draggable: true, title:'title', subtitle:'subtitle'}]} pitchEnabled={true} showsUserLocation={true} style={{top:100,left:50,height:240,width:240}} region={{latitude: 25, longitude: 125, latitudeDelta: 0, longitudeDelta: 0}}></MapView>
        </Modal>
        <Text style={{top:100}}>
Background when transparent setted to false, it will disappeared</Text>
      </View>

    )
  }
})

AppRegistry.registerComponent('HelloReact', () => HelloWorld);
