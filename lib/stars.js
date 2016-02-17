
'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  View,
} = React;
var styles = StyleSheet.create({
    starCls: {
        width: 70,
        height:12,
        marginTop:2
    },
    starFront: {
        marginTop: -12
    }
})
class Page extends React.Component {
    componentDidMount(){

    }
    render(){
        var self = this,
            props = self.props,
            width = props.stars * (70/5);

        return (
            <View>
                <Image resizeMode={'stretch'} style={[styles.starCls]} source={require('image!dianping-back')}/>
                <Image resizeMode={'stretch'} style={[styles.starCls,styles.starFront,{width: width}]} source={require('image!dianping')}/>
            </View>
        )
    }
}

module.exports = Page;
