var dynamic_search_dropdown_fn = function (dropdown_id, value, extra_param_kwargs={},add_all_employees=0,multiple=false) {
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

                params.page = params.page || 1;
                if (add_all_employees ==1){
                   new_option = {id:'-1',first_name:'All',last_name:'Employees'}
                   data.results.push(new_option)
                }

                return {
                    
                    results: data.results,
                    pagination: {
                        more: (params.page * 30) < data.count
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
        //multiple:multiple
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

    else if (value === 'ou') {
        if (obj.ou_value === undefined ) {
            return 'Loading...'
        } else {
            return obj.ou_value 
        }
    }
    else if (value === 'expense-category' || value === 'helpdesk-category') {
        if (obj.category === undefined ) {
            return 'Loading...'
        } else {
             console.log(obj)
            return obj.category 
        }
    }
    else if (value === 'asset-name') {
        if (obj.name === undefined ) {
            return 'Loading...'
        } else {
             console.log(obj)
            return obj.name 
        }
    }
    else if (value === 'adl-category') {
        if (obj.description === undefined ) {
            return 'Loading...'
        } else {
             console.log(obj)
            return obj.description 
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
            if (obj.ou_value === undefined) {
                return 'Loading...'
            }
            else {
                console.log(obj,"HERE")
                return obj.ou_value
            }
        }
        else if (value === 'expense-category' || value === 'helpdesk-category') {
            if (obj.category === undefined) {
                return 'Loading...'
            }
            else {
                console.log(obj)
                return obj.category
            }
        }
        else if (value === 'asset-name') {
            if (obj.name === undefined ) {
                return 'Loading...'
            } else {
                 console.log(obj)
                return obj.name 
            }
        }
        else if (value === 'adl-category') {
        if (obj.description === undefined ) {
            return 'Loading...'
        } else {
             console.log(obj)
            return obj.description 
        }
    }
    }

}



// dynamic_search_dropdown_fn('table-employee-filter', 'employee');
// dynamic_search_dropdown_fn('table-location-filter', 'ou');

// $("#table-employee-filter").trigger("select2:select")

// dynamic_search_dropdown_fn('/api/core/users-list-ajax/', 'id_family_user', 'user');

// dynamic_search_dropdown_fn('/api/content/topics-list-ajax/', 'content_meta_topic', 'topic');