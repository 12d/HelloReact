// 'use strict';
var React = require('react-native');
var {
    View,
    Text,
    AsyncStorage,
    TouchableHighlight
} = React;
const STORE_KEY='KEY';
class AsyncStorageDemo extends React.Component {
    saveHandler(){
        AsyncStorage.setItem(STORE_KEY, 'hello AsyncStorage').then(()=>{
            alert('save successfully');
        })
    }
    readHandler(){
        AsyncStorage.getItem(STORE_KEY).then((val)=>{
            alert(val);
        }) 
    }
    clearHandler(){
        AsyncStorage.clear().then(()=>{
            alert('remove successfully');
        })
    }
    render(){
        return (
            <View style={{marginTop:100,flex:1}}>
                <TouchableHighlight onPress={this.saveHandler}>
                    <Text>Save</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.readHandler}>
                    <Text>Read</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.clearHandler}>
                    <Text>Clear</Text>
                </TouchableHighlight>
    
            </View>
        )
    }

}
module.exports = AsyncStorageDemo;