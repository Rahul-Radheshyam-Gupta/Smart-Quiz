

google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':["calendar"]});


/*google.setOnLoadCallback(chart001);*/

var colors_list = ['#40C4FF','#FDD835','#9575CD']
var many_color_list = ['#40C4FF','#FDD835','#9575CD','#81c784','#f48fb1','#304ffe','#afb42b','#ff5252'];
// ['#9575CD','#FDD835','#40C4FF','#FF5252','#37BC9B'];

var legend_option = { position: 'right', maxlines : 1, textStyle:{fontSize:12}}
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

var annotations_settings = {
                  stem: {
                    color: 'transparent',
                    length: 120,
                  },
                  
                   textStyle: {
                  fontName: 'sans-serif',
                  fontSize: 40,
                  bold: true,
                  italic: true,
                  // The color of the text.
                  color: '#dfdfdf',
                  // The color of the text outline.
                  // auraColor: '#d799ae',
                  // The transparency of the text.
                  opacity: 0.8
                }
              }

function chart001(data, extra_parameters) {
// Used for Area Chart attendance
//used in team dashboard
    
    var title = ""
    var ticks = []
    var present_max = 0
    var absent_max = 0
    var max = 0
    if (data[0][0] != "")
    {
        title = 'Days',
        present_max = to_find_max(data,1)
        absent_max = to_find_max(data,2)
        max = 0
        if (present_max < absent_max){
            max = absent_max
        }
        else{
            max = present_max
        }
        ticks = calcIntTicks(max);
    }
    
    // Set chart options
    var options_area = { 
        annotations: annotations_settings,
        focusTarget: 'category',      
        height: 250,
        /*width : 800,*/
        fontSize: 12,
        colors:['#37BC9B', '#FF5252'],
        // legend: legend_option,
        chartArea: {
            left: '7%',
            right : '10%',
            top:'5%',
            width: '95%',
            height: 150,
        },
        curveType: "function" ,
        interval : {
          "style" : "area"
        },
        series : [{"color":'#37BC9B'}],
        vAxis: {
              title: 'No. of Employees',
                gridlines:{
                color: '#e9e9e9',
                // count: 5
                },
                ticks : ticks,  
        },
        hAxis: {
            title: title,
            titleTextStyle: {color: '#333'},
            
        },
        legend: {
            position: 'right',
            alignment: 'top',
            textStyle: {
                fontSize: 10,
            }
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('attendance-area-chart'));
    
    return [chart,options_area]

}

function chart002(data, extra_parameters) {
// Used for Area Chart expense
    
    var title = ""
    if (data[0][0] != "") {
        title = "Month"
    }
    
    
    var options_area = {
        annotations: annotations_settings,       
        height: 400,
          hAxis: {title: title,  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Amount',minValue: 0},
          legend: legend_option,
          colors: colors_list,
          focusTarget: 'category',
          isStacked: true,
          chartArea: {
            left: '10%',
        }
    };
    

    var chart = new google.visualization.AreaChart(document.getElementById('chart-area'));
    
    return [chart,options_area]

}


function chart003(data, extra_parameters) {
// Used for Pie Chart expense
    

    
    
    var options_area = {   
        annotations: annotations_settings,    
        height: 400,
        colors: colors_list,
        legend: legend_option,
        selectionMode: 'multiple',
        // pieSliceText: 'none',
        slices: {  0: {offset: 0.1},
                    1: {offset: 0.1},
                    2: {offset: 0.1},
          },
        sliceVisibilityThreshold:0.001,
        
        legend : {position : 'labeled'},
    };
    

    var chart = new google.visualization.PieChart(document.getElementById('chart-area'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null},{row:2,column:null}]);
            }
    });

    
    return [chart,options_area]

}


function chart004(data, extra_parameters) {
// Used for Bar Chart expense_

    var title = ""
    if (data[0][0] != "") {
        title = "Month"
    }
    
    
    var options_area = {  
        annotations: annotations_settings,     
        height: 200,
        colors: colors_list,
        hAxis: {title: title,  titleTextStyle: {color: '#333'}},
        vAxis: {title: 'Amount', titleTextStyle: {color: '#333'}},
        legend: { 
            position: 'bottom', maxlines : 1, textStyle:{fontSize:10}
        },
        bar: { groupWidth: '65%' },
        focusTarget: 'category',
        isStacked: true,
        seriesType: "bars",
        chartArea: {
            top : '5%',
            // left: '10%',
            height : '55%',
            width:'90%',
        },
        // series: {3: {type: 'line',color: colors_list[colors_list.length-1], visibleInLegend: false }}//this is for the trend line
        series: {
            0 : {pointShape : 'circle'},
            1 : {pointShape : 'circle'},
            2 : {pointShape : 'circle'},
        },
    };
    
    var chart = new google.visualization.ComboChart(document.getElementById('chart-area'));
    
    return [chart,options_area]

}


function chart005(data, extra_parameters) {
// Used for Pie Chart Attendance for present,absent,leave
    

    
    
    var options_area = {
          // title: 'My Attendance Log',
          pieHole: 0.9,
          height: 400,
          chartArea: {
             backgroundColor : {stroke : 'blue'},
          },
          colors : ['#4caf50','#bded16','#F44336','#f4ea76','#a4bb54','#d9dde2','#98ca9a','#8ed1ef'],
          legend : {position : 'labeled'},
        };
    

    var chart = new google.visualization.PieChart(document.getElementById('chart-area'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null},{row:2,column:null},{row:3,column:null},{row:4,column:null},{row:5,column:null},{row:6,column:null},{row:7,column:null}]);
            }
    });
    return [chart,options_area]

}


