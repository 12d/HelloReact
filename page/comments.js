
'use strict';
var React = require('react-native');
var Stars = require('../lib/stars');
var styles = require('../css/styles');
var Review = require('../com/review');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  View,
} = React;
var config = {
    commentsAjax: 'http://m.ctrip.com/restapi/soa2/10101/json/CommentListSearch?hotelId=662485',
}

class Page extends React.Component {
    componentDidMount(){
        this.getComments();
        // console.log(this.props.navigator);
    }
    getInitialState(){
        return {
            data: null
        }
    }
    getComments(){
        var self = this;
        fetch(config.commentsAjax)
        .then((rs)=>{

                //var json = JSON.parse(rs._bodyText);
            // var json2 = eval('('+rs._bodyText+')')
            // debugger
            //
            // console.log(json2.servPt);
            return rs.json()
        })
        .then((rs)=>{
            self.setState({data: rs});
        })
        .done()
    }
    render(){
        var self = this;
        return (
            <ScrollView style={styles.wrapCls}>
                <View style={[styles.mainComments, styles.commentItem]}>
                    <View style={styles.commentsRow}>
                        <Text style={styles.labelCls}>总评</Text>
                        <Stars stars='3' style={styles.starCls}/>
                        <Text style={[styles.scoreCls]}>3.7分</Text>
                        <Text style={styles.recommendCls}>94%用户推荐</Text>
                    </View>
                    <View style={styles.commentsRow}>
                        <Text style={styles.referItem}>卫生：4.6</Text>
                        <Text style={styles.referItem}>环境：4.8</Text>
                        <Text style={styles.referItem}>服务：4.7</Text>
                        <Text style={styles.referItem}>设施：4.6</Text>
                    </View>
                </View>
                <Text style={{fontWeight:'bold', color: '#333', padding: 10,marginBottom:10}}>用户点评</Text>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </ScrollView>
        )
    }
}

module.exports = Page;
