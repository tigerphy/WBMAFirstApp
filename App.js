
import React from 'react';
import { header, StatusBar, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, footerArea, ImageBackground} from 'react-native';
import List from './components/List';
import GlobalStyles from './utils/GlobalStyles';


const Flexboxdemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='orange' barStyle='light-content'/>

      <View style={styles.header}>
      <ImageBackground
      source={require('./assets/original.jpg')}
      style={styles.bgImage}
      imageStyle={{borderRadius: 70}}
      >
        </ImageBackground>
        <Text style={styles.hello}>Hello Stranger, hope you are ok</Text>
        </View>

      <View style={styles.infoArea}/>

      <View style={styles.areaA}>
        <Text>Hello World</Text> 
      </View>

      <View style={styles.areaB}>
        <Text>AreaB</Text> 
      </View>

      <View style={styles.footerArea}/>
    </SafeAreaView>
  );
 };

 export default Flexboxdemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    height: '100%',
    paddingTop: 0,
  },
  header: {
    height: 270,
    backgroundColor: 'white',
  },
  bgImage:{
    width: '100%',
    height: 270,
  },
  hello: {

  },
  infoArea: {
    flex: 6,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
  },
  areaA:{
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  footerArea: {
    flex: 1,
    backgroundColor: 'steelblue',
  }

});
