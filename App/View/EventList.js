'use strict';

import React from 'react';

import {
  View,
  ListView
} from 'react-native';
import {
  List
} from 'native-base';
import EventItem from './EventItem';
import NavigationBar from '../../common/App/View/NavigationBar'

//testing
import _testEventsForList from '../../test/testItems';

export default class EventList extends React.Component{
  constructor(props){
    super(props);
    const dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state = {
      dataSource:_testEventsForList(props)
    }
  }
  renderRow(eventItem,sectionID,rowID,highlightRow){
    //let {navigator} = this.props;
    return(
      <EventItem
        item={eventItem}
        />
    )
  }
  render(){
    let navigationBar =
      <NavigationBar
          title='EventListPage'
          />;
    let content =
      <List
        dataArray={this.state.dataSource}
        renderRow={(item)=>this.renderRow(item)}
      ></List>;
    return(
      <View>
        {navigationBar}
        {content}
      </View>
    );
  }
}
