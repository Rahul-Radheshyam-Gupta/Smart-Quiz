/*=========================================================================================
    File Name: jsgrid.js
    Description: jsgrid Datatable.
    ----------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Theme
    Version: 1.0
    Author: GeeksLabs
    Author URL: http://www.themeforest.net/user/geekslabs
==========================================================================================*/

$(document).ready(function () {

    /****************************
     *      Basic Scenario       *
     ****************************/

    $("#basicScenario").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: db,
        fields: [{
                name: "Name",
                type: "text",
                width: 150
            },
            {
                name: "Type",
                type: "select",
                items: db.typeal,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Frequency",
                type: "select",
                items: db.frequency,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Value",
                type: "text",
                width: 150
            },
            {
                type: "control"
            }
        ]
    });

    $("#allowancesgd").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: db,
        fields: [{
                name: "Name",
                type: "text"
            },
            {
                name: "Type",
                type: "select",
                items: db.typeal,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Frequency",
                type: "select",
                items: db.frequency,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Value",
                type: "text"
            },
            {
                type: "control"
            }
        ]
    });

   $("#allowancesemp").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: false,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: empaldb,
        fields: [{
                name: "Empname",
                type: "text",
                title: "Employee Name"
            },
            {
                name: "Alname",
                type: "text",
                title: "Allowance Name"
            },
            {
                name: "Type",
                type: "select",
                items: empaldb.typeal,
                valueField: "Id",
                textField: "Name",
                title: "Allowance Type"
            },
            {
                name: "Frequency",
                type: "select",
                items: empaldb.frequency,
                valueField: "Id",
                textField: "Name"                
            },
            {
                name: "Value",
                type: "text",
                title: "Allowance Value"
            },
            {
                type: "control"
            }
        ]
    });

     $("#deductionemp").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: false,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: empdedb,
        fields: [{
                name: "Empname",
                type: "text",
                title: "Employee Name"
            },
            {
                name: "Dename",
                type: "text",
                title: "Deduction Name"
            },
            {
                name: "Type",
                type: "select",
                items: empaldb.typeal,
                valueField: "Id",
                textField: "Name",
                title: "Deduction Type"
            },
            {
                name: "Frequency",
                type: "select",
                items: empaldb.frequency,
                valueField: "Id",
                textField: "Name"                
            },
            {
                name: "Value",
                type: "text",
                title: "Deduction Value"
            },
            {
                type: "control"
            }
        ]
    });


    //Loan Assign Masters to Employee START
    $("#loanemp").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: false,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: loanempdb,
        fields: [{
                name: "Empname",
                type: "text",
                title: "Employee Name"
            },
            {
                name: "Loanname",
                type: "text",
                title: "Loan Name"
            },
            {
                name: "Loanamount",
                type: "text",
                title: "Loan Amount"
            },
            {
                name: "Sanctiondate",
                type: "text",
                title: "Sanction Date"
            },
            {
                name: "Roi",
                type: "text",
                title: "Rate of Interest"
            },
            {
                name: "Sroi",
                type: "text",
                title: "Statuatory ROI"
            },
            {
                type: "control"
            }
        ]
    });
  //Loan Assign Masters to Employee END

  
    //CTC Assign Masters to Employee START
    $("#ctcemp").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: false,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the CTC?",
        controller: ctcempdb,
        fields: [{
                name: "Empname",
                type: "text",
                title: "Employee Name"
            },
            {
                name: "Ctcname",
                type: "text",
                title: "Loan Name"
            },
            {
                name: "Ctcvalue",
                type: "text",
                title: "Loan Amount"
            },
            {
                type: "control"
            }
        ]
    });
  //CTC Assign Masters to Employee END



    $("#deductiongd").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: db,
        fields: [{
                name: "Name",
                type: "text"
            },
            {
                name: "Type",
                type: "select",
                items: db.typeal,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Frequency",
                type: "select",
                items: db.frequency,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Value",
                type: "text"
            },
            {
                type: "control"
            }
        ]
    });

//ctcdb

    $("#ctcgd").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: ctcdb,
        fields: [{
                name: "Name",
                type: "text",
                textField: "Name"
            },
            {
                name: "Value",
                type: "text",
                textField: "CTC Value"
            },
            {
                type: "control"
            }
        ]
    });


