	$('#half_day_time').datetimepicker({
		format: 'HH:mm'
	});

     $('#hours_for_fullday').datetimepicker({
		format: 'HH:mm'
	});



	$('#start-time').datetimepicker({
		format: 'LT'
	});

		$('#end-time').datetimepicker({
		format: 'LT'
	});

		$('#hours_overtime').datetimepicker({
		format: 'HH:mm'
	});	

		$('#working_hours').datetimepicker({
		format: 'HH:mm'
	});	

			$('#start_time').datetimepicker({
		format: 'LT'
	});
			$('#end_time').datetimepicker({
		format: 'LT'
	});

				$('#pre_shift_time').datetimepicker({
		format: 'HH:mm'
	});
				$('#post_shift_time').datetimepicker({
		format: 'HH:mm'
	});

		$('#breakduration').datetimepicker({
		format: 'HH:mm'
	});
			



    jQuery(".auto-sort-switched-off").each(function(){
		$this = jQuery(this);
    if($this.attr('data-reorder')){
        console.log("here")
    	$this.on('select2:select', function(e){

        var elm = e.params.data.element;
        $elm = jQuery(elm);
        $t = jQuery(this);
        $t.append($elm);
        $t.trigger('change.select2');
      });
    }

		$this.select2();
	});


function ampmFilter(date){
  if (date){

    var hours =  parseInt(date.slice(0,2));

    var minutes =  date.slice(3,5);
   
    var hh = hours
    var m = minutes
    var dd = "AM";
    var h = hh;
    if (h >= 12) {
      h = hh - 12;
      dd = "PM";
    }
    if (h == 0) {
      h = 12;
    }
    

     /*if you want 2 digit hours:*/
    h = h<10?"0"+h:h; 

    
    var replacement = h + ":" + m;
    /* if you want to add seconds
    replacement += ":"+s;  */
    replacement += " " + dd;

    return replacement


  }
  else
    return null;

}




function get_date(dt){
	if (dt){
		var locale = "en-us"
		
		var x= new Date(dt);
		month = x.toLocaleString(locale, { month: "short" });
		var newDate= x.getDate() + " "+ month+ " "+ x.getFullYear()+" ";
		console.log(newDate);
		return newDate
		

	}
	else{
		return null
	}
}


function getYear(yearId){
var e = new Date();
for( y =2000;y <= e.getFullYear() + 1 ; y++) {
        var optn = document.createElement("OPTION");
        optn.text = y;
        optn.value = y;
        
        // if year is 2015 selected
        if (y == e.getFullYear()) {
            optn.selected = true;
        }
        
        document.getElementById(yearId).options.add(optn);
}
}

function getMonth(monthId){

var d = new Date();
var monthArray = new Array();
monthArray[0] = "January";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
for(m = 0; m <= 11; m++) {
    var optn = document.createElement("OPTION");
    optn.text = monthArray[m];
    // server side month start from one
    optn.value = (m+1);
 
    // if june selected
    if ( d.getMonth() == m) {
        optn.selected = true;
    }
 
    document.getElementById(monthId).options.add(optn);
}
}



$('.admincount').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});




$('.custom-toastr').each(function(){
    console.log("inside custom toastr")
    console.log($(this))
   $(this)[0].toastr.options = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-bottom-full-width",
            "onclick": null,
            "showDuration": "1000",
            "hideDuration": "0",
            "timeOut": "0",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
})





function formatAMPM(date) {
  if (date){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;}
  else{
    return null
  }
}




//Disable Future Dates
  // With Select
$('.pickadate-dd-disable-future-dt').pickadate({
  selectMonths: true,
  selectYears: true,
  format: 'dd mmm yyyy ',
  min: false,  
  max: true,
  selectYears: 100

});


$('.pickadate-disable-future-dt-format').pickadate({
 
  format: 'dd mmm yyyy ',
  min: false,  
  max: true,
formatSubmit: 'mm/dd/yyyy',
hiddenPrefix: 'prefix__',
hiddenSuffix: '__suffix'

});


function rowMatchHeight(e){
    $('.row.match-height').each(function() {
        $(this).find('.card').not('.card .card').matchHeight(); // Not .card .card prevents collapsible cards from taking height
    });
   
}

function perfectScroll(e){
    //  Notifications & messages scrollable
    if($('.scrollable-container').length > 0){
        $('.scrollable-container').perfectScrollbar({
            theme:"dark"
        });
    }
}


function getPayrollYear(yearId){
var e = new Date();
for( y =e.getFullYear();y >= 2016 ; y--) {
        var optn = document.createElement("OPTION");
        optn.text = y;
        optn.value = y;
        
        // if year is 2015 selected
        if (y == e.getFullYear()) {
            optn.selected = true;
        }
        
        document.getElementById(yearId).options.add(optn);
}
}

function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}

function  dateformatjs(input_date) {
    var dates= new Date(input_date);
       var locale = "en-us"
       var month = moment(dates).format("MMM")
       var newDate= dates.getDate() + " "+ month+ " "+ dates.getFullYear()+" ";
       return newDate


}
function  dayformatjs(input_date) {
    var dates= new Date(input_date);
       var locale = "en-us"
       var day=moment(dates).format("dddd")

       return day


}


function  date_day_formatjs(input_date) {
    if(input_date){
        var d = input_date.split(' ')[0]
        var dates= new Date(d);
       var locale = "en-us"
       var month = moment(dates).format("MMM")
       var day=moment(dates).format("ddd")
       var newDate= day+", "+dates.getDate() + " "+ month+ " "+ dates.getFullYear()+" ";
       return newDate
    }




}


function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}

function capitalize(s){
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

$('#start-timesheet').datetimepicker({
   format: 'LT'
});
$('#end-timesheet').datetimepicker({
    format: 'LT'
});
