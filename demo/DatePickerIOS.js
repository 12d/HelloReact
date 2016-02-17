'use strict';

var React = require('react-native');
var {
  DatePickerIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;


var Demo = React.createClass({
	render(){
		return (
			<DatePickerIOS date={new Date}/>
		)	
	}
});

module.exports = Demo;