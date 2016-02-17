var React = require('react-native');
var {
    View,
    Text,
    PixelRatio
} = React;
class Demo extends React.Component {
    render(){
        return (
            <View>
                <Text>asdfash</Text>
            </View>
        )
    }
    componentDidMount(){
        console.log(PixelRatio);
        console.log('ratio:'+PixelRatio.get());
        // console.log('getFontScale:'+PixelRatio.getFontScale());
        console.log('getPixelSizeForLayoutSize:'+PixelRatio.getPixelSizeForLayoutSize(300))
    }
}
module.exports = Demo;