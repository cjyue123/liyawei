/**
 * Created by Li on 2015/12/28.
 */

$(function () {
    /**/
    //$('aside.slide-wrapper').on('touchstart', 'li', function (e) {
    //  $(this).addClass('current').siblings('li').removeClass('current');
    //});
    //
    //$('a.slide-menu').on('click', function (e) {
    //  var wh = $('div.wrapperhove' + 'rtree').height();
    //  $('div.slide-mask').css('height', wh).show();
    //  $('aside.slide-wrapper').css('height', wh).addClass('moved');
    //});
    //
    //$('div.slide-mask').on('click', function () {
    //  $('div.slide-mask').hide();
    //  $('aside.slide-wrapper').removeClass('moved');
    //});
    //
    //$('#stock-tend').on('click', function () {
    //  var e = window.event || arguments[0];
    //  var src = e.srcElement || e.target;
    //  if (src.nodeName == "INPUT") {
    //    console.log(src,src.value);
    //    $(src).parent().siblings().removeClass('am-active');
    //    $(src).parent().addClass('am-active');
    //    containerPain('', src.value);
    //  }
    //  //$(".container").find("input").parent().filter('.am-active').find('input').val();
    //})

    containerPain('', 'M1');


  }
)
var objects = ["最高:28796.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;昨收:28762.0<br>最低:28728.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今开:28762.0", [[1450947600000, 28707.0, 28714.0, 28694.0, 28701.0], [1450948500000, 28701.0, 28728.0, 28694.0, 28714.0], [1450949400000, 28714.0, 28728.0, 28687.0, 28707.0], [1450950300000, 28707.0, 28741.0, 28680.0, 28721.0], [1450951200000, 28721.0, 28748.0, 28721.0, 28728.0], [1450952100000, 28728.0, 28741.0, 28707.0, 28728.0], [1450953000000, 28728.0, 28728.0, 28680.0, 28680.0], [1450953900000, 28680.0, 28687.0, 28653.0, 28680.0], [1450954800000, 28680.0, 28687.0, 28660.0, 28667.0], [1450955700000, 28667.0, 28674.0, 28646.0, 28646.0], [1450956600000, 28646.0, 28660.0, 28599.0, 28626.0], [1450957500000, 28626.0, 28694.0, 28613.0, 28674.0], [1450958400000, 28674.0, 28687.0, 28667.0, 28687.0], [1450959300000, 28687.0, 28728.0, 28687.0, 28707.0], [1450960200000, 28707.0, 28707.0, 28599.0, 28633.0], [1450961100000, 28633.0, 28646.0, 28613.0, 28613.0], [1450962000000, 28613.0, 28687.0, 28606.0, 28674.0], [1450962900000, 28674.0, 28674.0, 28606.0, 28606.0], [1450963800000, 28606.0, 28653.0, 28599.0, 28646.0], [1450964700000, 28646.0, 28701.0, 28626.0, 28701.0], [1450965600000, 28701.0, 28721.0, 28680.0, 28701.0], [1450966500000, 28701.0, 28728.0, 28667.0, 28680.0], [1450967400000, 28680.0, 28762.0, 28674.0, 28755.0], [1450968300000, 28755.0, 28768.0, 28721.0, 28721.0], [1450969200000, 28721.0, 28762.0, 28707.0, 28755.0], [1450970100000, 28755.0, 28768.0, 28735.0, 28741.0], [1450971000000, 28741.0, 28755.0, 28728.0, 28741.0], [1450971900000, 28741.0, 28762.0, 28735.0, 28762.0], [1450972800000, 28762.0, 28768.0, 28741.0, 28762.0], [1450973700000, 28762.0, 28762.0, 28748.0, 28762.0], [1450974600000, 28762.0, 28796.0, 28762.0, 28796.0], [1450975500000, 28796.0, 28796.0, 28768.0, 28768.0], [1450976400000, 28768.0, 28775.0, 28768.0, 28775.0], [1450977300000, 28775.0, 28775.0, 28741.0, 28741.0], [1450978200000, 28741.0, 28748.0, 28728.0, 28748.0], [1450979100000, 28748.0, 28748.0, 28728.0, 28741.0], [1450980000000, 28741.0, 28762.0, 28741.0, 28762.0], [1450980900000, 28762.0, 28768.0, 28735.0, 28741.0], [1450981800000, 28741.0, 28741.0, 28728.0, 28735.0], [1450982700000, 28735.0, 28735.0, 28735.0, 28735.0]]];