function chart006(data, extra_parameters) {
// Used for Pie Chart Attendance for late/early,on-time
    

    
    
    var options_area = {
          // title: 'My Attendance Log',
          pieHole: 0.9,
          height: 400,
          chartArea: {
             backgroundColor : {stroke : 'blue'},

          },
          colors : ['#4caf50','#bded16','#a4bb54','#f4ea76','#F44336','#d9dde2','#98ca9a','#8ed1ef'],
          legend : {position : 'labeled'},
        };
    

    var chart = new google.visualization.PieChart(document.getElementById('chart-area'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null},{row:2,column:null},{row:3,column:null},{row:4,column:null},{row:5,column:null},{row:6,column:null},{row:7,column:null}]);
            }
    });
    return [chart,options_area]


}


function chart007(data, extra_parameters) {
// Used for Bar Chart expense (1 of 3)
    

    
    // console.log('data',data)
    var title = ""
    if (data['1'][1][1] == "No data")
    {
        // console.log('if')
        var title = '';
    } 
    else{
        // console.log('else')
        var title = 'Month';
    }
    var options_area = {       
        annotations: annotations_settings,
        height: 250,
        colors: ['#40C4FF'],
        legend: { position: "none" },
        chartArea: {width: '70%',top:'5%'},
        hAxis: {
          title: 'Business Expense',
          // min : 0,
          gridlines: {
                count: 4
            },
            viewWindowMode:'explicit',
            viewWindow: {
                // max:100,
                min:0,
            },
        },
        vAxis: {
          title: title
        },
        bar: { groupWidth: '35%' },
    };
    
    $('#expense-mom-1').addClass('col-xs-4')
    var chart = new google.visualization.BarChart(document.getElementById('expense-mom-1'));
    
    return [chart,options_area]

}

function chart008(data, extra_parameters) {
// Used for Bar Chart expense (2 of 3)
       
    var options_area = {       
        annotations: annotations_settings,
        height: 250,
        colors: ['#FDD835'],
        legend: { position: "none" },
        chartArea: {width: '70%',top:'5%'},
        hAxis: {
          title: 'Travel Expense',
          // min : 0,
          gridlines: {
                count: 4
            },
            viewWindowMode:'explicit',
            viewWindow: {
                // max:100,
                min:0,
            },
        },
        vAxis: {
         //  baselineColor: '#fff',
         // gridlineColor: '#fff',
         textPosition: 'none',
         // autoScaleMinMaxEnabled : True
         // min : 0
        },
        bar: { groupWidth: '35%' },
    };
    
    $('#expense-mom-2').addClass('col-xs-4')
    var chart = new google.visualization.BarChart(document.getElementById('expense-mom-2'));
    
    return [chart,options_area]

}

function chart009(data, extra_parameters) {
// Used for Bar Chart expense (3 of 3)
    
    
    var options_area = {       
        annotations: annotations_settings,
        height: 250,
        colors: ['#9575CD'],
        legend: { position: "none" },
        chartArea: {width: '70%',top:'5%'},
        hAxis: {
          title: 'Trip Expense',
          // min : 0,
          gridlines: {
                count: 4
            },
            viewWindowMode:'explicit',
            viewWindow: {
                // max:100,
                min:0,
            },
        },
        vAxis: {
         //  baselineColor: '#fff',
         // gridlineColor: '#fff',
         textPosition: 'none',

        },
        bar: { groupWidth: '35%' },
    };
    
    $('#expense-mom-3').addClass('col-xs-4')
    var chart = new google.visualization.BarChart(document.getElementById('expense-mom-3'));
    
    return [chart,options_area]

}

function chart010(data, extra_parameters) {

var result_list = []
result_list[0] = chart007(data);
result_list[1] = chart008(data);
result_list[2] = chart009(data);

return result_list;
}


