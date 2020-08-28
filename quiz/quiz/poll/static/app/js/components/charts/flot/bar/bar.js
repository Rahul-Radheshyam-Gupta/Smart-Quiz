/*=========================================================================================
    File Name: bar.js
    Description: Flot bar chart
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Bar chart
// ------------------------------
$(window).on("load", function(){

    var data = [["Business Expense", 2], ["Air Travel Expense", 8], ["Train Travel Expense", 4], ["Bus/Taxi Travel Expense", 6], ["Train Travel Expense", 3], ["Accommodation Expense", 5], ["Food Expense", 7], ["Other Expense", 1]];

    $.plot("#bar-chart", [ data ], {
        series: {
            bars: {
                show: true,
                barWidth: 0.6,
                align: "center",
                lineWidth: 0,
                fill: true,
                fillColor: { colors: [ { opacity: 0.2 }, { opacity: 0.8 } ] }
            }
        },
        xaxis: {
            mode: "categories",
            tickLength: 0
        },
        yaxis: {
            tickSize: 4
        },
        grid: {
            borderWidth: 1,
            borderColor: "transparent",
            color: '#999',
            minBorderMargin: 20,
            labelMargin: 10,
            margin: {
                top: 8,
                bottom: 20,
                left: 20
            },
        },
        colors: ['#00bfc7']
    });

});
