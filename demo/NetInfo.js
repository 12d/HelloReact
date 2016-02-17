var React = require('react-native');
var {
    View,
    Text,
    NetInfo
} = React;
class Demo extends React.Component {
    render(){
        return (
            <View>
                <Text></Text>
            </View>
        )
    }
    componentDidMount(){
        // NetInfo.addEventListener('change', ()=>{
        //     console.log(arguments)
        // });
        // NetInfo.fetch().done(()=>{
        //     console.log('fetch'+rs);    
        // });
        console.log(NetInfo);
        console.log('componetDidMount');
    }
}
module.exports = Demo;