function chart011(data, extra_parameters) {
// function related to bubble chart attendance (punchin)
    // console.log('Data from backend',data)

    weeknames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

    if (extra_parameters['flag']['punch_in_not_zero']){
         var color_range = ['#f2fafe', '#0d47a1']
    }
    else{
        var color_range = ['#fafafa', '#fafafa']
    }

    var max = data[data.length-1][1]['v']
    // console.log('max',max)
    var ticks = []
    ticks[0] = 0
    for (var i=1,j=1;i<=max;i++,j+=23){
        ticks [i] = data[j][1];
    }
    var weekdays = []
    var range = []
    // console.log('ticks',ticks)
    for (var i=1;i<data.length;i++){
        var temp = new Date(data[i][2])
        var x = new Date(data[i][2]+"Z")
        data[i][2] = [x.getHours(),x.getMinutes(),x.getSeconds()]
        range[i] = (x.getHours()< 10?'0'+x.getHours().toString():x.getHours().toString()).toString()+":00"+" - "+(x.getHours()< 10?'0'+x.getHours().toString():x.getHours().toString()).toString()+":59"
        weekdays[i] = temp.getDate().toString()+" "+weeknames[temp.getDay()].toString()
    }
    // console.log(x)

    var options_area = {
        height: 400,
        fontSize: 12,
        colors: ['#01579b'],
        colorAxis : {minValue: 0,  colors: color_range},
        chartArea: {
            left: '8%',
            width: '90%',
            height: 300
        },
        sizeAxis:{maxSize:5,minSize:5},//sets bubble size
        vAxis: {
            title: 'Time 24 Hours Format',
            titleTextStyle: {
                fontSize: 13,
                italic: false
            },
            gridlines:{
                color: '#fff',
            },
           
          viewWindowMode : 'explicit',
           viewWindow: {
            min: [00, 00, 00] - [02,00,00],
            max: [23, 59, 59] + [02,00,00],
          },

        },
         hAxis: {
            title: 'Days',
            ticks : ticks,
            gridlines:{
                color: '#fff',
            },
            viewWindow : {
                max : max+1,
            },
        },
        bubble: {
          textStyle: {
            auraColor: 'none',
            color: '#fff',
            opacity : 1,
          },
          stroke: '#fff'
        },
        legend: 'none',
        tooltip: {
                trigger: 'none'
            },
    };

    var mouseX;
    var mouseY;
    $(document).mousemove(function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    // console.log(mouseX);
    // console.log(mouseY);
    
    function handler1(e) {
        // console.log(e)
        var x = mouseX -50;
        var y = mouseY - 250;
        var index = e.row + 1;
        
        if(data[index][3]!=0){
            $('#custom_tooltip').html('<div class="google-visualization-tooltip-item"><p class="font-medium-2">Day : ' + '<b>'+weekdays[index]+'</b></p>' + '<p class="font-medium-2">Time : ' + '<b>'+range[index]+'</b></p>' + '<p class="font-medium-2">Employees : ' + '<b>'+data[index][3]+'</b></p>' + '</div>').css({
            'top': y,
            'left': x
            }).fadeIn('fast');
        }
    }
    
    function handler2(e) {
        $('#custom_tooltip').fadeOut('fast');
    }

    $('#chart-area-1').removeClass('col-sm-4')
    var chart = new google.visualization.BubbleChart(document.getElementById('chart-area-1'));
    google.visualization.events.addListener(chart, 'onmouseover', handler1);
    google.visualization.events.addListener(chart, 'onmouseout', handler2);

    return [chart,options_area,data]
}

function chart012(data, extra_parameters) {
// function related to bubble chart attendance (punch out)
    
    if (extra_parameters['flag']['punch_out_not_zero']){
         var color_range = ['#e1f5fe', '#0d47a1']
    }
    else{
        var color_range = ['#fafafa', '#fafafa']
    }

    var max = data[data.length-1][1]
    var ticks = []
    ticks[0] = 0
    for (var i=1;i<=max;i++){
        ticks [i] = i
    }

    for (var i=1;i<data.length;i++){
        var x = new Date(data[i][2]+"Z")
        data[i][2] = [x.getHours(),x.getMinutes(),x.getSeconds()]
    }

    var options_area = {
        height: 400,
        fontSize: 12,
        colors: ['#01579b'],
        colorAxis : {minValue: 0,  colors: color_range},
        chartArea: {
            left: '8%',
            width: '90%',
            height: 300
        },
        sizeAxis:{maxSize:6,minSize:6},//sets bubble size
        vAxis: {
            title: 'Time 24 Hours Format',
            titleTextStyle: {
                fontSize: 13,
                italic: false
            },
            gridlines:{
                color: '#fff',
                // count: 24
            },
            viewWindow: {
            min: [1, 0, 0],
            // max: [00, 59, 59]
          }

        },
         hAxis: {
            title: 'Days',
            ticks: ticks,
            gridlines:{
                color: '#fff',
            },
        },
        bubble: {
          textStyle: {
            auraColor: 'none',
            color: '#fff',
            opacity : 1,
            // padding-left :  ,
          },
          stroke: '#fff'
        },
        legend: 'none'
        // legend: {
        //     position: 'top',
        //     alignment: 'center',
        //     textStyle: {
        //         fontSize: 12
        //     }
        // }
    };
    $('#chart-area-1').removeClass('col-sm-4')
    $('#chart-area-2').removeClass('col-sm-4')
    var chart = new google.visualization.BubbleChart(document.getElementById('chart-area-2'));

    return [chart,options_area,data]
}

function chart013(data, extra_parameters) {
    var result_list = []
    result_list[0] = chart011(data[0], extra_parameters);
    // result_list[1] = chart012(data[1], extra_parameters);

    return result_list;
    }




function chart014(obj, extra_parameters){
// function for candlestick attendance
    
    // console.log('data',obj)
    var max = 0
    if (obj[0][0] != '')
    {
        max = obj[obj.length-1][0]
        // console.log('max',max)
    }
    var title = "";
    if (max != 0)
    {
        title = "Days of the Month";
    }
    
    var result_data = []
    if (max!=0){

        for (var item in obj){
                obj[item][1] = new Date(obj[item][1])
                obj[item][2] = new Date(obj[item][2])
                obj[item][3] = new Date(obj[item][3])
                obj[item][4] = new Date(obj[item][4])
        }

        result_data[0] = [{ type: 'string'},{ type: 'timeofday'},{ type: 'timeofday'},{ type : 'timeofday'},{ type : 'timeofday'},{ type :'string', role :'tooltip', p :{ html :true} },{ type: 'timeofday'},{ type: 'timeofday'},{ type : 'timeofday'},{ type : 'timeofday'},{ type :'string', role :'tooltip', p :{ html :true} },{ type: 'timeofday'},{ type: 'timeofday'},{ type : 'timeofday'},{ type : 'timeofday'},{ type :'string', role :'tooltip', p :{ html :true} },{ type: 'timeofday'},{ type: 'timeofday'},{ type : 'timeofday'},{ type : 'timeofday'},{ type :'string', role :'tooltip', p :{ html :true} },{ type: 'timeofday'},{ type: 'timeofday'},{ type : 'timeofday'},{ type : 'timeofday'},{ type :'string', role :'tooltip', p :{ html :true} },{ type: 'timeofday'},{ type: 'timeofday'},{ type : 'timeofday'},{ type : 'timeofday'},{ type :'string', role :'tooltip', p :{ html :true} },{ type: 'timeofday'},{ type: 'timeofday'},{ type : 'timeofday'},{ type : 'timeofday'},{ type :'string', role :'tooltip', p :{ html :true} },{ type: 'timeofday'},{ type: 'timeofday'},{ type : 'timeofday'},{ type : 'timeofday'},{ type :'string', role :'tooltip', p :{ html :true} }]

        for (var item in obj){
            // console.log('item',item)
            if (extra_parameters['status'][item] == 'absent'){
                if (extra_parameters['in_out'][item] == 'in'){
                    result_data[parseInt(item) + 1] = [obj[item][0],[obj[item][1].getHours(),obj[item][1].getMinutes()],[obj[item][2].getHours(),obj[item][2].getMinutes()],[obj[item][3].getHours(),obj[item][3].getMinutes()],[obj[item][4].getHours(),obj[item][4].getMinutes()],"Punch-In : "+obj[item][1].toTimeString().substr(0,5)+" \n Punch-Out : "+obj[item][3].toTimeString().substr(0,5),0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,""]
                }
                else{
                    result_data[parseInt(item) + 1] = [obj[item][0],[obj[item][1].getHours(),obj[item][1].getMinutes()],[obj[item][2].getHours(),obj[item][2].getMinutes()],[obj[item][3].getHours(),obj[item][3].getMinutes()],[obj[item][4].getHours(),obj[item][4].getMinutes()],"Absent",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,""]
                }
            }
            else if (extra_parameters['status'][item] == 'leave'){
                result_data[parseInt(item) + 1] = [obj[item][0],0,0,0,0,"",[obj[item][1].getHours(),obj[item][1].getMinutes()],[obj[item][2].getHours(),obj[item][2].getMinutes()],[obj[item][3].getHours(),obj[item][3].getMinutes()],[obj[item][4].getHours(),obj[item][4].getMinutes()],"Leave",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,""]
            }
            else if (extra_parameters['status'][item] == 'weeklyoff'){
                result_data[parseInt(item) + 1] = [obj[item][0],0,0,0,0,"",0,0,0,0,"",[obj[item][1].getHours(),obj[item][1].getMinutes()],[obj[item][2].getHours(),obj[item][2].getMinutes()],[obj[item][3].getHours(),obj[item][3].getMinutes()],[obj[item][4].getHours(),obj[item][4].getMinutes()],"Weekly-Off",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,""]
            }
            else if (extra_parameters['status'][item] == 'holiday'){
                result_data[parseInt(item) + 1] = [obj[item][0],0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",[obj[item][1].getHours(),obj[item][1].getMinutes()],[obj[item][2].getHours(),obj[item][2].getMinutes()],[obj[item][3].getHours(),obj[item][3].getMinutes()],[obj[item][4].getHours(),obj[item][4].getMinutes()],"Holiday",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,""]
            }
            else if (extra_parameters['status'][item] == 'on-duty'){
                result_data[parseInt(item) + 1] = [obj[item][0],0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",[obj[item][1].getHours(),obj[item][1].getMinutes()],[obj[item][2].getHours(),obj[item][2].getMinutes()],[obj[item][3].getHours(),obj[item][3].getMinutes()],[obj[item][4].getHours(),obj[item][4].getMinutes()],"Outdoor-Duty",0,0,0,0,"",0,0,0,0,"",0,0,0,0,""]
            }
            else if (extra_parameters['status'][item] == 'wfh'){
                result_data[parseInt(item) + 1] = [obj[item][0],0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",[obj[item][1].getHours(),obj[item][1].getMinutes()],[obj[item][2].getHours(),obj[item][2].getMinutes()],[obj[item][3].getHours(),obj[item][3].getMinutes()],[obj[item][4].getHours(),obj[item][4].getMinutes()],"Work-From-Home",0,0,0,0,"",0,0,0,0,""]
            }
            else if (extra_parameters['status'][item] == 'half-day'){
                result_data[parseInt(item) + 1] = [obj[item][0],0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",[obj[item][1].getHours(),obj[item][1].getMinutes()],[obj[item][2].getHours(),obj[item][2].getMinutes()],[obj[item][3].getHours(),obj[item][3].getMinutes()],[obj[item][4].getHours(),obj[item][4].getMinutes()],"Punch-In : "+obj[item][1].toTimeString().substr(0,5)+" \n Punch-Out : "+obj[item][3].toTimeString().substr(0,5),0,0,0,0,""]
            }
            else{
                result_data[parseInt(item) + 1] = [obj[item][0],0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",0,0,0,0,"",[obj[item][1].getHours(),obj[item][1].getMinutes()],[obj[item][2].getHours(),obj[item][2].getMinutes()],[obj[item][3].getHours(),obj[item][3].getMinutes()],[obj[item][4].getHours(),obj[item][4].getMinutes()],"Punch-In : "+obj[item][1].toTimeString().substr(0,5)+" \n Punch-Out : "+obj[item][3].toTimeString().substr(0,5)]
            }
            
        }

    }
    else 
    {
        result_data = obj
    }

   
    // console.log('Modified',result_data)
    var options_area = {

        annotations: annotations_settings,
        chartArea: {
            // left: '5%',
            // right : '5%',
            width: '90%',
            // height: 250
        },
          height : 250,
          colors : ['#40C4FF'],
          // legend: 'none',
          bar: { groupWidth: '5%' }, // Remove space between bars.
          hAxis: {
                textStyle: {
                  fontSize : 12
                },
                title: title,
                viewWindow:{
                        max:max,
                        min:0
                      },
                // gridlines: {
                //     color: 'transparent',
                //     count: max,
                // },

                // ticks : incrementalTicks(max)
            },
            vAxis: {
                textStyle: {
                  fontSize : 12
                },
                title: "Time",
                baselineColor: '#cccccc',
                 // viewWindow:{
                 //        // max:max,
                 //        min: [new Date("2018-03-01T01:00:00Z").getHours(),new Date("2018-03-01T01:00:00Z").getMinutes()]
                 //      },
            },
          candlestick: {
            fallingColor: { strokeWidth: 4, fill: '#fff'}, // red
            risingColor: { strokeWidth: 4, fill:'#fff'}   // green
          },
          legend : 'none',
          series: {
            0: {color: '#F44336'},      //absent
            1: {color: '#f4ea76'},      //leave
            2: {color: '#d9dde2'},   //W/O
            3: {color: '#8ed1ef'},     //Holiday
            4: {color: '#98ca9a'},     //O/D
            5: {color: '#a4bb54'},     //WFH
            6: {color: '#bded16'},     //H/D
            7: {color: '#4caf50'},     //present
        },
          
        };

        var chart = new google.visualization.CandlestickChart(document.getElementById('chart-area'));
        
        return [chart,options_area,result_data]
      }





function chart015(data, extra_parameters){
// function for bubble chart expense
    // console.log('data',data)
    var temp = 0
    var max = 0

    // var title = ""
    // if (data[0][0] != "") {
    //     title = "Months"
    // }

    if (data.length == 13)
    {
        for (var i=1;i<=12;i++)
            {
                temp = data[i][2]
                if (temp > max){
                    max = temp
                }
            }
    }
    if (max == 0)
    {
        max = 1000
    }
    // console.log(max)
    var options_area = {
        annotations: annotations_settings,

          height : 400,
          hAxis: {
            title: "Months",
            ticks: [{v:1, f:"Jan"},{v:2, f:"Feb"},{v:3, f:"Mar"},{v:4, f:"Apr"},{v:5, f:"May"},{v:6, f:"Jun"},{v:7, f:"Jul"},{v:8, f:"Aug"},{v:9, f:"Sep"},{v:10, f:"Oct"},{v:11, f:"Nov"},{v:12, f:"Dec"}],
            gridlines: {
                count: 13
            },
            // viewWindowMode:'explicit',
            viewWindow: {
                max: 13,
                min:0,
            },
        },
        vAxis: {
            title: 'Total Amount',
            // viewWindowMode:'explicit',
            viewWindow: {
                max: (3*max)/2,
                min:0,
            },
        },
          legend: 'none',
          tooltip: {
                trigger: 'none'
            },
          }

         var mouseX;
        var mouseY;
        $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });
        
        function handler1(e) {
            var x = mouseX -50;
            var y = mouseY - 310;
            var index = e.row + 1;
            // console.log(index)
            // console.log('Data',data)
            $('#custom_tooltip').html('<div class="google-visualization-tooltip-item"><p class="font-medium-2">Month : ' + '<b>'+months[data[index][1]-1]+'</b></p>' + '<p class="font-medium-2">Total Expense :' + '<b>'+data[index][2]+'</b></p>' + '</div>').css({
                'top': y,
                'left': x
            }).fadeIn('fast');
        }
        
        function handler2(e) {
            $('#custom_tooltip').fadeOut('fast');
        }

        var chart = new google.visualization.BubbleChart(document.getElementById('chart-area'));
        google.visualization.events.addListener(chart, 'onmouseover', handler1);
        google.visualization.events.addListener(chart, 'onmouseout', handler2);
        
        return [chart,options_area]
      }


function chart016(data, extra_parameters){
// bar chart for leaves
    
    var leave_colors = []
    var title = ""
    if (data[0][0] != "")
    {
        title = 'Month';
        for (items in data[0]){
            if (data[0][items] in extra_parameters['colors']){
                leave_colors.push(extra_parameters['colors'][data[0][items]])
            }
        }
    }
    var options_area = {
        height: 400,
        annotations: annotations_settings,
        colors: leave_colors,
        hAxis: {title: title,  titleTextStyle: {color: '#333'}},
        vAxis: {title: 'Number of Days', titleTextStyle: {color: '#333'}},
        legend: legend_option,
        bar: { groupWidth: '35%' },
        isStacked: true,
        focusTarget: 'category',
        seriesType: "bars",
        chartArea: {
            left: '10%',
        }
        // series: {3: {type: 'line',color: colors_list[colors_list.length-1], visibleInLegend: false }}//this is for the trend line
    };
    
    // options_area.theme = 'material';

    var chart = new google.visualization.ComboChart(document.getElementById('chart-area'));
    
    return [chart,options_area]

}


function chart017(data ,extra_parameters){
// yearly calender chart for leave

    
        // console.log('#####################',data)
       var options_area = {
         
         height: 350,
         colorAxis: {colors: colors_list},
         calendar: { cellSize: 20 },
         // tooltip: {isHtml: true},
         library:{legend: {position: 'none'}},
       };

       var chart = new google.visualization.Calendar(document.getElementById('chart-area'));
       return [chart,options_area]

}


function chart018(data, extra_parameters) {
// Used for Area Chart leave
    
    var leave_colors = []
    var title = ""
    if (data[0][0] != "")
    {
        title = 'Month';
        for (items in data[0]){
            if (data[0][items] in extra_parameters['colors']){
                leave_colors.push(extra_parameters['colors'][data[0][items]])
            }
        }
    }
    
    
    var options_area = {       
        height: 400,
        annotations: annotations_settings,
          hAxis: {title: title,  titleTextStyle: {color: '#333'}},
          vAxis: {title: 'Number of Days',minValue: 0},
          legend: legend_option,
          colors: leave_colors,
          focusTarget: 'category',
          isStacked: true,
          chartArea: {
            left: '10%',
        }
    };
    

    var chart = new google.visualization.AreaChart(document.getElementById('chart-area'));
    
    return [chart,options_area]

}


function chart019(data, extra_parameters) {
// Used for calendar chrt leave
//used for team dashboard

    
    
     var options_area = {
         legend: 'none',
         title: '',
         height: 200,
         colorAxis: {colors: ['#90caf9','#0d47a1']},
         calendar: { cellSize: 17 },
         chartArea: {
                 width: '90%',
                 height: '95%',
                 top:'0%',
              },
       };

       var chart = new google.visualization.Calendar(document.getElementById('leave-calendar-chart'));

       google.visualization.events.addListener(chart, 'ready', function () {
        $($('#leave-calendar-chart text')[0]).text('');
        $($('#leave-calendar-chart text')[1]).text('');
        $($('#leave-calendar-chart text')[2]).text('');
        /*$('#chart-area path')[0].setAttribute("d",'');*/
        /*$('#chart-area path')[1].setAttribute("d",'');*/
        $('#leave-calendar-chart path')[1].setAttribute("fill",'#fff');
        $('#leave-calendar-chart path')[1].setAttribute("stroke",'#fff');
        $('#leave-calendar-chart path')[2].setAttribute("stroke",'#fff');
         $('#leave-calendar-chart path')[2].setAttribute("fill",'#fff');
       /* $('#chart-area path')[2].setAttribute("d","#fff");*/
        // console.log($('#leave-calendar-chart path')[2])
        
      });
       return [chart,options_area]

}

function chart020(leave_obj = {},extra_parameters) {
// function for pie chart leave
    // console.log('extra_parameters',extra_parameters)
    length_div = Object.keys(leave_obj).length
    // console.log('length_div',length_div)

    var node_obj = document.getElementById('chart-area')
    while (node_obj.hasChildNodes())
    { 
        node_obj.removeChild(node_obj.lastChild);
    }

    var chart = []
    var option = []
    for (i=0;i<length_div;i++)
    {
        var container = document.getElementById('chart-area').appendChild(document.createElement('div'));
        container.setAttribute('class',"col-md-4");
        var container_id = 'container-div'+i
        container.setAttribute('id', container_id);
        chart[i] = new google.visualization.PieChart(container);

        if (leave_obj[i][0][0] == '')
        {   //no data being paased

            var options_area = {
              // title: title[0]+" Summary",
              pieHole: 0.9,
              height: 160,
              chartArea: {
                 backgroundColor : {stroke : 'blue'},
                 width: '90%',
                 height: '85%',
              },
              slices: {
                0: { color: 'orange' },
                1: { color: '#8cc73b' },
              },
              legend : 'none',
            };
        }
        else{

            var title = extra_parameters['title'][i]
            var options_area = {
              title: title,
              titleTextStyle: {
                // color: 
                // fontName: <string>, // i.e. 'Times New Roman'
                fontSize: 11, // 12, 18 whatever you want (don't specify px)
                bold: false,    // true or false
                // italic: <boolean>   // true of false
            },
              selectionMode : "multiple",
              tooltip : {
                trigger : 'hover',
                isHtml: true,
                textStyle: { 
                    fontSize: 12 ,
                },
              },
              pieHole: 0.9,
              height: 160,
              chartArea: {
                 backgroundColor : {stroke : 'blue',},                 
                 width: '90%',
                 // height: '85%',

              },
              slices: {
                0: { color: 'orange' },
                1: { color: '#8cc73b' },
              },
              legend : 'none',
              // titleTextStyle : {
              //     color: 'black', 
              //     //fontName: 'Arial', 
              //     fontSize: 14,
              // },
            };
            
            
        }
        option[i] = options_area;

        //TEXT TO BE SHOWN ONLY IN CASE OF LEAVE REPORT
    }
    
    // for (var item in chart) {
    //     console.log(chart[item]);
    //     google.visualization.events.addListener(chart[item], 'ready', function(e) { 
    //     chart[item].setSelection([{row:0},{row:1}]);
    //     console.log(chart[item])
    //     });
    // }
    
    return [chart,option]
}


function chart021(data, extra_parameters) {
// Used for Pie Chart helpdesk
    

    
    
    var options_area = {
          // title: 'My Attendance Log',
          // used in helpdesk dashboard
          pieHole: 0.9,
          height: 200,

          chartArea: {
             backgroundColor : {stroke : 'blue'},

          },
          slices: {
            0: { color: '#FF5252' },
            1: { color: '#37BC9B' },
          },
          legend : {position : 'labeled'},
        };
    

    var chart = new google.visualization.PieChart(document.getElementById('chart-area'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null}]);
            }
    });
    return [chart,options_area]

}


