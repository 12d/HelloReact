'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text
} from 'react-native';

//外联css
import CSSText from './demo/cssText';

var styles = StyleSheet.create({
   redText: {
      color:"red"
   },
   center: {
      marginTop: 300,
      marginLeft: 150
   }
})
class HelloReact extends Component {
  render() {
    return (
        // #样式表
        // <Text style={styles.redText}>
        //   HelloWorld
        // </Text>
        // #内联
        // <Text style={{color:'blue'}}>
        //   HelloWorld
        // </Text>
        // // #组合
        // <Text style={[styles.redText, styles.center]}>
        //   HelloWorld
        // </Text>
        // #外联
        <Text style={[styles.redText, styles.center, CSSText.hello]}>
          HelloWorld
        </Text>
    );
  }
}
AppRegistry.registerComponent('HelloReact', () => HelloReact);
