'use strict';
var React = require('react-native');
var Stars = require('../lib/stars');
var styles = require('../css/styles');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  View,
} = React;

class Page extends React.Component {
    render(){
        var self = this;
        return (
            <View style={[styles.usersReview, styles.commentItem]}>
                <View style={styles.commentsRow}>
                    <Text style={[styles.phoneCls, styles.grayCls]}>1345554455</Text>
                    <Text style={[styles.recommendCls, styles.grayCls]}>2015-07-01</Text>
                </View>
                <View style={styles.commentsRow}>
                    <Text style={styles.labelCls}>评分</Text>
                    <Stars stars='3' style={styles.starCls}/>
                </View>
                <View style={styles.commentsRow}>
                    <Text style={styles.referItem}>卫生：4.6</Text>
                    <Text style={styles.referItem}>环境：4.8</Text>
                    <Text style={styles.referItem}>服务：4.7</Text>
                    <Text style={styles.referItem}>设施：4.6</Text>
                </View>
                <View>
                    <Text style={styles.reviewCls}>离出差的地点近，主要是图近，所以选择入住，酒店性价比还行！如果服务能再提升一个档次，那么就更好了！希望酒店的生意越来越好！离出差的地点近，主要是图近，所以选择入住，酒店性价比还行！如果服务能再提升一个档次，那么就更好了！希望酒店的生意越来越好！</Text>
                </View>
            </View>
        )
    }
}

module.exports = Page;