function chart022(data, extra_parameters) {
// Used for Bar Chart helpdesk
//used for team dashboard
    
    // console.log(data);
    
    var title = ""
    var ticks = []
    var total = []
    var max = 0
    if (data[0][0] != "") {
        title = "Month"
        for (var i=1;i<data.length;i++){
            var total_value = 0
            for (var j=1;j<data[i].length;j++){
                total_value += data[i][j]
            }
            total[i-1] = total_value
            if (max<total_value){
                max = total_value
            }
        }

        ticks =  calcIntTicks(max)
    }
    
    
    var options_area = {  
        annotations: annotations_settings,     
        height: 250,
        colors: many_color_list,
        hAxis: {title: title,  titleTextStyle: {color: '#333'}},
        vAxis: {
            title: 'Number of Tickets', 
            titleTextStyle: {color: '#333'},
            ticks : ticks
        },
        legend: legend_option,
        bar: { groupWidth: '35%' },
        focusTarget: 'category',
        isStacked: true,
        seriesType: "bars",
        chartArea: {
            left: '10%',
            top:'5%',
        }
        // series: {3: {type: 'line',color: colors_list[colors_list.length-1], visibleInLegend: false }}//this is for the trend line
    };
    

    var chart = new google.visualization.ComboChart(document.getElementById('helpdesk-ticket-distribution'));
    
    return [chart,options_area]

}


