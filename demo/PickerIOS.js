'use strict';

var React = require('react-native');
var {
  PickerIOS,
  PickerItemIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;


var Demo = React.createClass({
	render(){
		return (
			<PickerIOS>
				<PickerItemIOS label="男" value="man" key="male"/>
				<PickerItemIOS label="女" value="woman" key="female"/>
			</PickerIOS>
		)	
	}
});

module.exports = Demo;