'use strict';
import  React,{
 
  AppRegistry,
  Component,
  View,
  StyleSheet,
  TouchableHighlight,
  Navigator,
  Text
} from 'react-native';
var styles = StyleSheet.create({
   redText: {
      color:"red"
   },
   menuItem: {
      fontSize: 20
   },
   center: {
      marginTop: 50,
      marginLeft: 50
   }
});

class Menu extends Component {
  componentDidMount(){
    
  }
  render() {
    this.navigator = this.props.navigator;

    return (
        <View style={styles.center}>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='FadeAndroid' navigator={this.navigator}>
            <Text style={styles.menuItem}>*FadeAndroid</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='FloatFromBottom' navigator={this.navigator}>
            <Text style={styles.menuItem}>*FloatFromBottom</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='FloatFromBottomAndroid' navigator={this.navigator}>
            <Text style={styles.menuItem}>*FloatFromBottomAndroid</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='FloatFromLeft' navigator={this.navigator}>
            <Text style={styles.menuItem}>*FloatFromLeft</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='FloatFromRight' navigator={this.navigator}>
            <Text style={styles.menuItem}>*FloatFromRight</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='HorizontalSwipeJump' navigator={this.navigator}>
            <Text style={styles.menuItem}>*HorizontalSwipeJump</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='HorizontalSwipeJumpFromRight' navigator={this.navigator}>
            <Text style={styles.menuItem}>*HorizontalSwipeJumpFromRight</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='PushFromRight' navigator={this.navigator}>
            <Text style={styles.menuItem}>*PushFromRight</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='VerticalDownSwipeJump' navigator={this.navigator}>
            <Text style={styles.menuItem}>*VerticalDownSwipeJump</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.goto} data-link='index' data-animate='VerticalUpSwipeJump' navigator={this.navigator}>
            <Text style={styles.menuItem}>*VerticalUpSwipeJump</Text>
          </TouchableHighlight>
        </View>
    );
  }
  goto (){
    console.log(Navigator.SceneConfigs);
    this.navigator.push({
      name: this['data-link'],
      message: 'Swipe right to dismiss',
      sceneConfig: Navigator.SceneConfigs[this['data-animate']]
      //configureScene: Navigator.VerticalUpSwipeJump
    })
  }

}
module.exports = Menu;
// AppRegistry.registerComponent('HelloReact', () => HelloReact);
