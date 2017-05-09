'use strict';

import React from 'react';

import {View, ListView, Text,ScrollView} from 'react-native';
import {List} from 'native-base';
import EventItem from './EventItem';
import NavigationBar from '../../common/App/View/NavigationBar';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

//testing
import _testEventsForList from '../../test/testItems';
import _testTabItem from '../../test/testTabs';

//デフォルトはIDの昇順
const DEFAULT_TABS = [
  {
    id: -2,
    name: '新着',
    label: 'new'
  }, {
    id: -1,
    name: '注目',
    label: 'popular'
  }, {
    id: 0,
    name: 'おすすめ',
    label: 'recommend'
  }
];

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: _testEventsForList(props)
    }
  }
  renderRow(eventItem, sectionID, rowID, highlightRow) {
    //let {navigator} = this.props;
    return (<EventItem item={eventItem}/>);
  }
  render() {
    let navigationBar = <NavigationBar title='eventory'/>;
    let content = <ScrollableTabView initialPage={0}renderTabBar={() => <ScrollableTabBar/>}>
      {_testTabItem(DEFAULT_TABS).map((result, i, arry) => {
        return <EventTab key={i} tabLabel={arry[i].name}/>
      })}
    </ScrollableTabView>;
    return (
      <View style={[{flex:1}]}>
        {navigationBar}
        {content}
      </View>
    );
  }
}
class EventTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: _testEventsForList(props)
    }
  }
  _renderRow(eventItem, sectionID, rowID, highlightRow) {
    return (<EventItem item={eventItem}/>);
  }
  render() {
    return (
      <List dataArray={this.state.dataSource} renderRow={(item) => this._renderRow(item)}></List>
    );
  }
}