function containerPain(code, weekflg) {
  if ('' == weekflg) {
    var weekflg = $(".container").find("input").parent().filter('.am-active').find('input').val();//周期（M1,M5,M15,...MN）
    if (typeof(weekflg) == "undefined") {
      weekflg = $(".container").find("input")[0].value;
    }
  }
  //var rows = 40;
  //$.post('/XiangShangWeiXin/data/hiData.do',{pricecode:code,weekflg:weekflg,rows:rows},function(objects){

  var data = objects[1];
  $("#container").highcharts('StockChart', {
    chart: {
      events: {
        load: function () {
          series = this.series[0];

        }
      },
      backgroundColor: '#F0FAFC',
      pinchType: '',// 让在移动端可以滑动
      zoomType: ''
    },
    colors: ['#99caf2', '#434348', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#8085e8', '#8d4653', '#91e8e1'],
    title: {
      style: {"color": "#0978d2", "fontSize": "12px"},
      text: objects[0],
      align: 'right',
      useHTML: true
    },
    credits: { // 网站标识
      enabled: false
    },
    exporting: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
        console.log(this);
        var d = '<b>' + Highcharts.dateFormat("%Y-%m-%d %H:%M", this.x) + '</b><br/>';
        if (weekflg == 'M1') {

          d += name + ":" + this.y + '元	';
        } else {
          d += name + '<br/>';
          d += '开盘价: <span style="line-height: 25px;">' + this.points[0].point.open + "元</span><br/>";
          d += '最高价: <span style="line-height: 25px;">' + this.points[0].point.high + "元</span><br/>";
          d += '最低价: <span style="line-height: 25px;">' + this.points[0].point.low + "元</span><br/>";
          d += '收盘价: <span style="line-height: 25px;">' + this.points[0].point.close + "元</span><br/>";
        }
        return d;
      }
// 				valueSuffix: '元	',
// 	            xDateFormat: '%Y-%m-%d %H:%M'//鼠标移动到趋势线上时显示的日期格式
    },
    navigator: { // 底部导航内容
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    rangeSelector: {
      enabled: false
    },
    xAxis: {
      dateTimeLabelFormats: {
        second: weekflg == 'D1' ? '%m-%d' : '%H:%M:%S',
        minute: weekflg == 'D1' ? '%m-%d' : '%H:%M',
        hour: weekflg == 'D1' ? '%m-%d' : '%H:%M',
        day: weekflg == 'D1' ? '%m-%d' : '%H:%M',
        week: weekflg == 'D1' ? '%m-%d' : '%H:%M',
        month: weekflg == 'D1' ? '%m-%d' : '%H:%M'
      },
      top: 40,
      lineColor: '#000',
      lineWidth: 1,
      type: 'datetime',
      tickWidth: 1,
      tickColor: '#000',
      tickPixelInterval: 50,
      tickLength: 0,
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    yAxis: {
      top: 40,
      opposite: false,
      minorTickInterval: "auto",
      lineColor: '#000',
      lineWidth: 1,
      tickWidth: 1,
      tickLength: 0,
      tickColor: '#000',
      title: {
        text: ''
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    series: [{
      type: weekflg == 'M1' ? '' : 'candlestick',
      name: name,
      data: data
    }]
  });
}
;

//});