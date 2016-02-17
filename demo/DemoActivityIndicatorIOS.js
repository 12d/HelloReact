'use strict';

var React = require('react-native');
var {
  ActivityIndicatorIOS,
  StyleSheet,
  View,
  Text
} = React;
var DemoActivityIndicatorIOS = React.createClass({
	render(){
		return (
			<View style={{paddingTop: 100}}>
				<Text>Loading</Text>
				<ActivityIndicatorIOS animating={true} color='#FF0000' size='large' />
			</View>
		)
	}
});
module.exports =DemoActivityIndicatorIOS;