//ctcdb

    $("#loangd").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: loandb,
        fields: [{
                name: "Name",
                type: "text",
                textField: "Loan Name"
            },
            {
                name: "Value",
                type: "text",
                textField: "Loan Value"
            },
             {
                name: "Type",
                type: "select",
                items: loandb.emi,
                valueField: "Id", 
                  textField: "Name"              
            },
            {
                type: "control"
            }
        ]
    });


    /***********************************
     *      Data Service Scenario       *
     ***********************************/

    $("#serviceScenario").jsGrid({
        height: "auto",
        width: "100%",

        sorting: true,
        paging: false,
        autoload: true,

        controller: {
            loadData: function () {
                var d = $.Deferred();

                $.ajax({
                    url: "http://services.odata.org/V3/(S(3mnweai3qldmghnzfshavfok))/OData/OData.svc/Products",
                    dataType: "json"
                }).done(function (response) {
                    d.resolve(response.value);
                });

                return d.promise();
            }
        },

        fields: [{
                name: "Name",
                type: "text"
            },
            {
                name: "Description",
                type: "textarea",
                width: 150
            },
            {
                name: "Rating",
                type: "number",
                width: 50,
                align: "center",
                itemTemplate: function (value) {
                    return $("<div>").addClass("rating").append(Array(value + 1).join("&#9733;"));
                }
            },
            {
                name: "Price",
                type: "number",
                width: 50,
                itemTemplate: function (value) {
                    return value.toFixed(2) + "$";
                }
            }
        ]
    });

    /******************************
     *      Sorting Scenario       *
     ******************************/

    $("#sorting-table").jsGrid({
        height: "400px",
        width: "100%",

        autoload: true,
        selecting: false,

        controller: db,

        fields: [{
                name: "Name",
                type: "text",
                width: 150
            },
            {
                name: "Age",
                type: "number",
                width: 50
            },
            {
                name: "Address",
                type: "text",
                width: 200
            },
            {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Married",
                type: "checkbox",
                title: "Is Married"
            }
        ]
    });


    $("#sort").on('click', function () {
        var field = $("#sortingField").val();
        $("#sorting-table").jsGrid("sort", field);
    });

    /************************
     *      Validation       *
     ************************/

    $("#validation").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: db,
        fields: [{
                name: "Name",
                type: "text",
                width: 150,
                validate: "required"
            },
            {
                name: "Age",
                type: "number",
                width: 50,
                validate: {
                    validator: "range",
                    param: [18, 80]
                }
            },
            {
                name: "Address",
                type: "text",
                width: 200,
                validate: {
                    validator: "rangeLength",
                    param: [10, 250]
                }
            },
            {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name",
                validate: {
                    message: "Country should be specified",
                    validator: function (value) {
                        return value > 0;
                    }
                }
            },
            {
                name: "Married",
                type: "checkbox",
                title: "Is Married",
                sorting: false
            },
            {
                type: "control"
            }
        ]
    });


    /*****************************
     *      Loading by Page       *
     *****************************/

    $("#loading").jsGrid({
        width: "100%",

        autoload: true,
        paging: true,
        pageLoading: true,
        pageSize: 15,
        pageIndex: 2,

        controller: {
            loadData: function (filter) {
                var startIndex = (filter.pageIndex - 1) * filter.pageSize;
                return {
                    data: db.clients.slice(startIndex, startIndex + filter.pageSize),
                    itemsCount: db.clients.length
                };
            }
        },

        fields: [{
                name: "Name",
                type: "text",
                width: 150
            },
            {
                name: "Age",
                type: "number",
                width: 50
            },
            {
                name: "Address",
                type: "text",
                width: 200
            },
            {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Married",
                type: "checkbox",
                title: "Is Married"
            }
        ]
    });


    $("#pager").on("change", function () {
        var page = parseInt($(this).val(), 10);
        $("#loading").jsGrid("openPage", page);
    });

    /**********************************
     *      Custom View Scenario       *
     **********************************/

    $("#customView").jsGrid({
        width: "100%",

        filtering: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,

        pageSize: 15,
        pageButtonCount: 5,

        controller: db,

        fields: [{
                name: "Name",
                type: "text",
                width: 150
            },
            {
                name: "Age",
                type: "number",
                width: 50
            },
            {
                name: "Address",
                type: "text",
                width: 200
            },
            {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Married",
                type: "checkbox",
                title: "Is Married",
                sorting: false
            },
            {
                type: "control",
                modeSwitchButton: false,
                editButton: false
            }
        ]
    });


    $(".config-panel input[type=checkbox]").on("click", function () {
        var $cb = $(this);
        $("#customView").jsGrid("option", $cb.attr("id"), $cb.is(":checked"));
    });

    /**************************
     *      Batch Delete       *
     **************************/

    $("#batchDelete").jsGrid({
        width: "100%",
        autoload: true,
        confirmDeleting: false,
        paging: true,
        controller: {
            loadData: function () {
                return db.clients;
            }
        },
        fields: [{
                headerTemplate: function () {
                    return $("<button>").attr("type", "button").text("Delete").addClass("btn btn-primary mr-1")
                        .on("click", function () {
                            deleteSelectedItems();
                        });
                },
                itemTemplate: function (_, item) {
                    return $("<input>").attr("type", "checkbox")
                        .prop("checked", $.inArray(item, selectedItems) > -1)
                        .on("change", function () {
                            $(this).is(":checked") ? selectItem(item) : unselectItem(item);
                        });
                },
                align: "center",
                width: 50
            },
            {
                name: "Name",
                type: "text",
                width: 150
            },
            {
                name: "Age",
                type: "number",
                width: 50
            },
            {
                name: "Address",
                type: "text",
                width: 200
            }
        ]
    });


    var selectedItems = [];

    var selectItem = function (item) {
        selectedItems.push(item);
    };

    var unselectItem = function (item) {
        selectedItems = $.grep(selectedItems, function (i) {
            return i !== item;
        });
    };

    var deleteSelectedItems = function () {
        if (!selectedItems.length || !confirm("Are you sure?"))
            return;

        deleteClientsFromDb(selectedItems);

        var $grid = $("#batchDelete");
        $grid.jsGrid("option", "pageIndex", 1);
        $grid.jsGrid("loadData");

        selectedItems = [];
    };

    var deleteClientsFromDb = function (deletingClients) {
        db.clients = $.map(db.clients, function (client) {
            return ($.inArray(client, deletingClients) > -1) ? null : client;
        });
    };

    /*************************************
     *      External Pager Scenario       *
     *************************************/

    $("#external").jsGrid({
        width: "100%",
        paging: true,
        pageSize: 15,
        pageButtonCount: 5,
        pagerContainer: "#externalPager",
        pagerFormat: "current page: {pageIndex} &nbsp;&nbsp; {first} {prev} {pages} {next} {last} &nbsp;&nbsp; total pages: {pageCount}",
        pagePrevText: "<",
        pageNextText: ">",
        pageFirstText: "<<",
        pageLastText: ">>",
        pageNavigatorNextText: "&#8230;",
        pageNavigatorPrevText: "&#8230;",

        data: db.clients,

        fields: [{
                name: "Name",
                type: "text",
                width: 150
            },
            {
                name: "Age",
                type: "number",
                width: 50
            },
            {
                name: "Address",
                type: "text",
                width: 200
            },
            {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Married",
                type: "checkbox",
                title: "Is Married"
            }
        ]
    });

    /************************
     *      Reordering       *
     ************************/

    $("#reordering").jsGrid({
        width: "100%",
        autoload: true,

        rowClass: function (item, itemIndex) {
            return "client-" + itemIndex;
        },

        controller: {
            loadData: function () {
                return db.clients.slice(0, 15);
            }
        },

        fields: [{
                name: "Name",
                type: "text",
                width: 150
            },
            {
                name: "Age",
                type: "number",
                width: 50
            },
            {
                name: "Address",
                type: "text",
                width: 200
            },
            {
                name: "Country",
                type: "select",
                items: db.countries,
                valueField: "Id",
                textField: "Name"
            },
            {
                name: "Married",
                type: "checkbox",
                title: "Is Married",
                sorting: false
            }
        ],

        onRefreshed: function () {
            var $gridData = $("#reordering .jsgrid-grid-body tbody");

            $gridData.sortable({
                update: function (e, ui) {
                    // array of indexes
                    var clientIndexRegExp = /\s*client-(\d+)\s*/;
                    var indexes = $.map($gridData.sortable("toArray", {
                        attribute: "class"
                    }), function (classes) {
                        console.log(clientIndexRegExp.exec(classes));
                        return clientIndexRegExp.exec(classes)[1];
                    });
                    alert("Reordered indexes: " + indexes.join(", "));

                    // arrays of items
                    var items = $.map($gridData.find("tr"), function (row) {
                        return $(row).data("JSGridItem");
                    });
                    console && console.log("Reordered items", items);
                }
            });
        }
    });



});