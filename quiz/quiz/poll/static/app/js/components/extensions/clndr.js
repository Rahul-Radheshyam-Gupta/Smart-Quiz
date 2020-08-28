/*=========================================================================================
    File Name: clndr.js
    Description: clndr
    --------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


$(document).ready(function(){

	var currentMonth = moment().format('YYYY-MM');
	var nextMonth    = moment().add('month', 1).format('YYYY-MM');

	var events = [{
		date: currentMonth + '-' + '10',
		title: 'Persian Kitten Auction',
		location: 'Center for Beautiful Cats'
	}, {
		date: currentMonth + '-' + '19',
		title: 'Cat Frisbee',
		location: 'Jefferson Park'
	}, {
		date: currentMonth + '-' + '23',
		title: 'Kitten Demonstration',
		location: 'Center for Beautiful Cats'
	}, {
		date: nextMonth + '-' + '07',
		title: 'Small Cat Photo Session',
		location: 'Center for Cat Photography'
	}];


	/****************************************
    *				Multiday				*
    ****************************************/
    var multidayArray = [
        {
            title: 'Multi Day Event 1',
            startDate: moment().format('YYYY-MM-') + '12',
            endDate: moment().format('YYYY-MM-') + '17',
        }, {
            title: 'Multi Day Event 2',
            startDate: moment().format('YYYY-MM-') + '24',
            endDate: moment().format('YYYY-MM-') + '27',
        }
    ];

	$('#clndr-multiday1').clndr({
		template: $('#clndr-template').html(),
		events: multidayArray,
        multiDayEvents: {
            endDate: 'endDate',
            startDate: 'startDate'
        },
	});
});
