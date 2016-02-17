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

  header: {
    justifyContent: 'center',
    top: 0,
    alignItems: 'center',
    marginTop:20,
    height:48,
    width: 380,
    overflow: 'hidden',
    backgroundColor: '#099fde'
  }
});
var Header = React.createClass({
    getInitialProps (){
        return {
            title: '携程团购'
        }
    },
    render (){
        return (
            <View style={styles.header}>
                <Text style={{color:'white','fontSize':18}}>{this.props.title}</Text>
            </View>
        )
    }
});

module.exports = Header;
