
'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ScrollView,
  View,
} = React;
var Detail = require('./detail');
var styles = StyleSheet.create({
    wrapCls: {
        backgroundColor: '#f4f4f4',
        overflow: 'visible'
    },
    blockText: {
        color: '#333',
        padding: 5,
        fontWeight: 'bold',
        flex:1,
        fontSize: 16,
        paddingLeft: 8,
        marginTop: 10
    },
    contentWrap: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    descText: {
        lineHeight: 20,
        flex:1,
        padding: 8,
    },
    icon: {
        height: 17,
        width: 17,
        marginTop: 10,
        padding:8,
        marginRight: 5
    },
    label: {
        paddingTop: 10,
        paddingBottom: 10,
        color: '#099fde',
        fontSize: 17

    },
    labelWrap:{
        paddingLeft:8,
        flexDirection: 'row'
    },
    hasTBBorder: {
        borderTopWidth: 1,
        borderBottomColor: '#ccc',
        borderTopColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 10
    }
});
var ICON = {
    serviceAd: 'http://pic.c-ctrip.com/h5/tuan/service.jpg',
}
class Page extends React.Component {
    componentDidMount(){
        console.log(this.props.navigator);
    }
    goDetail(){
        this.props.navigator.push({
            title: 'Detail',
            component: Detail,
            backButtonTitle: 'Back',
            leftButtonTitle: 'xx',
            //rightButtonTitle: ' ',
            backButtonIcon: require('image!test')
        })
    }
    render(){
        var self = this;
        return (
            <ScrollView style={styles.wrapCls}>
                <View style={[styles.hasTBBorder]}>
                    <Image resizeMode="contain" style={{height: 100}} source={{uri:ICON.serviceAd}}/>
                    <View style={styles.contentWrap}>
                        <View style={styles.labelWrap}>
                            <Image style={styles.icon} source={require('image!refund')}/>
                            <Text style={styles.label}>未消费随时退</Text>
                        </View>
                        <Text style={styles.blockText}>退款流程</Text>
                        <Text style={styles.descText}>
                        团购成功但未消费此券 → 登录“我的携程” → 在“团购订单”中“申请退款” → 审核通过后退款至携程钱包现金余额/原支付账户</Text>
                        <Text style={styles.blockText}>退款时间</Text>
                        <Text style={styles.descText}>
    a)退至现金余额：退款申请审核通过后，会在1-2个工作日把款项退回到您的携程钱包现金账户，礼品卡支付部分退回至礼品卡账户。携程钱包现金余额可再次购买团购产品时直接冲抵现金。（此服务不收取任何手续费）
    b) 原路退回：退款申请审核通过后，会在2-10个工作日把款项退回到您的原支付账户。（此服务不收取任何手续费）</Text>
    <Text style={styles.blockText}>以下情况不适用</Text>
    <Text style={styles.descText}>
    1. 已消费的携程团购券（包括：在线预约成功的，电话预约成功的，已经使用或入住的）
    2. 在产品说明中明确标明不支持"未消费，随时退"的产品或服务
                        </Text>
                    </View>
                </View>
                <View style={[styles.hasTBBorder]}>
                    <Image resizeMode="contain" style={{height: 120}} source={{uri:ICON.serviceAd}}/>
                    <View style={styles.contentWrap}>
                        <View style={styles.labelWrap}>
                            <Image style={styles.icon} source={require('image!refund')}/>
                            <Text style={styles.label}>未消费随时退</Text>
                        </View>
                        <Text style={styles.blockText}>退款流程</Text>
                        <Text style={styles.descText}>
                        团购成功但未消费此券 → 登录“我的携程” → 在“团购订单”中“申请退款” → 审核通过后退款至携程钱包现金余额/原支付账户</Text>
                        <Text style={styles.blockText}>退款时间</Text>
                        <Text style={styles.descText}>
    a)退至现金余额：退款申请审核通过后，会在1-2个工作日把款项退回到您的携程钱包现金账户，礼品卡支付部分退回至礼品卡账户。携程钱包现金余额可再次购买团购产品时直接冲抵现金。（此服务不收取任何手续费）
    b) 原路退回：退款申请审核通过后，会在2-10个工作日把款项退回到您的原支付账户。（此服务不收取任何手续费）</Text>
    <Text style={styles.blockText}>以下情况不适用</Text>
    <Text style={styles.descText}>
    1. 已消费的携程团购券（包括：在线预约成功的，电话预约成功的，已经使用或入住的）
    2. 在产品说明中明确标明不支持"未消费，随时退"的产品或服务
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

module.exports = Page;
