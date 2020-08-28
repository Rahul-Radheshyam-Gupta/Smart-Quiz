(function(window, undefined) {
  'use strict';

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

  	$("#navMenu").resize(function () {
        $('#godown').height($("#navMenu").height() + 10);
    });

    if ($("#navMenu").height() > $('#godown').height()) $('#godown').height($("#navMenu").height() + 10);

})(window);


$("#checkAll").click(function () {
    $(".check").prop('checked', $(this).prop('checked'));
    console.log("Hello");
});


///*Initial Repeater Empty START*/
//$(document).ready(function () {
//    $('.repeater').repeater({
//        // (Optional)
//        // start with an empty list of repeaters. Set your first (and only)
//        // "data-repeater-item" with style="display:none;" and pass the
//        // following configuration flag
//        initEmpty: true,
//        // (Optional)
//        // "defaultValues" sets the values of added items.  The keys of
//        // defaultValues refer to the value of the input's name attribute.
//        // If a default value is not specified for an input, then it will
//        // have its value cleared.
//        defaultValues: {
//            'text-input': 'foo'
//        },
//        // (Optional)
//        // "show" is called just after an item is added.  The item is hidden
//        // at this point.  If a show callback is not given the item will
//        // have $(this).show() called on it.
//        show: function () {
//            $(this).slideDown();
//        },
//        // (Optional)
//        // "hide" is called when a user clicks on a data-repeater-delete
//        // element.  The item is still visible.  "hide" is passed a function
//        // as its first argument which will properly remove the item.
//        // "hide" allows for a confirmation step, to send a delete request
//        // to the server, etc.  If a hide callback is not given the item
//        // will be deleted.
//        hide: function (deleteElement) {
//            if (confirm('Are you sure you want to delete this element?')) {
//                $(this).slideUp(deleteElement);
//            }
//        },
//        // (Optional)
//        // You can use this if you need to manually re-index the list
//        // for example if you are using a drag and drop library to reorder
//        // list items.
//        ready: function (setIndexes) {
//            $dragAndDrop.on('drop', setIndexes);
//        },
//        // (Optional)
//        // Removes the delete button from the first list item,
//        // defaults to false.
//        isFirstItemUndeletable: true
//    })
//});
//
///*Initial Repeater Empty END*/


$('.continue').click(function () {
    $('.nav-tabs > .active').next('li').find('a').trigger('click');
});
$('.back').click(function () {
    $('.nav-tabs > .active').prev('li').find('a').trigger('click');
});

function chooseFile() {
    document.getElementById("fileInput").click();
}


