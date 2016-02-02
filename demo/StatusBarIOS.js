

var React = require('react-native');
var {
    View,
    Text,
    TouchableHighlight,
    StatusBarIOS
} = React;
class Demo extends React.Component {
    render(){
        return (
            <View style={{marginTop:100,flex:1}}>
                <TouchableHighlight onPress={this.hideStatusBar}>
                    <Text>hideStatusBar</Text>    
                </TouchableHighlight>
                <TouchableHighlight onPress={this.showStatusBar}>
                    <Text>showStatusBar</Text>    
                </TouchableHighlight>
                <TouchableHighlight onPress={this.setStyle}>
                    <Text>setStyle</Text>    
                </TouchableHighlight>
       
            </View>
        )
    }
    hideStatusBar(){
        StatusBarIOS.setHidden(true, 'slide');    
    }
    showStatusBar(){
        StatusBarIOS.setHidden(false,'slide');   
    }
    setStyle(){
        console.log('setStyle')
        StatusBarIOS.setStyle('light-content', true);//default
    }
    componentDidMount(){
        
    }
}
module.exports = Demo;