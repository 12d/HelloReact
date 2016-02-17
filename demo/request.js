'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text
} from 'react-native';

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
    marginTop:100
  }
})

var HelloReact = React.createClass({
  getInitialState: function(){
    return {
      buttonLabelFetch: '获取点评fetch',
      buttonLabelAjax: '获取点评ajax'
    }
  },
  render: function(){
    var buttonLabelFetch = this.state.buttonLabelFetch;
    var buttonLabelAjax = this.state.buttonLabelAjax;
    return (
      <View style={styles.center}>
        <Text onPress={this.getListByFetch} style={styles.getComment}>{buttonLabelFetch}</Text>
        <Text onPress={this.getListByAjax} style={styles.getComment}>{buttonLabelAjax}</Text>
      </View>  
    );
  },
  getListByFetch: function(){
    this.setState({
      buttonLabelFetch: '请求中'
    })
    // this.text=11;
    fetch('http://m.ctrip.com/restapi/soa2/10101/json/bannersearch',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({cid:2})
    }).then((rs)=>{
      this.setState({
        buttonLabelFetch: '获取成功'
      });
      rs.json().then((rs)=>{
        console.log(rs);
      })
    })
  },
  getListByAjax: function(){
    var self = this;
    this.setState({
      buttonLabelAjax: '请求中'
    });

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = ()=>{
      if(ajax.readyState === 4 && ajax.status===200){
        self.setState({
          buttonLabelAjax: '获取成功'
        });
        console.log(ajax.responseText);
      }
    };
    ajax.open('POST', 'http://m.ctrip.com/restapi/soa2/10101/json/bannersearch');
    ajax.setRequestHeader('Accept', 'application/json');
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(JSON.stringify({cid:2}));
  }
});

AppRegistry.registerComponent('HelloReact', () => HelloReact);
