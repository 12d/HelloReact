'use strict';

var React = require('react-native');
var {
  PickerIOS,
  SegmentedControlIOS,
  SliderIOS,
  SwitchIOS,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;


var Demo = React.createClass({
	render(){
		return (
			<View>
			<SegmentedControlIOS values={['One', 'Two', 'Three', 'Four', 'Five']} />
			<SliderIOS/>
			<SwitchIOS/>
			</View>
		)	
	}
});

module.exports = Demo;