'use strict';

module.exports = _testTabItem;
function _testTabItem(DEFAULT_TABS){
  var tabs=[];
  var defCount=0;
  if(DEFAULT_TABS){
    for(var count=0;count<DEFAULT_TABS.length;count++){
      var tab={
        id:DEFAULT_TABS[count].count,
        name:DEFAULT_TABS[count].name,
        label:DEFAULT_TABS[count].label
      }
      tabs.push(tab);
      defCount++;
    }
  }
  for(var count=0;count<10;count++){
    var tab={
      id:count+defCount,
      name:'tabItem:'+count,
      lebel:'many'
    }
    tabs.push(tab);
  }
  return tabs;
}
