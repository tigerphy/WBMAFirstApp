import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './navigators/Navigator';


const App = () => {
  return 
    <Navigator></Navigator>
  
 };

 console.log("home");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;