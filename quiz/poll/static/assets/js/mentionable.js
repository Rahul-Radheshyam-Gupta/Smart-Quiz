/*
 * Mentions Input
 * Version 1.0.2
 * Written by: Kenneth Auchenberg (Podio)
 * Modified by: Zach Snow
 *
 * Using underscore.js
 *
 * See: https://github.com/zachsnow/jquery-mentions-input
 * 
 * License: MIT License - http://www.opensource.org/licenses/mit-license.php
 */
(function ($, _, undefined) {

  // Settings
  var KEY = { BACKSPACE : 8, TAB : 9, RETURN : 13, ESC : 27, LEFT : 37, UP : 38, RIGHT : 39, DOWN : 40, COMMA : 188, SPACE : 32, HOME : 36, END : 35 }; // Keys "enum"
  var defaultSettings = {
    triggerChar     : '@',
    elastic         : true,
    fullNameTrigger : false,
    onDataRequest   : $.noop,
    minChars        : 2,
    showAvatars     : true,
    classes         : {
      autoCompleteItemActive : "active"
    },
    templates       : {
      wrapper                    : _.template('<div class="mentions-input-box"></div>'),
      autocompleteList           : _.template('<div class="mentions-autocomplete-list"></div>'),
      autocompleteListItem       : _.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><%= content %></li>'),
      autocompleteListItemAvatar : _.template('<img  src="<%= avatar %>" />'),
      autocompleteListItemIcon   : _.template('<div class="icon <%= icon %>"></div>'),
      mentionsOverlay            : _.template('<div class="mentions"><div></div></div>'),
      mentionItemSyntax          : _.template('@[<%= value %>](<%= type %>:<%= id %>)'),
      mentionItemHighlight       : _.template('<strong><span><%= value %></span></strong>')
    },
    mentionItemRegex: /@\[([^\]]+)\]\(([^:]+):(\d+)\)/g
  };

  var utils = {
    htmlEncode       : function (str) {
      return _.escape(str);
    },
    highlightTerm    : function (value, term) {
      if (!term && !term.length) {
        return value;
      }
      return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b>$1</b>");
    },
    setCaratPosition : function (domNode, caretPos) {
      if (domNode.createTextRange) {
        var range = domNode.createTextRange();
        range.move('character', caretPos);
        range.select();
      } else {
        if (domNode.selectionStart) {
          domNode.focus();
          domNode.setSelectionRange(caretPos, caretPos);
        } else {
          domNode.focus();
        }
      }
    },
    getCaratPosition : function (domNode) {
      if(typeof(domNode.selectionStart) == "number") {
        start = domNode.selectionStart;
        end = domNode.selectionEnd;
      }

      else if(document.selection) {
        var range = document.selection.createRange();
        if (range.parentElement().id == domNode.id) {
          // Create a selection of the whole textarea
          var range_all = document.body.createTextRange();
          range_all.moveToElementText(domNode);

          // Calculate selection start point by moving beginning of range_all to beginning of range
          for (start=0; range_all.compareEndPoints("StartToStart", range) < 0; start++) {
            range_all.moveStart('character', 1);
          }

          for (var i = 0; i <= start; i ++) {
            if (domNode.value.charAt(i) == '\n')
            start++;
          }

          // Create a selection of the whole textarea
          var range_all = document.body.createTextRange();
          range_all.moveToElementText(domNode);

          // Calculate selection end point by moving beginning of range_all to end of range
          for (end = 0; range_all.compareEndPoints('StartToEnd', range) < 0; end ++) {
            range_all.moveStart('character', 1);
          }

          // Get number of line breaks from textarea start to selection end and add them to end
          for (var i = 0; i <= end; i ++){
            if (domNode.value.charAt(i) == '\n') {
              end ++;
            }
          }
        }
      }
      return end;
    },
    rtrim: function(string) {
      return string.replace(/\s+$/,"");
    }
  };

  var MentionsInput = function (input) {
    var settings;
    var elmInputBox, elmInputWrapper, elmAutocompleteList, elmWrapperBox, elmMentionsOverlay, elmActiveAutoCompleteItem;
    var mentionsCollection = [];
    var inputBuffer = [];
    var currentDataQuery;
    var cursorEndPosition;

    function initTextarea() {
      elmInputBox = $(input);

      if (elmInputBox.attr('data-mentions-input') == 'true') {
        return;
      }

      elmInputWrapper = elmInputBox.parent();
      elmWrapperBox = $(settings.templates.wrapper());
      elmInputBox.wrapAll(elmWrapperBox);
      elmWrapperBox = elmInputWrapper.find('> div');

      elmInputBox.attr('data-mentions-input', 'true');
      elmInputBox.bind('keydown', onInputBoxKeyDown);
      elmInputBox.bind('keypress', onInputBoxKeyPress);
      elmInputBox.bind('input', onInputBoxInput);
      elmInputBox.bind('click', onInputBoxClick);

      if (settings.fullNameTrigger) {
        elmInputBox.bind('keyup mousedown mouseup focus', saveCursorPosition);
      }

      if(settings.elastic){
        elmInputBox.elastic();
      }
    }

    function initAutocomplete() {
      elmAutocompleteList = $(settings.templates.autocompleteList());
      elmAutocompleteList.appendTo(elmWrapperBox);
      elmAutocompleteList.delegate('li', 'click', onAutoCompleteItemClick);
    }

    function initMentionsOverlay() {
      elmMentionsOverlay = $(settings.templates.mentionsOverlay());
      elmMentionsOverlay.prependTo(elmWrapperBox);
    }
    

    function saveCursorPosition(e) {
      cursorEndPosition = utils.getCaratPosition(e.target);
    }

    function updateValues() {
      var initialMessage = getInputBoxValue();
      
      var syntaxMessage = '';
      var index = 0;
      _.each(mentionsCollection, function (mention) {
        var textSyntax = settings.templates.mentionItemSyntax({ value : mention.value, type : mention.type, id : mention.id });
       

        var mentionIndex = initialMessage.indexOf(mention.value, index);
        if (mentionIndex === -1) {
          return;
        }
        
        syntaxMessage += initialMessage.substr(index, mentionIndex - index);
        syntaxMessage += textSyntax;
         
        index = mentionIndex + mention.value.length;
      });
      syntaxMessage += initialMessage.substr(index);

      var mentionText = utils.htmlEncode(syntaxMessage);

      _.each(mentionsCollection, function (mention) {
        var textSyntax = settings.templates.mentionItemSyntax({ value : utils.htmlEncode(mention.value), type : mention.type, id : mention.id });
        var textHighlight = settings.templates.mentionItemHighlight({ value : utils.htmlEncode(mention.value) });
       

        mentionText = mentionText.replace(textSyntax, textHighlight);
      });

      mentionText = mentionText.replace(/\n/g, '<br />');
      mentionText = mentionText.replace(/ {2}/g, '&nbsp; ');

      elmInputBox.data('messageText', syntaxMessage);
      elmMentionsOverlay.find('div').html(mentionText);
    }

    function resetBuffer() {
      inputBuffer = [];
    }

    function updateMentionsCollection() {
      var inputText = getInputBoxValue();

      mentionsCollection = _.reject(mentionsCollection, function (mention) {
        // Discard bad mentions.
        if(!mention.value){
          return true;
        }
        
        // Expect to find the mention in the right place.
        return inputText.indexOf(mention.value) === false;
      });
      mentionsCollection = _.compact(mentionsCollection);
    }

    function addMention(value, id, type) {
      var currentMessage = getInputBoxValue();

      if (settings.fullNameTrigger) {
        // Get the actual carat position using some black magic
        var currentCaretPosition = cursorEndPosition;
        var startCaretPosition = currentCaretPosition - currentDataQuery.length;

        // Find where to start inserting mention
        var matchLen = value.indexOf(currentDataQuery) + currentDataQuery.length;
        var curMessage = currentMessage.substring(0, currentCaretPosition);
        if(curMessage.substring(curMessage.length - matchLen) ==  value.substring(0, matchLen)){
          startCaretPosition -= value.indexOf(currentDataQuery);
        }
      }
      else {
        // Using a regex to figure out positions
        var regex = new RegExp("\\" + settings.triggerChar + currentDataQuery, "gi");
        regex.exec(currentMessage);

        var startCaretPosition = regex.lastIndex - currentDataQuery.length - 1;
        var currentCaretPosition = regex.lastIndex;
      }

      var start = currentMessage.substr(0, startCaretPosition);
      var end = currentMessage.substr(currentCaretPosition, currentMessage.length);
      var startEndIndex = (start + value).length;

      var updatedMessageText = start + value + end;

      mentionsCollection.push({
        id    : id,
        type  : type,
        value : value,
        index : startCaretPosition
      });
      mentionsCollection = _.sortBy(mentionsCollection, function(mention){
        return mention.index;
      });

      // Cleaning before inserting the value, otherwise auto-complete would be triggered with "old" inputbuffer
      resetBuffer();
      currentDataQuery = '';
      hideAutoComplete();

      // Mentions & syntax message
      elmInputBox.val(updatedMessageText);
      updateValues();

      // Set correct focus and selection
      elmInputBox.focus();
      utils.setCaratPosition(elmInputBox[0], startEndIndex);
    }

    function getInputBoxValue() {
      return elmInputBox.val();
    }

    function onAutoCompleteItemClick(e) {
      var elmTarget = $(this);

      addMention(elmTarget.attr('data-display'), elmTarget.attr('data-ref-id'), elmTarget.attr('data-ref-type'));

      return false;
    }

    function onInputBoxClick(e) {
      resetBuffer();
    }

    function onInputBoxInput(e) {
      updateMentionsCollection();
      updateValues();
      hideAutoComplete();

      var space_index = _.lastIndexOf(inputBuffer, " ");
      if (space_index > -1) {
        inputBuffer = inputBuffer.slice(space_index + 1);
      }

      if (settings.fullNameTrigger)
        currentDataQuery = inputBuffer.join('');
      else {
        var triggerCharIndex = _.lastIndexOf(inputBuffer, settings.triggerChar);
        if (triggerCharIndex > -1) {
          currentDataQuery = inputBuffer.slice(triggerCharIndex + 1).join('');
          currentDataQuery = utils.rtrim(currentDataQuery);
        }
        else {
          currentDataQuery = null;
        }
      }
      _.defer(_.bind(doSearch, this, currentDataQuery));
    }

    function onInputBoxKeyPress(e) {
      if(e.keyCode !== KEY.BACKSPACE) {
        var typedValue = String.fromCharCode(e.which || e.keyCode);
        inputBuffer.push(typedValue);
      }
    }

    function onInputBoxKeyDown(e) {
      // This also matches HOME/END on OSX which is CMD+LEFT, CMD+RIGHT
      if (e.keyCode == KEY.LEFT || e.keyCode == KEY.RIGHT || e.keyCode == KEY.HOME || e.keyCode == KEY.END) {
        // Defer execution to ensure carat pos has changed after HOME/END keys
        _.defer(resetBuffer);

        // IE9 doesn't fire the oninput event when backspace or delete is pressed. This causes the highlighting
        // to stay on the screen whenever backspace is pressed after a highlighed word. This is simply a hack
        // to force updateValues() to fire when backspace/delete is pressed in IE9.
        if (navigator.userAgent.indexOf("MSIE 9") > -1) {
          _.defer(updateValues);
        }

        return;
      }

      if (e.keyCode == KEY.BACKSPACE) {
        inputBuffer = inputBuffer.slice(0, -1 + inputBuffer.length); // Can't use splice, not available in IE
        return;
      }

      if (!elmAutocompleteList.is(':visible')) {
        return true;
      }

      switch (e.keyCode) {
        case KEY.UP:
        case KEY.DOWN:
          var elmCurrentAutoCompleteItem = null;
          if (e.keyCode == KEY.DOWN) {
            if (elmActiveAutoCompleteItem && elmActiveAutoCompleteItem.length) {
              elmCurrentAutoCompleteItem = elmActiveAutoCompleteItem.next();
            } else {
              elmCurrentAutoCompleteItem = elmAutocompleteList.find('li').first();
            }
          } else {
            elmCurrentAutoCompleteItem = $(elmActiveAutoCompleteItem).prev();
          }

          if (elmCurrentAutoCompleteItem.length) {
            selectAutoCompleteItem(elmCurrentAutoCompleteItem);
          }

          return false;

        case KEY.RETURN:
        case KEY.TAB:
          if (elmActiveAutoCompleteItem && elmActiveAutoCompleteItem.length) {
            elmActiveAutoCompleteItem.click();
            return false;
          }

          break;
        
        case KEY.ESC:
          hideAutoComplete();
          return false;
      }

      return true;
    }

    function hideAutoComplete() {
      elmActiveAutoCompleteItem = null;
      elmAutocompleteList.empty().hide();
    }

    function selectAutoCompleteItem(elmItem) {
      elmItem.addClass(settings.classes.autoCompleteItemActive);
      elmItem.siblings().removeClass(settings.classes.autoCompleteItemActive);

      elmActiveAutoCompleteItem = elmItem;
    }

    function populateDropdown(query, results) {
      elmAutocompleteList.show();

      // Filter items that has already been mentioned
      var mentionValues = _.pluck(mentionsCollection, 'value');
      //results = _.reject(results, function (item) {
      //  return _.include(mentionValues, item.name);
      //});

      if (!results.length) {
        hideAutoComplete();
        return;
      }

      elmAutocompleteList.empty();
      var elmDropDownList = $("<ul>").appendTo(elmAutocompleteList).hide();

      _.each(results, function (item, index) {
        var elmListItem = $(settings.templates.autocompleteListItem({
          'id'      : utils.htmlEncode(item.id),
          'display' : utils.htmlEncode(item.name),
          'type'    : utils.htmlEncode(item.type),
          'content' : utils.highlightTerm(utils.htmlEncode((item.name)), query),
          'item'    : item
        }));

        if (index === 0) {
          selectAutoCompleteItem(elmListItem);
        }

        if (settings.showAvatars) {
          var elmIcon;

          if (item.avatar) {
            elmIcon = $(settings.templates.autocompleteListItemAvatar({ avatar : item.avatar }));
          } else {
            elmIcon = $(settings.templates.autocompleteListItemIcon({ icon : item.icon }));
          }
          elmIcon.prependTo(elmListItem);
        }
        elmListItem = elmListItem.appendTo(elmDropDownList);
      });

      elmAutocompleteList.show();
      elmDropDownList.show();
    }

    function doSearch(query) {
      if (_.isString(query) && query.length >= settings.minChars) {
        if (settings.fullNameTrigger) {
          doSearchFullNameTrigger(query);
        } else {
          settings.onDataRequest.call(this, 'search', query, function (responseData) {
            populateDropdown(query, responseData);
          });
        }
      }
    }

    function doSearchFullNameTrigger(query) {
      query = query.substring(query.lastIndexOf(" ") + 1);
      var regexp = /[A-Z][a-z]/g;
      var arr = query.match(regexp);
      if(arr) {
        query = query.substring(query.lastIndexOf(arr[arr.length - 1]));
        if(query.length < settings.minChars) { return; }

        settings.onDataRequest.call(this, 'search', query, function (responseData) {
          currentDataQuery = query;
          populateDropdown(query, responseData);
        });
      }
    }

    // Public methods
    var mentionsInput = {
      init : function (options) {
        settings = options;

        initTextarea();
        initAutocomplete();
        initMentionsOverlay();
        
        var initialText = getInputBoxValue();
        if(initialText){
          mentionsInput.set(initialText);
        }
      },

      val : function (callback) {
        var value = mentionsCollection.length ? elmInputBox.data('messageText') : getInputBoxValue();
        
        if (!_.isFunction(callback)) {
          return value;
        }

        callback.call(this, value);
      },

      reset : function () {
        elmInputBox.val('');
        mentionsCollection = [];
        updateValues();
      },
      
      set : function(initialText){
        var syntaxMessage = initialText.replace(settings.mentionItemRegex, '$1');
        elmInputBox.val(syntaxMessage);
        
        mentionsCollection = [];
        
        var match;
        var extra = 0;
        while(match = settings.mentionItemRegex.exec(initialText)){
          var value = match[1];
          var type = match[2];
          var id = match[3];
          mentionsCollection.push({
            value: value,
            type: type,
            id: id,
            index: match.index - extra
          });
          
          extra += (match[0].length - value.length);
        }
        
        updateValues();
      },

      getMentions : function (callback) {
        if (!_.isFunction(callback)) {
          return mentionsCollection;
        }

        callback.call(this, mentionsCollection);
      }
    };
    
    return mentionsInput;
  };

  $.fn.mentionsInput = function (method) {
    var settings;
    if (typeof method === 'object' || !method) {
      settings = $.extend(true, {}, defaultSettings, method);
    }

    var outerArguments = arguments;

    if(_.isString(method)){
      var first = this[0];
      var instance = $.data(first, 'mentionsInput');
      if(!instance){
        return;
      }
      
      return instance[method].apply(first, outerArguments);
    }
    
    return this.each(function () {
      var instance = $.data(this, 'mentionsInput') || $.data(this, 'mentionsInput', new MentionsInput(this));
      return instance.init.call(this, settings);
    });
  };

})(jQuery, _);