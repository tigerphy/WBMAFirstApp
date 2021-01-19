
import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, ImageBackground} from 'react-native';
import List from './components/List';
import { Menu, Settings} from 'react-native-feather';


const Flexboxdemo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='rgb(255, 160, 91)' barStyle='light-content'/>

      <View style={styles.header}>
      <ImageBackground
      source={require('./assets/original.jpg')}
      style={styles.bgImage}
      imageStyle={{borderBottomRightRadius: 70}}
      >
        </ImageBackground>
      <Menu stroke="white" width={32} height={32} style={styles.menu}/>
      <Settings stroke="white" width={32} height={32} style={styles.settings}/>
        <Text style={styles.hello}>Hello Stranger, hope you are ok</Text>
        </View>

      <View style={styles.infoArea}>

      <View style={styles.areaA}>
      <Text>Cool Kitten</Text> 
      </View>

      <View style={styles.areaB}>
       <List/>
      </View>

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
    height: 260,
  },
  hello: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    color: 'white',
    backgroundColor : 'rgba(0,0,0,0.5)',
    padding: 10,
  },
  menu:{
  position: 'absolute',
  top: 20,
  left: 20,
  },
  settings:{
    position: 'absolute',
    top: 20,
    right: 20,
  },
  infoArea: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: 'skyblue',
  },
  areaA:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  areaB:{
    flex: 8,
    backgroundColor: 'green',
  },
  footerArea: {
    flex: 1,
    backgroundColor: 'steelblue',
  }

});
