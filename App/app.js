'use strict';

import React from 'react';
import {
  Navigator
} from 'react-native';
//SplashScreen がうまく動作しない...
//import WelcomePage from './View/WelcomePage';
import HomePage from './View/HomePage';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
  _renderScene(route,navigator){
    return(
      <route.component navigator={navigator}/>
    );
  }
  render(){
    return(
      <Navigator
        initialRoute={{
          name:'First Page',
          component:HomePage
        }}
        renderScene={(route,navigator)=>this._renderScene(route,navigator)}
        />
    );
  }
}
