'use strict';

module.exports = _testEventsForListView;
module.exports = _testEventsForList;
function _testEventsForListView(dataSource, props) {
  let datas = _testEvents(props);
  return dataSource.cloneWithRows(datas);
}
function _testEventsForList(props) {
  let eventType = props.eventType;
  let datas = [];
  let tabLabel = props.tabLabel ? props.tabLabel+'の':'';
  for (var count = 0; count < 10; count++) {
    var item = {
      id:count,
      name: tabLabel+eventType + ':' + count,
      address: '大阪府大阪市北区梅田3-1',
      startAt: '9999年99月99日 99:99',
      endAt: '99月99日 99:99',
      isKeep: false,
      isNoKeep: true,
      apiType: 'ATDN',
      limits: 5,
      wait: 2,
      url: 'www.example.com',
      isKeep:count%2==0?false:true,
      isNoKeep:count%2==1?false:true
    }
    datas.push(item);
  }
  return datas;
}
