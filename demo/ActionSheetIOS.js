'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;
var style = StyleSheet.create({
  button: {
    marginBottom: 10,
    fontWeight: '500',
  },
  container: {
  	flex:1,
  	marginTop: 100
  }
});
var ActionSheetIOS = require('ActionSheetIOS');
var BUTTONS = [
  'Button Index: 0',
  'Button Index: 1',
  'Button Index: 2',
  'Destruct',
  '取消',
];
var DESTRUCTIVE_INDEX = 6;
var CANCEL_INDEX = 4;

var ShareActionSheetExample = React.createClass({
  getInitialState() {
    return {
      text: '爱上的发生'
    };
  },

  render() {
    return (
      <View style={style.container}>
        <Text onPress={this.showShareActionSheet} style={style.button}>
          Click to show the Share ActionSheet
        </Text>
        <Text>
          {this.state.text}
        </Text>
      </View>
    );
  },

  showShareActionSheet() {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'http://www.baidu.com',
    },
    (error) => {
      console.error(error);
    },
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({text})
    });
  }
});
module.exports = ShareActionSheetExample;