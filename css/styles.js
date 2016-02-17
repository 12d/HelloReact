'use strict';
var React = require('react-native');

var {
  StyleSheet,
} = React;
var styles = StyleSheet.create({
    wrapCls: {
        overflow: 'visible',
        backgroundColor: '#f4f4f4'
    },
    commentItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    mainComments: {
        flexDirection: 'column'
    },
    commentsRow: {
        flexDirection: 'row',
        padding: 2
    },
    referItem: {
        color: '#999',
        flex: 1
    },
    starCls: {

    },
    labelCls: {
        width: 45,
        color: '#333'
    },
    recommendCls: {
        flex: 1,
        textAlign: 'right',
        color: '#333'
    },
    scoreCls: {
        flex: 1,
        color: '#099fde',
        marginLeft: 25

    },
    grayCls: {
        color: '#666'
    },
    phoneCls: {
        width: 100
    },
    reviewCls: {
        marginTop: 5,
        lineHeight: 20,
        color: '#333'
    },
    usersReview: {
        flexDirection: 'column',
        marginBottom: 0,
        marginTop: -1
    }
});
module.exports = styles;