// function chart023(data, extra_parameters) {
// // Used for pie Chart Organisation for  edu
    
//     var title = ""
//     var ticks = []
//     var max = 0
//     if (data[0][0] != "") {
//         title = "Qualification"
//         max = data.length-1
//         ticks = calcIntTicks(max)
//     }
    
    
//     var options_area = {  
//         annotations: annotations_settings,     
//         height: 400,
//         colors: colors_list,
//         hAxis: {
//             title: title,  titleTextStyle: {color: '#333'},
//         },
//         vAxis: {
//             title: 'No. of Employees', 
//             titleTextStyle: {color: '#333'},
//             // viewWindowMode:'explicit',
//             // viewWindow : {
//             //     min : 0,
//             //     max : max*5,
//             // },
//             ticks : ticks,
//         },
//         legend: legend_option,
//         bar: { groupWidth: '35%' },
//         seriesType: "bars",
//         chartArea: {
//             left: '10%',
//         },
//         legend: { position: "none" },
//         // series: {3: {type: 'line',color: colors_list[colors_list.length-1], visibleInLegend: false }}//this is for the trend line
//     };
    

//     var chart = new google.visualization.ComboChart(document.getElementById('chart-area'));
    
//     return [chart,options_area]

// }


function chart023(data, extra_parameters) {
// Used for pie Chart Organisation for  edu
    
    var title = ""
    var ticks = []
    var max = 0
    if (data[0][0] != "") {
        title = "Qualification"
        max = data.length-1
        ticks = calcIntTicks(max)
    }
    
    // console.log('max',max)

     var options_area = {
          // title: 'My Attendance Log',
          pieHole: 0.9,
          height: 400,
          chartArea: {
             backgroundColor : {stroke : 'blue'},

          },
          colors: many_color_list,
          legend : {position : 'labeled'},
        };
    

    var chart = new google.visualization.PieChart(document.getElementById('chart-area'));
    
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
            var selection_list = []
            for (var i=0;i<max;i++){
                selection_list[i] = {row:i,column:null}
            }
            chart.setSelection(selection_list)
            }
    });

    return [chart,options_area]

}



