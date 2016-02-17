'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  AsyncStorage,
  Text
} from 'react-native';

const TEST_STORE = 'test_store';

//const TEST_MERGE_STORE = 'test_merge_store';
//merge data
const TEST_MERGE_STORE = JSON.stringify({a:'x',b:'y',c:'z'});

var styles = StyleSheet.create({
  center: {
    flex:1,
    marginTop: 50
  },
  getComment:{
    backgroundColor: 'gray',
    padding: 10,
    width: 100,
    marginLeft:100,
    marginTop:50
  }
})

var HelloReact = React.createClass({
  render: function(){
    return (
      <View style={styles.center}>
        <Text onPress={this.save} style={styles.getComment}>保存</Text>
        <Text onPress={this.get} style={styles.getComment}>获取</Text>
        <Text onPress={this.clear} style={styles.getComment}>清除</Text>
        <Text onPress={this.merge} style={styles.getComment}>合并保存</Text>
      </View>  
    );
  },
  merge: function(){
    var mergeData = {a:1,b:2,d:'hello'}
    var x = AsyncStorage.mergeItem(TEST_STORE, JSON.stringify(mergeData)).done(()=>{
      alert('合并成功')
    });
  },
  save: function(){
    AsyncStorage.setItem(TEST_STORE, TEST_MERGE_STORE, function(){
      alert('saved')
    });
  },
  get: function(){
    AsyncStorage.getItem(TEST_STORE).then((rs)=>{
      alert(TEST_STORE+':'+rs);  
    }).catch((err)=>{
      console.log(err);
    });
  },
  clear: function(){
    AsyncStorage.removeItem(TEST_STORE, function(){
      alert('clear :'+TEST_STORE)
    });
  }
});

AppRegistry.registerComponent('HelloReact', () => HelloReact);
