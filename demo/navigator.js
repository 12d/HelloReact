'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';

import HelloWorld from "./demo/pages/helloworld";
import HelloReactNative from "./demo/pages/helloreact";
import Menu from "./demo/pages/menus";
//路由配置
var routeConfig = {
    index: HelloWorld,
    list: HelloReactNative,
    menu: Menu
  }
;

class HelloReact extends Component {
  render() {
    return (
      //history
         <Navigator renderScene={this.renderScene} initialRoute={{name:'menu'}} configureScene={this.configureScene}/>
          )
      }
      renderScene (route, navigator) {
        var Scene = routeConfig[route.name];
        return <Scene route={route} navigator={navigator} message={route.message}/>
      }
      configureScene(route){

        if (route.sceneConfig) {
          return route.sceneConfig;
        }
        return Navigator.SceneConfigs.HorizontalSwipeJump;
  
      }
}

/*
class HelloReact extends Component {
  render() {
    return (
      <NavigatorIOS
                    ref= "nav"
                    tintColor= '#FFFFFF'
                    barTintColor= '#039CDD'
                    titleTextColor= '#FFFFFF'

              initialRoute={{
                  title: '点评页',
                  component: HelloWorld,
                  backButtonTitle: '',
                  leftButtonTitle: 'left'
                  rightButtonTitle: 'Mores'
              }}/>
    );
  }
}
*/
AppRegistry.registerComponent('HelloReact', () => HelloReact);