function chart024(data, extra_parameters) {
// Used for pie Chart Organisation experience
    
    var title = ""
    var ticks = []
    var max = 0
    if (data[0][0] != "") {
        if(extra_parameters['company']){
            title = "Experience in "+extra_parameters['company']
        }
        else{
                title = "Experience"
            }
        max = to_find_max(data,1)
        ticks = calcIntTicks(max)
    }
    
    
    var options_area = {
          // title: 'My Attendance Log',
          pieHole: 0.9,
          height: 400,
          chartArea: {
             backgroundColor : {stroke : 'blue'},

          },
          colors: many_color_list,
          legend : {position : 'labeled'},
        };
    

    var chart = new google.visualization.PieChart(document.getElementById('chart-area'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null},{row:2,column:null},{row:3,column:null},{row:4,column:null},{row:5,column:null}]);
            }
    });

    return [chart,options_area]

}


function chart025(data, extra_parameters) {
// Used for Pie Chart Organisation for M/F
    

    
    
    var options_area = {
          // title: 'My Attendance Log',
          pieHole: 0.9,
          height: 400,
          chartArea: {
             backgroundColor : {stroke : 'blue'},
          },
          slices: {
            0: { color: colors_list[0] },
            1: { color: colors_list[1] },
            2: { color: colors_list[2] }
          },
          legend : {position : 'labeled'},
        };
    

    var chart = new google.visualization.PieChart(document.getElementById('chart-area'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null},{row:2,column:null}]);
            }
    });
    return [chart,options_area]

}


