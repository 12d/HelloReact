'use strict';

var React = require('react-native');
var {
  Text,
  View,
  LinkingIOS,
  TouchableHighlight
} = React;
var url='httpm://maps.apple.com/?q=cupertino';

class Demo extends React.Component {
    render(){
        var self = this;
        return (
            <View style={{marginTop:100, flex:1}}>
                <Text>LinkingIOS</Text>
                <TouchableHighlight onPress={self.openBaidu.bind(self)}>
                    <Text>Open Baidu</Text>
                </TouchableHighlight>
            </View>
        )
    }
    checkAvailable(callback){
        LinkingIOS.canOpenURL(url, callback)
    }
    openBaidu(){
        this.checkAvailable((rs)=>{
            console.log('can open url'+rs);
            rs && LinkingIOS.openURL(url);
        })
    }
    componentDidMount(){
        var url = LinkingIOS.popInitialURL();
        console.log('popInitialURL:'+url);
        LinkingIOS.addEventListener('url', function(argument) {
            console.log(argument);
        })
    }
}

module.exports = Demo;