var React = require('react-native');
var {
    View,
    Text,
    TouchableHighlight,
    PushNotificationIOS
} = React;
class Demo extends React.Component {
    render(){
        return (
            <View>
                <TouchableHighlight onPress={this.pushMessage}>
                    <Text>Push a message</Text>    
                </TouchableHighlight>
                
            </View>
        )
    }
    pushMessage(){
        PushNotificationIOS
    }
    componentDidMount(){
        console.log(PixelRatio);
        console.log('ratio:'+PixelRatio.get());
        // console.log('getFontScale:'+PixelRatio.getFontScale());
        console.log('getPixelSizeForLayoutSize:'+PixelRatio.getPixelSizeForLayoutSize(300))
    }
}
module.exports = Demo;