function chart026(data = {},extra_parameters) {
// function for pie chart leave
    // console.log('extra_parameters',extra_parameters)
    length_div = Object.keys(data).length
    // console.log('length_div',length_div)

    var node_obj = document.getElementById('chart-area')
    while (node_obj.hasChildNodes())
    { 
        node_obj.removeChild(node_obj.lastChild);
    }

    var chart = []
    var option = []
    for (i=0;i<length_div;i++)
    {   
        var ticks = []
        if (data[i][0][0] != ''){
            var max  =  to_find_max(data[i],1)
            // console.log('MAX',max);
            ticks = calcIntTicks(max)
            // console.log('TICKS',ticks)
        }

        var container = document.getElementById('chart-area').appendChild(document.createElement('div'));
        container.setAttribute('class',"col-md-3");
        chart[i] = new google.visualization.BarChart(container);
        if (data[i][0][0] == '')
        {   //no data being paased

           var options_area = {       
              annotations: annotations_settings,
              height: 400,
              colors: [many_color_list[i%8]],
              legend: { position: "none" },
              chartArea: {width: '70%'},
              hAxis: {
                // title: data[i][0][1],
                // min : 0,
                gridlines: {
                      count: 4
                  },
                  viewWindowMode:'explicit',
                  viewWindow: {
                      // max:100,
                      min:0,
                  },
                  ticks : ticks,
              },
              vAxis: {
               
              },
              bar: { groupWidth: '35%' },
          };
        }
        else if(i%3 == 0){

            // var title = extra_parameters['title'][i]
            
            var options_area = {       
              annotations: annotations_settings,
              height: 400,
              colors: [many_color_list[i%8]],
              legend: { position: "none" },
              chartArea: {width: '70%'},
              hAxis: {
                title: data[i][0][1],
                // min : 0,
                gridlines: {
                      count: 4
                  },
                  viewWindowMode:'explicit',
                  viewWindow: {
                      // max:100,
                      min:0,
                  },
                  ticks : ticks,
              },
              vAxis: {
               
              },
              bar: { groupWidth: '35%' },
          };

        }
        else{

            // var title = extra_parameters['title'][i]
            
            var options_area = {       
              annotations: annotations_settings,
              height: 400,
              colors: [many_color_list[i%8]],
              legend: { position: "none" },
              chartArea: {width: '70%'},
              hAxis: {
                title: data[i][0][1],
                // min : 0,
                gridlines: {
                      count: 4
                  },
                  viewWindowMode:'explicit',
                  viewWindow: {
                      // max:100,
                      min:0,
                  },
                  ticks : ticks,
              },
              vAxis: {
               textPosition: 'none',
              },
              bar: { groupWidth: '35%' },
          };

        }
        option[i] = options_area;
        // chart[i].setSelection([{row:0,column:null},{row:1,column:null}]);
        // console.log('########',chart[i])
         
        // chart[i].setSelection([{row:0,column:null},]);
       
    }
    
    return [chart,option]
}



