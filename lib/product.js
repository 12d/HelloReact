
'use strict';
var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  DataSource,
  TouchableHighlight,
  ListView,
  ScrollView,
  Image,
  View,
} = React;

var styles = StyleSheet.create({
  container: {

  },
  productContainer: {
      flexDirection:'row',
      backgroundColor: 'white',

  },
  rightContainer: {
      flex: 1,
      paddingLeft: 10
  },
  productImg: {
    height: 90,
    width: 90
  },
  hotelName: {
    fontSize: 17,
    color: '#253342',
    paddingTop: 5
  },
  subtitle: {
    fontSize: 13,
    color: '#999999',
    paddingTop: 5
  },
  price: {
    fontSize: 19,
    color: '#fd8612',
    paddingTop: 5
  },
  oprice: {
    fontSize: 12,
    color: '#999999'
  },
  soldCount: {
    fontSize: 12,
    color: '#999999'
  },
  score: {
    color: '#099fde',
    fontSize: 12
  },
  noResult: {
    marginTop: 200,
    color: '#ff0000',
    fontSize: 12
  },
  scrollView: {height:600}
});
var Product = React.createClass({
  detailHandler (e){

  },
  render (){
    return (

          <View style={styles.productContainer}>
            <Image style={styles.productImg} source={{uri: this.props.dataSource.icon}}/>
            <View style={styles.rightContainer}>
            <Text style={styles.hotelName}>{this.props.dataSource.hotelName}</Text>
            <Text style={styles.subtitle}>{this.props.dataSource.subtitle}</Text>
            <Text style={styles.price}>{this.props.dataSource.price}</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.oprice}>{this.props.dataSource.oprice}</Text>
              <View style={{flex:1,flexDirection:'row',marginLeft: 140,alignItems:'flex-end'}}>
                <Text style={styles.soldCount}>已售{this.props.dataSource.soldCount}</Text>
                <Text style={styles.soldCount}>|</Text>
                <Text style={styles.score}>{this.props.dataSource.score}分</Text>
                </View>
              </View>
            </View>
          </View>

    )
  }
});

module.exports = Product;
