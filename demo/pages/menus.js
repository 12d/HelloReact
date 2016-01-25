'use strict';
import React, {
  AppRegistry,
  Component,
  View,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';
var styles = StyleSheet.create({
   redText: {
      color:"red"
   },
   center: {
      marginTop: 300,
      marginLeft: 150,
      width:200
   }
});

class Menu extends Component {
  componentDidMount(){
    
  }
  render() {
    this.navigator = this.props.navigator;

    return (
        <View style={styles.center}>
          <TouchableHighlight onPress={this.goto} data-link='index' navigator={this.navigator}>
            <Text style={{fontSize:30}}>*Index</Text>
          </TouchableHighlight>
          
          <Text onPress={this.goto} navigator={this.navigator} data-link='list' style={{fontSize:30}}>*List</Text>
        </View>
    );
  }
  goto (){
    // debugger;
    this.navigator.push({
      name: this['data-link']
    })
  }

}
module.exports = Menu;
// AppRegistry.registerComponent('HelloReact', () => HelloReact);
