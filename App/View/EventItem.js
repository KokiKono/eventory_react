'use strict';

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  ListItem
} from 'native-base';
export default class EventItem extends React.Component{
  render(){
    return(
      <ListItem>
        <Text>{this.props.item.name}</Text>
      </ListItem>
    );
  }
}
