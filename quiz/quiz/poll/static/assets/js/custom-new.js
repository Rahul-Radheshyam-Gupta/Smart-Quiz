var dynamic_search_dropdown_fn = function (dropdown_id, value, extra_param_kwargs={},add_all_employees=0,add_all_ou=1) {
    console.log(extra_param_kwargs)
    $("#" + dropdown_id).select2({
        ajax: {
            url: 'core/masterlist/',
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    q: params.term, // search term
                    page: params.page,
                    extra_param_kwargs: extra_param_kwargs,
                    for_dropdown:value,
                    master:true

                };
            },
            processResults: function (data, params) {
                var new_option;
                params.page = params.page || 1;
                if (add_all_employees ===1){
                   new_option = {id:'-1',first_name:'All',last_name:'Employees'}
                   data.results.push(new_option)
                }
                if (value === 'ou' && add_all_ou){
                   new_option = {id:'-1',ou_value:'OU',ou_name_value_master:{ou_name:'All'}}
                   data.results.push(new_option)
                }
                if (extra_param_kwargs['team']){
                    if (extra_param_kwargs['remove_all_team_member']){
                        data.results
                    }
                    else{
                        new_option = {id:'-1',first_name:'All',last_name:'Team Members'}
                        data.results.push(new_option)
                    }

                }
                return {
                    
                    results: data.results,
                    pagination: {
                        more: (params.page * 20) < data.count
                    }
                };
            },
            cache: true


        },
        // initSelection: function (element, callback) {
        //     $.ajax("core/masterlist/", {
        //         dataType: "json",
        //         data: function (params) {
        //         return {
        //             q: params.term, // search term
        //             page: params.page,
        //             extra_param_id: $('#' + extra_param_id).val(),
        //             for_dropdown:value,
        //             master:true

        //         }
        //     }
        //     }).done(function(data) {
        //         console.log(data)
        //         callback([data.results]);
        //     });
        // },
        escapeMarkup: function (markup) {
            return markup;
        }, // let our custom formatter work
        //minimumInputLength: 1,
        templateResult: format,
        templateSelection: formatSelection,
    })
    function format(obj) {
    if (value === 'employee') {
        if (obj.first_name === undefined || obj.last_name === undefined) {
            return 'Loading...'
        }
        else{
        return obj.first_name + ' ' +  obj.last_name
        }

    }

    else if (value === 'topic') {
        if (obj.chapter === undefined || obj.topic_name === undefined) {
            return 'Loading...'
        } else {
            return obj.chapter + ' - ' + obj.topic_name
        }
    }
     else if (value === 'ou') {
        if (obj.ou_value === undefined ) {
            return 'Loading...'
        } else {
            try {
                return "[" + obj.ou_name_value_master.ou_name+ "] "+ obj.ou_value 
            }
            catch{
                //return 'Loading...'
            }
        }
    }
    else if (value === 'templates') {
        if (obj.name === undefined ) {
            return 'Loading...'
        } else {
            try {
                return obj.name
            }
            catch{
                //return 'Loading...'
            }
        }
    }
    else{

    }
    }
    function formatSelection(obj) {

        if (value === 'employee') {
            if (obj.first_name === undefined && obj.last_name === undefined) {
                return obj.text
            }
            else {
            return obj.first_name + ' ' +  obj.last_name
            }
        }
        else if (value === 'ou') {
            if (obj.ou_value === undefined ) {
                if(obj.text ){
                    return obj.text
                }
                return 'All OU...'
            }
            else {
              
                return "[" + obj.ou_name_value_master.ou_name+ "] "+ obj.ou_value 
            }
        }
        else if (value === 'templates') {
        if (obj.name === undefined ) {
             if(obj.text){
                    return obj.text
                }
            return 'Loading...'
        } else {
            try {
                return obj.name
            }
            catch{
                //return 'Loading...'
            }
        }
    }
    }

}



//dynamic_search_dropdown_fn('table-employee-filter', 'employee');

// dynamic_search_dropdown_fn('tab-ou-filter', 'ou',);

// $("#table-employee-filter").trigger("select2:select")

// dynamic_search_dropdown_fn('/api/core/users-list-ajax/', 'id_family_user', 'user');

// dynamic_search_dropdown_fn('/api/content/topics-list-ajax/', 'content_meta_topic', 'topic');





 // var table_ajax = $('#datatable-ajax').DataTable({
 // "processing": true,
 // "serverSide": true,
 // "stateSave": true,
 // "autoWidth": false,
 // "scrollX": true,
 // //"columnDefs":column_defs,

 // // dom: "<'row be-datatable-header'<'col-sm-6'l><'col-sm-6'f>>" +
 // // "<'row be-datatable-body'<'col-sm-12'tr>>" +
 // // "<'row be-datatable-footer'<'col-sm-5'i><'col-sm-7'p>>",
 // });

 // // table.search('').columns().search('').draw();



function getMonthName(month) {
var month_name_master = {'1':'Jan','2':'Feb','3':'Mar','4':'Apr','5':'May','6':'Jun','7':'Jul','8':'Aug','9':'Sep','10':'Oct','11':'Nov','12':'Dec'}
return month_name_master[month]

}