function chart027(data, extra_parameters) {
// Used for Pie Chart Team Attendance request
    

    
    
    var options_area = {  
        pieHole: 0.9,
        height:130,
        width:250,
        chartArea: {
         backgroundColor : {stroke : 'blue'},
         height : '90%',
         width : '90%',

        },
        colors : ['#FF9900','#4caf50','#F44336',],
        legend : {position : 'labeled'},
        };
       

    var chart = new google.visualization.PieChart(document.getElementById('donut-chart'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null},{row:2,column:null}]);
            }
    });

    
    return [chart,options_area]

}


function chart028(data, extra_parameters) {
// Used for Pie Chart team leave request
    

    
    
    var options_area = {  
        pieHole: 0.9,
        height:130,
        width:250,
        chartArea: {
         backgroundColor : {stroke : 'blue'},
         height : '90%',
         width : '90%',
        },
        colors : ['#FF9900','#4caf50','#F44336',],
        legend : {position : 'labeled'},
        };
       

    var chart = new google.visualization.PieChart(document.getElementById('leave-request'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null},{row:2,column:null}]);
            }
    });

    
    return [chart,options_area]

}

function chart029(data, extra_parameters) {
// Used for Pie Chart team expense request
    

    
    
    var options_area = {  
        pieHole: 0.9,
       height:130,
        width:250,
        chartArea: {
         backgroundColor : {stroke : 'blue'},
         height : '90%',
         width : '90%',
        },
        colors : colors_list,
        // colors : ['#FF9900','#4caf50','#F44336',],
        legend : {position : 'labeled'},
        };
       

    var chart = new google.visualization.PieChart(document.getElementById('expense-request'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null},{row:2,column:null}]);
            }
    });

    
    return [chart,options_area]

}


function chart030(data, extra_parameters) {
// Used for Pie Chart team expense request
    

    
    
    var options_area = {  
        pieHole: 0.9,
       height:130,
        width:250,
        chartArea: {
         backgroundColor : {stroke : 'blue'},
         height : '90%',
         width : '90%',
        },
        colors : colors_list,
        // colors : ['#FF9900','#4caf50','#F44336',],
        legend : {position : 'labeled'},
        };
       

    var chart = new google.visualization.PieChart(document.getElementById('helpdesk-request'));
    google.visualization.events.addListener(chart, 'ready', function(e) {
        if (data[0][0] != ''){
                chart.setSelection([{row:0,column:null},{row:1,column:null}]);
            }
    });

    
    return [chart,options_area]

}






function calcIntTicks(max) {
    // console.log('max',max)
   var min =  0;
   var max = Math.ceil(max);
   var vals = [];
   var interval = Math.ceil((Math.ceil(max/50))*5);
   if (interval == 0){
        interval = 5
   }
   // console.log('interval',interval)
   for (var cur = min; cur <= max; cur += interval) {
       vals.push(cur);
   }
   // console.log('vals.length',vals.length)
   if (vals.length == 1){
        // console.log('INSIDE',max)
        if ((max == 1) || ( max == 0)){
            vals.push(1)
        }
        else
        {
            for (var i=1;i<=max;i++){
                vals.push(i)
            }
        }
   }
   // console.log('vals',vals)
   return vals;
}

function to_find_max(data,index){
    var max = 0
    var temp = 0
    for (var item in data){
        temp = data[item][index]
        if (max<temp){
            max = temp
        }
    }
    return max
}

function incrementalTicks(max) {
    var result = []
    for (var i =0;i<=max;i++){
        result[i] = i
    }
    return result
}


function secondsToTime(seconds)
{
    var days     = Math.floor(seconds / (24*60*60));
      seconds -= days    * (24*60*60);
  var hours    = Math.floor(seconds / (60*60));
      seconds -= hours   * (60*60);
  var minutes  = Math.floor(seconds / (60));
      seconds -= minutes * (60);
  // return ((0<days)?(days+" day, "):"")+hours+"h, "+minutes+"m and "+seconds+"s";

    var obj = hours+":"+minutes

    return obj;
}

