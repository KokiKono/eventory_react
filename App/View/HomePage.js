'use strict';

import React from 'react';
import {
  View
} from 'react-native';
import EventList from './EventList';

export var TABS = {
  tab_new:'新着',tab_pickup:'注目'
}

export default class HomePage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View>
        <EventList>
          
        </EventList>
      </View>
    );
  }
}
