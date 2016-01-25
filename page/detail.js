
'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  DataSource,
  TouchableHighlight,
  ListView,
  ScrollView,
  Image,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 165
  }
});
var Detail = React.createClass({
  detailHandler (e){
      console.log(this);
  },
  render (){
    return (
        <View style={{marginTop: 100}}>
          <Text>{JSON.stringify(this.props)}</Text>
        </View>
    )
  }
});

module.exports = Detail;
