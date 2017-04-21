'use strict';

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  InteractionManager,
  Platform
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import HomePage from './HomePage'

export default class WelcomePage extends React.Component{
  componentDidMount(){
    const {navigator} =this.props;
    this.timer = setTimeout(()=>{
      InteractionManager.runAfterInteractions(()=>{
        SplashScreen.hide();
        navigator.resetTo({
          component:HomePage,//home Page
          name:'Home'
        });
      });
    },5000);
  }
  componentWillUnmount(){
    this.timer && clearTimeout(this.timer);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Eventory</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
