'use strict';

import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Content, ListItem, Icon} from 'native-base';
import Button from 'apsl-react-native-button';

export default class EventItem extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isKeep:props.item.isKeep,
      isNoKeep:props.item.isNoKeep
    }
  }
  render() {
    var period = this.props.item.startAt + '~' + this.props.item.endAt;
    var limitBar = this.props.item.wait + '/定員' + this.props.item.limits + '人';
    return (
      <ListItem style={styles.container}>
        <View style={styles.flatView}>
          <Content>
            <Text style={[styles.titleView, styles.content]} ellipsizeMode='tail' numberOfLines={1}>{this.props.item.name}</Text>
            <Text style={[styles.content]}>{this.props.item.address}</Text>
            <Text style={[styles.content]}>{period}</Text>
            <View style={[styles.content, styles.limitBar]}>
              <Text style={{
                textAlign: 'center'
              }}>{limitBar}</Text>
            </View>
            <View style={styles.buttonSheet}>
              <EventButtons
                isKeep={this.state.isKeep}
                isNoKeep={this.state.isNoKeep}
                onPressKeep={()=>this._onPressKeep()}
                onPressNoKeep={()=>this._onPressNoKeep()}/>
            </View>
          </Content>
        </View>
      </ListItem>
    );
  }

  _onPressKeep(){
    if(this.state.isKeep){return;}
    if(this.state.isKeep == false && this.state.isNoKeep == false){
      this.setState({isKeep:true});
      return;
    }
    this._toggleEventStatus();
  }
  _onPressNoKeep(){
    if(this.state.isNoKeep){return;}
    if(!this.state.isKeep && !this.state.isNoKeep){
      this.setState({isNoKeep:!this.state.isNoKeep});
      return;
    }
    this._toggleEventStatus();
  }
  _toggleEventStatus(){
    this.setState({
      isKeep:this.state.isNoKeep,
      isNoKeep:this.state.isKeep
    });
  }
}
class EventButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keepIconSource:this._getKeepIcon(props),
      noKeepIconSource:this._getNoKeepIcon(props),
      keepBackgroundStyle:this._getKeepBackgroundStyle(props),
      noKeepBackgroundStyle:this._getNoKeepBackgroundStyle(props),
      keepTextColor:this._getKeepTextColor(props),
      noKeepTextColor:this._getNoKeepTextColor(props)
    }
  }
  onResume(props){
    this.setState({
      keepIconSource:this._getKeepIcon(props),
      noKeepIconSource:this._getNoKeepIcon(props),
      keepBackgroundStyle:this._getKeepBackgroundStyle(props),
      noKeepBackgroundStyle:this._getNoKeepBackgroundStyle(props),
      keepTextColor:this._getKeepTextColor(props),
      noKeepTextColor:this._getNoKeepTextColor(props)
    });
  }
  render() {
    return (
      <View style={styles.buttonSheet}>
        <EventButton
           iconSource={this.state.noKeepIconSource}
           backgroundStyle={this.state.noKeepBackgroundStyle}
           borderStyle={{borderColor:'#dcdcdc'}}
           text='興味なし'
           textColor={this.state.noKeepTextColor}
           onPress={this.props.onPressNoKeep}/>
        <View style={{
           flex:1
         }}/>
        <EventButton
          iconSource = {this.state.keepIconSource}
          backgroundStyle={this.state.keepBackgroundStyle}
          borderStyle={{borderColor: '#E67E22'}}
          text='Keep'
          textColor={this.state.keepTextColor}
          onPress={this.props.onPressKeep}/>
      </View>
    );
  }
  _getKeepIcon(props){
    return props.isKeep ?
      require('../../resource/eventory-assets/image/assets/many/ios/keepOn.png'):
      require('../../resource/eventory-assets/image/assets/many/ios/keepOff.png');
  }
  _getKeepBackgroundStyle(props){
    return props.isKeep?
      {backgroundColor:'#E67E22'}:{backgroundColor:'#FFFFFF'};
  }
  _getNoKeepIcon(props){
    return props.isNoKeep?
      require('../../resource/eventory-assets/image/assets/many/ios/noKeepOn.png'):
      require('../../resource/eventory-assets/image/assets/many/ios/noKeepOff.png');
  }
  _getNoKeepBackgroundStyle(props){
    return props.isNoKeep?
      {backgroundColor:'#dcdcdc'}:{backgroundColor:'#FFFFFF'};
  }
  _getKeepTextColor(props){
    return props.isKeep?
    {color:'#FFFFFF'}:{color:'#E67E22'};
  }
  _getNoKeepTextColor(props){
    return props.isNoKeep?
    {color:'#FFFFFF'}:{color:'#dcdcdc'};
  }
  componentWillReceiveProps(nextProps){
    this.onResume(nextProps);
  }
}
class EventButton extends React.Component {
  render() {
    var icon = this.props.iconSource == ''
      ? <View/>
    : <Image source={this.props.iconSource}/>;
    return (
      <Button style={[styles.buttonView, this.props.borderStyle, this.props.backgroundStyle]}
        onPress={this.props.onPress}>
        {icon}
        <View style={{
          width: 10
        }}/>
      <Text style={[this.props.textColor,{fontWeight:'bold'}]}>{this.props.text}</Text>
      </Button>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatView: {
    flex: 1,
    padding: 5
  },
  cardView: {
    flex: 1,
    height: 150,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    padding: 10
  },
  content: {
    marginBottom: 5
  },
  titleView: {
    height: 20,
    fontSize: 20,
    fontFamily: 'Al Nile',
    color: '#3F51B5'
  },
  limitBar: {
    flex: 1,
    height: 20,
    borderRadius: 5,
    padding: 2.5,
    backgroundColor: '#dcdcdc'
  },
  buttonSheet: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonView: {
    flex: 1,
    borderWidth: 1
  }
})
