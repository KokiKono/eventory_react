'use strict';

import React from 'react';

import {
  ListView
} from 'react-native';
import EventItem from './EventItem';
export default class EventList extends React.Component{
  constructor(props){
    super(props);
    let dataSource = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2 });
    this.state = {
      dataSource:this._testEvents(dataSource,props);
    }
  }
  renderRow(eventItem,sectionID,rowID,highlightRow){
    let {navigator} = this.props;
    return(
      <EventItem
        item=eventItem
        />
    )
  }
  render(){
    var content =
      <List
        dataArray={this.state.dataSource}
        renderRow={this.renderRow}
      ></List>
    return(
      <View>
        {content}
      </View>
    );
  }
  _testEvents(dataSource,props){
    let eventType = props.eventType;
    let datas = [];
    for(var count=0; count<100; count++){
      var item = {
        name:eventType+':'+count,
        address:'日本のどこか',
        startAt:'9999年99月99日',
        endAt:'99月99日',
        isKeep:false,
        isNoKeep:true,
        apiType:'ATDN',
        limits:5,
        wait:2,
        url:'www.example.com'
      }
      datas.push(item);
    }
    return dataSource.cloneWithRows(datas);
  }
}
