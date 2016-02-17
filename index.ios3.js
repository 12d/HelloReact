/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var Header = require('./lib/header');
var Product = require('./lib/product');

var ServicePage = require('./page/service');
var CommentsPage = require('./page/comments');
var {
      AppRegistry,
      StyleSheet,
      Text,
      DataSource,
      TouchableHighlight,
      ListView,
      ScrollView,
      Image,
      NavigatorIOS,
      View,
} = React;

var styles = StyleSheet.create({
    container: {
        flex:1
    }
});
var App = React.createClass({
    componentDidMount(){


    },
  render(){
      return (
              <NavigatorIOS
                    ref= "nav"
                    tintColor= '#FFFFFF'
                    barTintColor= '#039CDD'
                    titleTextColor= '#FFFFFF'
                    style={styles.container}
              initialRoute={{
                  title: '点评页',
                  component: CommentsPage,
                  backButtonTitle: '',
                  leftButtonTitle: 'left',
                  leftButtonIcon: require('image!refund'),
                  //rightButtonTitle: 'Mores'
              }}/>
        )
  }
})
AppRegistry.registerComponent('HelloReact', () => App);
