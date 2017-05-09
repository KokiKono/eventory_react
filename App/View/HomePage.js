'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image
} from 'react-native';
import EventList from './EventList';
import TabNavigator from 'react-native-tab-navigator';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

//デフォルトはIDの昇順
const DEFAULT_TABS=[
  {id:-2,name:'新着',type:'new'},
  {id:-1,name:'おしらせ',type:'news'},
  {id:0,name:'マイページ',type:'myPage'}
];
export default class HomePage extends React.Component{

  constructor(props){
    super(props);
    this.state={
      selectedTab:-2
    }
  }
  render(){
    return(
      <View style={styles.container}>
        {this._createTabs()}
      </View>
    );
  }
  _renderTab(Component,selectedTab,title,renderIcon){
    return(
      <TabNavigator.Item
        selected={this.state.selectedTab === selectedTab}
        title={title}
        onPress={()=>this.setState({selectedTab:selectedTab})}
        renderIcon={()=><Image source={renderIcon} />}
        renderSelectedIcon={()=><Image source={renderIcon} style={{tintColor:'#E67E22'}} />}
        selectedTitleStyle={{color:'#E67E22'}}
        >
        <Component {...this.props}/>
      </TabNavigator.Item>
    );
  }
  _createTabs(){
    var tabs=[];
    for(var tab in DEFAULT_TABS){
      var obj = this._renderTab(EventList,tab.id,tab.name);
      tabs.push(obj);
    }
    return(
      <View style={styles.container}>
        <TabNavigator
          tabBarStyle={{opacity: 1,}}
          sceneStyle={{paddingBottom: 0}}>
          {this._renderTab(EventList,DEFAULT_TABS[0].id,DEFAULT_TABS[0].name)}
          {this._renderTab(EventList,DEFAULT_TABS[1].id,DEFAULT_TABS[1].name)}
          {this._renderTab(EventList,DEFAULT_TABS[2].id,DEFAULT_TABS[2].name,require('../../resource/eventory-assets/image/assets/many/ios/settingOff.png'))}
        </TabNavigator>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
