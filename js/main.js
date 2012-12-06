define(['hbs!../template/main'], function (mainTPL) {
  var data = {
    name: 'ddio',
    sex: '男',
    avatar: 'http://www.missingkids.org.tw/miss_focusimages/98253_s.jpg',
    currentAge: 20,
    missingAge: 8,
    missingDate: '民國77年1月',
    missingRegion: '新北市板橋區',
    missingCause: '被拐(抱)走 ',
    missingLocation: '街道',
    character: '眉粗、眼大'
  };

  $('#wrapper').html( mainTPL(data) );
});
