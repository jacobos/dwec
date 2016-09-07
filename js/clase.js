(function() {
  var app = angular.module('clase', []);
  app.controller('dwecClassController', function($scope, $timeout) {
    $scope.elements = elementArray;


    $scope.init = function() {
      //your code
    };

    //$timeout($scope.init);
  });


  var elementArray = [{
    orden: -2,
    name: "Initial slides",
    fills: [{
      name: "Slides 01 (presentation)",
      url: "slides/01.html"
    }, {
      name: "Slides 02 (what is JavaScript)",
      url: "slides/02.html"
    }, {
      name: "Slides 03 (JS Grammar 1)",
      url: "slides/03.html"
    }, {
      name: "Slides 04 (JS Grammar 2)",
      url: "slides/04.html"
    }, {
      name: "Slides 05 (DOM and Events)",
      url: "slides/05.html"
    }, {
      name: "Javascript (Crockford)",
      url: "javascript.pdf"
    }, {
      name: "Video of the presentation",
      url: "http://yuiblog.com/blog/2007/01/24/video-crockford-tjpl/"
    }]
  }, {
    orden: -1,
    name: "JS reference",
    fills: [{
      name: "String",
      url: "http://www.w3schools.com/jsref/jsref_obj_string.asp"
    }, {
      name: "Numbers",
      url: "http://www.w3schools.com/jsref/jsref_obj_number.asp"
    }, {
      name: "Boolean",
      url: "http://www.w3schools.com/jsref/jsref_obj_boolean.asp"
    }, {
      name: "Math Object",
      url: "http://www.w3schools.com/jsref/jsref_obj_math.asp"
    }, {
      name: "Date Object",
      url: "http://www.w3schools.com/jsref/jsref_obj_date.asp"
    }, {
      name: "Array Object",
      url: "http://www.w3schools.com/jsref/jsref_obj_array.asp"
    }, {
      name: "JS global properties and functions (parseInt, parseFloat...)",
      desc: "JS global properties and functions",
      url: "http://www.w3schools.com/jsref/jsref_obj_global.asp"
    }, {
      name: "Operators",
      url: "http://www.w3schools.com/jsref/jsref_operators.asp"
    }, {
      name: "RegExp Object",
      url: "http://www.w3schools.com/jsref/jsref_obj_regexp.asp"
    }, {
      name: "Values, variables and literals",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals"
    }, {
      name: "Window Object - BOM",
      url: "http://www.w3schools.com/jsref/obj_window.asp"
    }, {
      name: "Navigator Object - BOM",
      url: "http://www.w3schools.com/jsref/obj_navigator.asp"
    }, {
      name: "History Object - BOM",
      url: "http://www.w3schools.com/jsref/obj_screen.asp"
    }, {
      name: "Screen Object - BOM",
      url: "http://www.w3schools.com/jsref/obj_history.asp"
    }, {
      name: "Location Object - BOM",
      url: "http://www.w3schools.com/jsref/obj_location.asp"
    }, {
      name: "JS w3schools",
      url: "http://www.w3schools.com/js/"
    }]
  }, {
    orden: 2,
    name: "document functions (DOM.a)",
    fills: [{
      name: "getElementById(string)",
      desc: "Get the element with the specified ID",
      url: "http://www.w3schools.com/jsref/met_document_getelementbyid.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementbyid"
    }, {
      name: "createTextNode(string)",
      desc: "The createElement() method creates an Element Node with the specified name",
      url: "http://www.w3schools.com/jsref/met_document_createtextnode.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createtextnode"
    }, {
      name: "createElement(string)",
      desc: "The createElement() method creates an Element Node with the specified name (div, button, span...)",
      url: "http://www.w3schools.com/jsref/met_document_createelement.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2"
    }, {
      name: "getElementsByClassName(string)",
      desc: "Get all elements with the specified class name",
      url: "http://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname"
    }, {
      name: "getElementsByTagName(string)",
      desc: "Get all elements with the specified tag name",
      url: "http://www.w3schools.com/jsref/met_document_getelementsbytagname.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname"
    }, {
      name: "querySelector(string)",
      desc: "Get the first element in the document with the given css selector",
      url: "http://www.w3schools.com/jsref/met_document_queryselector.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector_class"
    }, {
      name: "querySelectorAll(string)",
      desc: "Get all the elements in the document with the given css selector",
      url: "http://www.w3schools.com/jsref/met_document_queryselectorall.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselectorall_class"
    }, {
      name: "you can use the last four on elements too!!",
    }, {
      name: "more here!!",
      url: "http://www.w3schools.com/jsref/dom_obj_document.asp"
    }]
  }, {
    orden: 3,
    name: "element functions and properties (DOM.b)",
    fills: [{
      name: "element.setAttribute(attr, str)",
      desc: "Sets the given attribute 'attr' the value of the string 'str'",
      url: "http://www.w3schools.com/jsref/met_element_setattribute.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1"
    }, {
      name: "element.getAttribute(attr)",
      desc: "Get the value of the 'attr' attribute from elem",
      url: "http://www.w3schools.com/jsref/met_element_getattribute.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_getattribute1"
    }, {
      name: "elem.appendChild(childElem)",
      desc: "Adds a new child node, to an element, as the last child node",
      url: "http://www.w3schools.com/jsref/met_node_appendchild.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild"
    }, {
      name: "element.children",
      desc: "Returns a collection of an element's child element (excluding text and comment nodes)",
      url: "http://www.w3schools.com/jsref/prop_element_children.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_children"
    }, {
      name: "element.childNodes",
      desc: "Returns a collection of an element's child nodes (including text and comment nodes)",
      url: "http://www.w3schools.com/jsref/prop_node_childnodes.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_childnodes"
    }, {
      name: "element.cloneNode(true)",
      desc: "The cloneNode() method creates a copy of a node, and returns the clone. The cloneNode() method clones all attributes and their values.",
      url: "http://www.w3schools.com/jsref/met_node_clonenode.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_clonenode"
    }, {
      name: "element.parentNode",
      desc: "Returns the parent node of an element",
      url: "http://www.w3schools.com/jsref/prop_node_parentnode.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_parentnode"
    }, {
      name: "element.removeChild(childN)",
      desc: "Removes a child node ('childN') from an element",
      url: "http://www.w3schools.com/jsref/met_node_removechild.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild"
    }, {
      name: "element.firstChild",
      desc: "Returns the first child node of an element",
      url: "http://www.w3schools.com/jsref/prop_node_firstchild.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_firstchild"
    }, {
      name: "element.lastChild",
      desc: "Returns the last child node of an element",
      url: "http://www.w3schools.com/jsref/prop_node_lastchild.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_lastchild"
    }, {
      name: "element.nextSibling",
      desc: "Returns the next node at the same node tree level",
      url: "http://www.w3schools.com/jsref/prop_node_nextsibling.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_nextsibling"
    }, {
      name: "element.previousSibling",
      desc: "Returns the previous node at the same node tree level",
      url: "http://www.w3schools.com/jsref/prop_node_previoussibling.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_previoussibling"
    }, {
      name: "element.innerHTML",
      desc: "Sets or gets the inner HTML of an element",
      url: "http://www.w3schools.com/jsref/prop_html_innerhtml.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml"
    }, {
      name: "more here!!",
      url: "http://www.w3schools.com/jsref/dom_obj_all.asp"
    }]
  }, {
    orden: 4,
    name: "Events (DOM.c)",
    fills: [{
      name: "onclick",
      desc: "",
      url: "http://www.w3schools.com/jsref/event_onclick.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_addeventlistener"
    }, {
      name: "ondblckick",
      desc: "",
      url: "http://www.w3schools.com/jsref/event_ondblclick.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick_addeventlistener"
    }, {
      name: "onmousedown",
      desc: "",
      url: "http://www.w3schools.com/jsref/event_onmousedown.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousedown_addeventlistener"
    }, {
      name: "onmouseover",
      desc: "",
      url: "http://www.w3schools.com/jsref/event_onmouseover.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener"
    }, {
      name: "onmouseup",
      desc: "",
      url: "http://www.w3schools.com/jsref/event_onmouseup.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousedown_addeventlistener"
    }, {
      name: "onmouseout",
      desc: "",
      url: "http://www.w3schools.com/jsref/event_onmouseout.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener"
    }, {
      name: "onkeydown",
      desc: "",
      url: "http://www.w3schools.com/jsref/event_onkeydown.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeydown_addeventlistener"
    }, {
      name: "onkeypress",
      desc: "The KeyPress event is not raised by noncharacter keys; however, the noncharacter keys do raise the KeyDown and KeyUp events.",
      url: "http://www.w3schools.com/jsref/event_onkeypress.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeypress_addeventlistener"
    }, {
      name: "onkeyup",
      desc: "",
      url: "http://www.w3schools.com/jsref/event_onkeyup.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener"
    }, {
      name: "onscroll",
      desc: "Execute a JavaScript when an element is being scrolled",
      url: "http://www.w3schools.com/jsref/event_onscroll.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll_addeventlistener"
    }, {
      name: "onsubmit",
      desc: "Execute a JavaScript when a form is submitted",
      url: "http://www.w3schools.com/jsref/event_onsubmit.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onsubmit_addeventlistener"
    }, {
      name: "onpaste",
      desc: "Execute a JavaScript when pasting some text on an alement",
      url: "http://www.w3schools.com/jsref/event_onpaste.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onpaste_addeventlistener"
    }, {
      name: "onload",
      desc: "Execute a JavaScript immediately after a page has been loaded",
      url: "http://www.w3schools.com/jsref/event_onload.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onload_addeventlistener"
    }, {
      name: "more here!!",
      url: "http://www.w3schools.com/jsref/dom_obj_event.asp"
    }]
  }, {
    orden: 5,
    name: "String methods and props.",
    fills: [{
      name: "charAt(0)",
      desc: "returns the character at the given position",
      url: "http://www.w3schools.com/jsref/jsref_charat.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_charat"
    }, {
      name: "indexOf(x)",
      desc: "Returns the position of the first found occurrence of a specified value in a string",
      url: "http://www.w3schools.com/jsref/jsref_indexof.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_indexof"
    }, {
      name: "slice(x,y)",
      desc: "Extracts a part of a string and returns a new string",
      url: "http://www.w3schools.com/jsref/jsref_slice_string.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_slice"
    }, {
      name: "split(x)",
      desc: "Splits a string into an array of substrings",
      url: "http://www.w3schools.com/jsref/jsref_split.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split"
    }, {
      name: "substr(x, y)",
      desc: "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character",
      url: "http://www.w3schools.com/jsref/jsref_substr.asp"
    }, {
      name: "substring(x, y)",
      desc: "Extracts the characters from a string, between two specified indices",
      url: "http://www.w3schools.com/jsref/jsref_substring.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_substring"
    }, {
      name: "toLowerCase()",
      desc: "Converts a string to lowercase letters",
      url: "http://www.w3schools.com/jsref/jsref_tolowercase.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolowercase"
    }, {
      name: "toUpperCase()",
      desc: "Converts a string to uppercase letters",
      url: "http://www.w3schools.com/jsref/jsref_touppercase.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_touppercase"
    }, {
      name: "trim()",
      desc: "Removes whitespace from both ends of a string",
      url: "http://www.w3schools.com/jsref/jsref_trim_string.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_trim"
    }, {
      name: "more here!",
      url: "http://www.w3schools.com/jsref/jsref_obj_string.asp"
    }]
  }, {
    orden: 6,
    name: "Array methods and props.",
    fills: [{
      name: "concat()",
      desc: "Joins two or more arrays, and returns a copy of the joined arrays",
      url: "http://www.w3schools.com/jsref/jsref_concat_array.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_concat"
    }, {
      name: "indexOf()",
      desc: "Search the array for an element and returns its position",
      url: "http://www.w3schools.com/jsref/jsref_indexof_array.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_indexof_array"
    }, {
      name: "join()",
      desc: "Joins all elements of an array into a string",
      url: "http://www.w3schools.com/jsref/jsref_join.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_join"
    }, {
      name: "pop()",
      desc: "Removes the last element of an array, and returns that element",
      url: "http://www.w3schools.com/jsref/jsref_pop.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pop"
    }, {
      name: "push()",
      desc: "Adds new elements to the end of an array, and returns the new length",
      url: "http://www.w3schools.com/jsref/jsref_push.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_push"
    }, {
      name: "reverse()",
      desc: "Reverses the order of the elements in an array",
      url: "http://www.w3schools.com/jsref/jsref_reverse.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reverse",
    }, {
      name: "slice()",
      desc: "Selects a part of an array, and returns the new array",
      url: "http://www.w3schools.com/jsref/jsref_slice_array.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_slice_array",
    }, {
      name: "sort()",
      desc: "Sorts the elements of an array",
      url: "http://www.w3schools.com/jsref/jsref_sort.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_sort"
    }, {
      name: "sort(funct)",
      desc: "sort in ascending order",
      url: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_sort2",
      url2: "http://www.w3schools.com/jsref/jsref_sort.asp"
    }, {
      name: "sort randomly",
      desc: "how to randomly sort an array, shuffle",
      url: "shuffle.html",
      url2: "shuffle.html"
    }, {
      name: "unshift()",
      desc: "Adds new elements to the beginning of an array, and returns the new length",
      url: "http://www.w3schools.com/jsref/jsref_unshift.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_unshift"
    }, {
      name: "more here!",
      url: "http://www.w3schools.com/jsref/jsref_obj_array.asp"
    }]
  }, {
    orden: 7,
    name: "Window (BOM)",
    fills: [{
      name: "console.log(data)",
      desc: "Display data on your browser console, with F12 you'll see it",
      url: "http://www.w3schools.com/js/tryit.asp?filename=tryjs_output_console",
      url2: "http://www.w3schools.com/js/tryit.asp?filename=tryjs_output_console"
    }, {
      name: "alert(string)",
      desc: "The alert() method displays an alert box with a specified message and an OK button.",
      url: "http://www.w3schools.com/jsref/met_win_alert.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert"
    }, {
      name: "confirm(st)",
      desc: "The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.",
      url: "http://www.w3schools.com/jsref/met_win_confirm.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_confirm"
    }, {
      name: "prompt",
      desc: "The prompt() method displays a dialog box that prompts the visitor for input.",
      url: "http://www.w3schools.com/jsref/met_win_prompt.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt"
    }, {
      name: "prompt(text,defaultText)",
      desc: "The prompt() method displays a dialog box that prompts the visitor for input.",
      url: "http://www.w3schools.com/jsref/met_win_prompt.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt"
    }, {
      name: "setTimeOut(function(){}, time)",
      desc: "The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.",
      url: "http://www.w3schools.com/jsref/met_win_settimeout.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout"
    }, {
      name: "clearTimeOut(functionName)",
      desc: "The clearTimeout() method clears a timer set with the setTimeout() method.",
      url: "http://www.w3schools.com/jsref/met_win_cleartimeout.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_cleartimeout"
    }, {
      name: "setInterval(function(){}, time)",
      desc: "The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).",
      url: "http://www.w3schools.com/jsref/met_win_setinterval.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval"
    }, {
      name: "clearInterval(functionName)",
      desc: "The clearInterval() method clears a timer set with the setInterval() method.",
      url: "http://www.w3schools.com/jsref/met_win_clearinterval.asp",
      url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_clearinterval"
    }]
  }, {
    orden: -3,
    name: "empty"
  }/*, {
    orden: -3,
    name: "Class examples",
    fills: [{
        name: "Change innerHTML and JS in html",
        desc: "Change the HTML",
        url: "001_changeInnerHTML.html"
      }, {
        name: "Swap elements",
        desc: "Swap the content of two elements, the onnerHTML",
        url: "002_swapElements.html"
      }, {
        name: "Change CSS",
        desc: "Swap the css file with another one",
        url: "003_changeCSS.html"
      }, {
        name: "Swap pictures",
        desc: "Swap the content of two elements, the styles",
        url: "004_pictureSwitch.html"
      }, {
        name: "childNodes and children",
        desc: "differences between childNodes and children",
        url: "005_childNodes_children.html"
      }, {
        name: "rotate divs",
        desc: "Rotate a group of divs dynamycally created",
        url: "006_moving.html"
      }, {
        name: "create and hide images",
        desc: "create and hide images",
        url: "007_createAndHideImages.html"
      }, {
        name: "Sort randomly",
        desc: "how to randomly sort an array, shuffle",
        url: "007_shuffle.html"
      }, {
        name: "Pointer position",
        desc: "a mouse pointer",
        url: "008_pointer_position.html"

      }, {
        name: "Puzzle",
        desc: "a puzzle game",
        url: "009_puzzle.html"
      }, {
        name: "Exam trees base",
        desc: "Exam trees base",
        url: "exam_trees_initial.html"

      }, {
        name: "Exam trees solution",
        desc: "Exam trees solution",
        url: "exam_trees_solved.html"
      }, {
        name: "Dynamic elements",
        desc: "Dynamic elements",
        url: "010_ps_button.html"
      }, {
        name: "jQ first",
        desc: "first jquery work",
        url: "011_jq1.html"
      }, {
        name: "Grunt Bower init",
        desc: "basic configuration with Grunt and Bower",
        url: "gruntBowerSite_1.tar.gz"
      }, {
        name: "Grunt Bower init reload",
        desc: "basic configuration with Grunt and Bower",
        url: "grunt_bow_start.tar.gz"
      }, {
        name: "Grunt Bower init reload minified",
        desc: "basic configuration with Grunt and Bower",
        url: "grunt_bow_start.min.tar.gz"
      }, {
        name: "Examples for creating jQuery content",
        desc: "Examples for creating jQuery content",
        url: "fourWaysJQuery.js"
      }, {
        name: "Scrolling top",
        desc: "Scrolling top",
        url: "scrolling_top.html"
      }, {
        name: "Bind and unbind",
        desc: "Using the bind and unbind methods",
        url: "bind_unbind.html"
      }

    ]
  }*/, {
    orden: 8,
    name: "jQuery (1)",
    fills: [{
      name: "jQuery selectors (w3)",
      desc: "jQuery selectors w3wchools.",
      url: "http://www.w3schools.com/jquery/jquery_ref_selectors.asp",
      url2: "http://www.w3schools.com/jquery/trysel.asp"
    }, {
      name: "jQuery selectors (api)",
      desc: "Borrowing from CSS 1ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ3, and then adding its own, jQuery offers a powerful set of tools for matching a set of elements in a document.",
      url: "https://api.jquery.com/category/selectors/"
    }, {
      name: "$( document ).ready()",
      desc: "A page can't be manipulated safely until the document is 'ready.' jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. Code included inside $( window ).load(function() { ... }) will run once the entire page (images or iframes), not just the DOM, is ready.",
      url: "https://learn.jquery.com/using-jquery-core/document-ready/",
      w3: "http://www.w3schools.com/jquery/event_ready.asp",
    }, {
      name: "find",
      desc: "Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.",
      url: "http://api.jquery.com/find/",
      w3: "http://www.w3schools.com/jquery/traversing_find.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_find"
    }, {
      name: "filter",
      desc: " Reduce the set of matched elements to those that match the selector or pass the function's test.",
      url: "http://api.jquery.com/filter/",
      w3: "http://www.w3schools.com/jquery/traversing_filter.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_filter"
    }, {
      name: "show",
      desc: "Display the matched elements.",
      url: "http://api.jquery.com/show/",
      w3: "http://www.w3schools.com/jquery/jquery_hide_show.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show"
    }, {
      name: "hide",
      desc: "Hide the matched elements.",
      url: "http://api.jquery.com/hide/",
      w3: "http://www.w3schools.com/jquery/jquery_hide_show.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_show",
      url3: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_slow"
    }, {
      name: "toggle",
      desc: "Display or hide the matched elements.",
      url: "http://api.jquery.com/toggle/",
      w3: "http://www.w3schools.com/jquery/jquery_hide_show.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_toggle"
    }, {
      name: "fadeIn",
      desc: "Display the matched elements by fading them to opaque.",
      url: "http://api.jquery.com/fadein/",
      w3: "http://www.w3schools.com/jquery/jquery_fade.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadein"
    }, {
      name: "fadeOut",
      desc: "Hide the matched elements by fading them to transparent.",
      url: "http://api.jquery.com/fadeout/",
      w3: "http://www.w3schools.com/jquery/jquery_fade.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeout"
    }, {
      name: "fadeToggle",
      desc: "Display or hide the matched elements by animating their opacity.",
      url: "http://api.jquery.com/fadeToggle/",
      w3: "http://www.w3schools.com/jquery/jquery_fade.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadetoggle"
    }, {
      name: "fadeTo",
      desc: "Adjust the opacity of the matched elements.",
      url: "http://api.jquery.com/fadeto/",
      w3: "http://www.w3schools.com/jquery/jquery_fade.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeto"
    }, {
      name: "slideDown",
      desc: "Display the matched elements with a sliding motion.",
      url: "http://api.jquery.com/slidedown/",
      w3: "http://www.w3schools.com/jquery/jquery_slide.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_slideup_slidedown"
    }, {
      name: "slideUp",
      desc: "Hide the matched elements with a sliding motion.",
      url: "http://api.jquery.com/slideup/",
      w3: "http://www.w3schools.com/jquery/jquery_slide.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_slideup_slidedown"
    }, {
      name: "slideToggle",
      desc: "Display or hide the matched elements with a sliding motion.",
      url: "http://api.jquery.com/slidetoggle/",
      w3: "http://www.w3schools.com/jquery/jquery_slide.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_slidetoggle"
    }, {
      name: "not",
      desc: "Remove elements from the set of matched elements.",
      url: "http://api.jquery.com/not/",
      w3: "http://www.w3schools.com/jquery/traversing_not.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_traversing_not"
    }, {
      name: "add",
      desc: "Create a new jQuery object with elements added to the set of matched elements.",
      url: "http://api.jquery.com/add/",
      w3: "http://www.w3schools.com/jquery/traversing_add.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_traversing_add"
    }, {
      name: "get",
      desc: "Retrieve the DOM elements matched by the jQuery object. $('p').get(0) === $('p')[0]",
      url: "https://api.jquery.com/get/",
      w3: "http://www.w3schools.com/jquery/misc_get.asp"
    }, {
      name: "eq",
      desc: "Reduce the set of matched elements to the one at the specified index.",
      url: "http://api.jquery.com/eq/",
      w3: "http://www.w3schools.com/jquery/traversing_eq.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eq"
    }, {
      name: "html",
      desc: "Get the HTML contents of the first element in the set of matched elements.",
      url: "http://api.jquery.com/html/",
      w3: "http://www.w3schools.com/jquery/html_html.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_set",
      url3: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_get"
    }, {
      name: "text",
      desc: "Get the combined text contents of each element in the set of matched elements, including their descendants.",
      url: "http://api.jquery.com/text/",
      w3: "http://www.w3schools.com/jquery/html_text.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_text_set",
      url3: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_text_get"
    }]
  }, {
    orden: 9,
    name: "jQuery (2)",
    fills: [{
      name: "focus",
      desc: "Bind an event handler to the 'focus' JavaScript event, or trigger that event on an element.",
      url: "https://api.jquery.com/focus/",
      w3: "http://www.w3schools.com/jquery/event_focus.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_focus_ref",
      url3: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_focus_blur_trigger"
    }, {
      name: "blur",
      desc: " Bind an event handler to the 'blur' JavaScript event, or trigger that event on an element.",
      url: "https://api.jquery.com/blur/",
      w3: "http://www.w3schools.com/jquery/event_blur.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_blur_alert"
    }, {
      name: "focusout",
      desc: "Similar to blur. The focusout event is sent to an element when it, or any element inside of it, loses focus. This is distinct from the blur event in that it supports detecting the loss of focus from parent elements (in other words, it supports event bubbling).",
      url: "https://api.jquery.com/focusout/",
      w3: "http://www.w3schools.com/jquery/event_focusout.asp"
    }, {
      name: "val",
      desc: "Get the current value of the first element in the set of matched elements. Mostly used in form elements like input, select and textarea",
      url: "http://api.jquery.com/val/",
      w3: "http://www.w3schools.com/jquery/html_val.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_val"
    }, {
      name: "children",
      desc: "Get the children of each element in the set of matched elements, optionally filtered by a selector.",
      url: "http://api.jquery.com/children/",
      w3: "http://www.w3schools.com/jquery/traversing_children.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_children"
    }, {
      name: "slice",
      desc: "Reduce the set of matched elements to a subset specified by a range of indices.",
      url: "http://api.jquery.com/slice/",
      w3: "http://www.w3schools.com/jquery/traversing_slice.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_traversing_slice"
    }, {
      name: "first",
      desc: "Reduce the set of matched elements to the first in the set.",
      url: "http://api.jquery.com/first/",
      w3: "http://www.w3schools.com/jquery/traversing_first.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_first"
    }, {
      name: "last",
      desc: "Reduce the set of matched elements to the final one in the set.",
      url: "http://api.jquery.com/last/",
      w3: "http://www.w3schools.com/jquery/traversing_last.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_last"
    }, {
      name: "next",
      desc: "Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.",
      url: "http://api.jquery.com/next/",
      w3: "http://www.w3schools.com/jquery/traversing_next.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_next"
    }, {
      name: "nextAll",
      desc: "Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.",
      url: "http://api.jquery.com/nextAll/",
      w3: "http://www.w3schools.com/jquery/traversing_nextall.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_nextAll"
    }, {
      name: "prev",
      desc: "Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.",
      url: "http://api.jquery.com/prev/",
      w3: "http://www.w3schools.com/jquery/traversing_prev.asp2",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_traversing_prev"
    }, {
      name: "prevAll",
      desc: "Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.",
      url: "http://api.jquery.com/prevAll/",
      w3: "http://www.w3schools.com/jquery/traversing_prevAll.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_traversing_prevAll"
    }, {
      name: "parent",
      desc: "Get the parent of each element in the current set of matched elements, optionally filtered by a selector.",
      url: "http://api.jquery.com/parent/",
      w3: "http://www.w3schools.com/jquery/traversing_parent.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_traversing_parent"
    }, {
      name: "parents",
      desc: "Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.",
      url: "http://api.jquery.com/parents/",
      w3: "http://www.w3schools.com/jquery/traversing_parents.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_traversing_parents"
    }, {
      name: "siblings",
      desc: "Get the siblings of each element in the set of matched elements, optionally filtered by a selector.",
      url: "http://api.jquery.com/siblings/",
      w3: "http://www.w3schools.com/jquery/traversing_siblings.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_traversing_siblings"
    }, {
      name: "append",
      desc: "Insert content, specified by the parameter, to the end of each element in the set of matched elements.",
      url: "http://api.jquery.com/append/",
      w3: "http://www.w3schools.com/jquery/html_appendto.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_append"
    }, {
      name: "appendTo",
      desc: " Insert every element in the set of matched elements to the end of the target.",
      url: "http://api.jquery.com/appendto/",
      w3: "http://www.w3schools.com/jquery/html_appendto.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_appendto"
    }, {
      name: "prepend",
      desc: "Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.",
      url: "http://api.jquery.com/prepend/",
      w3: "http://www.w3schools.com/jquery/html_prepend.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_prepend"
    }, {
      name: "insertBefore",
      desc: "Insert every element in the set of matched elements before the target.",
      url: "http://api.jquery.com/insertbefore/",
      w3: "http://www.w3schools.com/jquery/html_insertbefore.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_insertbefore"
    }, {
      name: "after",
      desc: "Insert content, specified by the parameter, after each element in the set of matched elements.",
      url: "http://api.jquery.com/after/",
      w3: "http://www.w3schools.com/jquery/html_after.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_after"
    }, {
      name: "before",
      desc: "Insert content, specified by the parameter, before each element in the set of matched elements.",
      url: "http://api.jquery.com/before/",
      w3: "http://www.w3schools.com/jquery/html_before.asp",
      url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_before_ref"
    }]
  }, {
    orden: 10,
    name: "jQuery (3)",
    fills: [{
        name: "remove",
        desc: "Remove the set of matched elements from the DOM.",
        url: "http://api.jquery.com/remove/",
        w3: "http://www.w3schools.com/jquery/html_remove.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_remove",
        //  lasti: "lasti"
      }, {
        name: "clone",
        desc: "Create a deep copy of the set of matched elements.",
        url: "http://api.jquery.com/clone/",
        w3: "http://www.w3schools.com/jquery/html_clone.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_clone"
      }, {
        name: "end",
        desc: "End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.",
        url: "http://api.jquery.com/end/"
      }, {
        name: "on",
        desc: "Attach an event handler function for one or more events to the selected elements.",
        url: "http://api.jquery.com/on/",
        w3: "http://www.w3schools.com/jquery/event_on.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_on"
      }, {
        name: "attr",
        desc: "Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.",
        url: "http://api.jquery.com/attr/",
        w3: "http://www.w3schools.com/jquery/html_attr.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_attr_set",
        url3: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_attr_get"

      }, {
        name: "removeAttr",
        desc: "Remove an attribute from each element in the set of matched elements.",
        url: "http://api.jquery.com/removeAttr/",
        w3: "http://www.w3schools.com/jquery/html_removeattr.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_removeattr"
      }, {
        name: "css",
        desc: "Get the value of a style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.",
        url: "http://api.jquery.com/css/",
        w3: "http://www.w3schools.com/jquery/jquery_css.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_getcolor",
        url3: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_setcolor"
      }, {
        name: "hasClass",
        desc: "Determine whether any of the matched elements are assigned the given class.",
        url: "http://api.jquery.com/hasClass/",
        w3: "http://www.w3schools.com/jquery/html_hasclass.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_hasclass"
      }, {
        name: "addClass",
        desc: "Adds the specified class(es) to each of the set of matched elements.",
        url: "http://api.jquery.com/addClass/",
        w3: "http://www.w3schools.com/jquery/html_addclass.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_addclass"
      }, {
        name: "removeClass",
        desc: "Remove a single class, multiple classes, or all classes from each element in the set of matched elements.",
        url: "http://api.jquery.com/removeClass/",
        w3: "http://www.w3schools.com/jquery/html_removeclass.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_removeclass"
      }, {
        name: "toggleClass",
        desc: "Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.",
        url: "http://api.jquery.com/toggleClass/",
        w3: "http://www.w3schools.com/jquery/html_toggleclass.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_toggleclass"
      }, {
        name: "animate",
        desc: "Perform a custom animation of a set of CSS properties.",
        url: "http://api.jquery.com/animate/",
        w3: "http://www.w3schools.com/jquery/jquery_animate.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animate",
        url3: "http://viralpatel.net/blogs/understanding-jquery-animate-function/"
      }, {
        name: "stop",
        desc: "Stop the currently-running animation on the matched elements.",
        url: "https://api.jquery.com/stop/",
        w3: "http://www.w3schools.com/jquery/jquery_stop.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_stop"
      },

      {
        name: "each",
        desc: "Iterate over a jQuery object, executing a function for each matched element. ",
        url: "http://api.jquery.com/each/",
        w3: "http://www.w3schools.com/jquery/misc_each.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_misc_each"
      }, {
        name: "$.each",
        desc: "A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.",
        url: "http://api.jquery.com/jQuery.each/"
      }, {
        name: "scrollTop",
        desc: "Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.",
        url: "https://api.jquery.com/scrollTop/",
        w3: "http://www.w3schools.com/jquery/css_scrolltop.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_scrolltop_get",
        url3: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_scrolltop_set",
      }, {
        name: "offset",
        desc: "",
        url: "http://api.jquery.com/offset/",
        w3: "http://www.w3schools.com/jquery/css_offset.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_offset",

      }, {
        name: "bind",
        desc: "Attach a handler to an event for the elements.",
        url: "http://api.jquery.com/bind/",
        w3: "http://www.w3schools.com/jquery/event_bind.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_bind_ref",

      }, {
        name: "unbind",
        desc: "remove a previously-attached event handler from the elements.",
        url: "http://api.jquery.com/unbind/",
        w3: "http://www.w3schools.com/jquery/event_unbind.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_unbind",

      }, {
        name: "resize",
        desc: "Bind an event handler to the 'resize' JavaScript event, or trigger that event on an element.",
        url: "http://api.jquery.com/resize/",
        w3: "http://www.w3schools.com/jquery/event_resize.asp",
        url2: "http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_resize",
      }, {
        name: "Traversing examples (1)",
        url: "http://learn.jquery.com/using-jquery-core/traversing/"
      }, {
        name: "Traversing examples (2)",
        url: "http://jqfundamentals.com/chapter/traversing-manipulating"
      }, {
        name: "Traversing tricks",
        url: "http://code.tutsplus.com/tutorials/10-really-helpful-traversing-functions-in-jquery--net-6619"
      }
    ]
  }, {
    name: "AJAX",
    orden: 13,
    fills: [{
        name: "AJAX",
        desc: "Ajax (short for Asynchronous JavaScript and XML) is a set of web development techniques utilizing many web technologies used on the client-side to create asynchronous Web applications.",
        url: "https://developer.mozilla.org/en-US/docs/AJAX"
      }, {
        name: "AJAX w3",
        desc: "w3schools tutorial",
        url: "http://www.w3schools.com/ajax/default.asp"
      }, {
        name: "ex. get text",
        desc: "get text from file",
        url: "ajax/ajax_00_get_Text/index.html"
      }, {
        name: "ex. php get x products",
        desc: "ex. php get x products",
        url: "ajax/ajax_00_get_TextPhp/index.html"
      }, {
        name: "ex 00. get hint",
        desc: "get hint from a php file",
        url: "ajax/ajax_00_php-getHint/index.html"
      }, {
        name: "jquery ajax Key Concepts",
        desc: "Proper use of Ajax-related jQuery methods requires understanding some key concepts first.",
        url: "https://learn.jquery.com/ajax/key-concepts/"
      }, {
        name: "jquery ajax methods",
        desc: "While jQuery does offer many Ajax-related convenience methods, the core $.ajax() method is at the heart of all of them, and understanding it is imperative. We'll review it first, and then touch briefly on the convenience methods.",
        url: "https://learn.jquery.com/ajax/jquery-ajax-methods/"
      }, {
        name: "jquery ajax and forms",
        desc: "jQuery's ajax capabilities can be especially useful when dealing with forms",
        url: "https://learn.jquery.com/ajax/ajax-and-forms"
      }, {
        name: "jquery ajax method",
        desc: "jQuery's ajax capabilities can be especially useful when dealing with forms",
        url: "http://api.jquery.com/jquery.ajax/"
      }, {
        name: "jquery ajax load method",
        desc: "Load data from the server and place the returned HTML into the matched element.",
        url: "http://api.jquery.com/jQuery.get/"
      }, {
        name: "jquery.get ajax method",
        desc: "Load data from the server using a HTTP GET request.",
        url: "http://api.jquery.com/jQuery.get/"
      }, {
        name: "jquery.post ajax method",
        desc: "Load data from the server using a HTTP POST request.",
        url: "http://api.jquery.com/jQuery.post/"
      }, {
        name: "jQuery ajax example",
        desc: "jQuery ajax example 01",
        url: "ajax/ajax_jq_01"
      }, {
        name: "jQuery ajax ex. using json",
        desc: "jQuery ajax example 02 using json",
        url: "ajax/ajax_jq_02_json"
      }
      /*,{
            name: "ex 01. get html",
            desc: "get html code from file",
            url: "ajax/ajax_01_html_into/index.html"
          },{
            name: "ex 02. save json file",
            desc: "get hint from a php file",
            url: "ajax/ajax_02_save_json_file_in_your_server/index.html"
          },{
            name: "ex 03. get json file",
            desc: "get hint from a php file",
            url: "ajax/ajax_03_get_JSON_from_server/index.html"
          },{
            name: "ex 04. get text from server",
            desc: "get hint from a php file",
            url: "ajax/ajax_04_get_text_from_server/index.html"
          },{
            name: "ex 05. get data from database (1)",
            desc: "get hint from a php file",
            url: "ajax/ajax_05_get_data_from_server-bbdd/index.html"
          },{
            name: "ex 06. get data from database (2)",
            desc: "get hint from a php file",
            url: "ajax/ajax_06_get_data_from_server-bbdd/index.html"
          },{
            name: "ex 07. example of flickr api",
            desc: "get hint from a php file",
            url: "ajax/ajax_07_flickr_api/index.html"
          },{
            name: "ex 08. flickr api (2)",
            desc: "get hint from a php file",
            url: "ajax/ajax_08_flickr_api_2/index.html"
          },{
            name: "ex 09. using jsonp (CORS)",
            desc: "get hint from a php file",
            url: "ajax/jsonp/index.html"
          }*/
    ]
  }, {
    name: "Canvas",
    orden: 14,
    fills: [{
      name: "Canvas tutorial 1",
      desc: "HTML5 Canvas tutorial",
      url: "http://www.html5canvastutorials.com/tutorials/html5-canvas-element/"
    }, {
      name: "Canvas tutorial 2",
      desc: "HTML5 Canvas mozilla",
      url: "https://developer.mozilla.org/es/docs/Web/Guide/HTML/Canvas_tutorial"

    }, {
      name: "Canvas tutorial 3",
      desc: "HTML5 Canvas w3schools",
      url: "http://www.w3schools.com/tags/ref_canvas.asp"

    }, {
      name: "Canvas slides 1",
      desc: "HTML5 Canvas slides",
      url: "canvas/pres/Canvas"
    }, {
      name: "Canvas slides 2",
      desc: "HTML5 Canvas slides",
      url: "canvas/pres/Canvas2"
    }, {
      name: "Canvas first Anim",
      desc: "canvas first anim",
      url: "canvas/animate_tut.html"
    }, {
      name: "Canvas first Anim2",
      desc: "canvas first Anim2",
      url: "canvas/animate_tut_2.html"
    }, {
      name: "bubbles (with chrome please)",
      desc: "a bubbles on move",
      url: "canvas/01_bubble.html"
    }, {
      name: "phaser documentation",
      url: "http://phaser.io/docs/2.4.4/index"
    }, {
      name: "another phaser tutorial, mobile",
      url: "http://html5hub.com/how-to-make-a-mobile-virtual-pet-game-with-html5-and-cordova/"
    }, {
      name: "get the code",
      url: "https://zenva.com/file/en/virtual-pet-cordova.zip"
    }, {
      name: "another game tutorial",
      url: "http://html5hub.com/how-to-make-a-sidescroller-game-with-html5/"
    }]
  }, {
    name: "Node, Grunt, Bower, Yeoman",
    orden: 20,
    fills: [{
      name: "nodeJS",
      desc: "Node.jsÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.",
      url: "https://nodejs.org/"
    }, {
      name: "npmJS",
      desc: "npm is the package manager for...",
      url: "https://www.npmjs.com/"
    }, {
      name: "Grunt",
      desc: "Grunt, The JavaScript Task Runner",
      url: "http://gruntjs.com/getting-started"
    }, {
      name: "Bower",
      desc: "Web sites are made of lots of things ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.",
      url: "http://bower.io/"
    }, {
      name: "Yeoman",
      desc: "The web's scaffolding tool for modern webapps",
      url: "http://yeoman.io/"
    }, {
      name: "Gettings started with Grunt and Sass",
      desc: "Gettings started with Grunt and Sass",
      url: "http://ryanchristiani.com/getting-started-with-grunt-and-sass/"
    }, {
      name: "Node, Grunt, Bower and Yeoman",
      desc: "Node, Grunt, Bower and Yeoman, a modern web dev's Toolkit",
      url: "http://juristr.com/blog/2014/08/node-grunt-yeoman-bower/"
    }]
  }, {
    orden: 21,
    name: "AngularJS",
    fills: [{
      name: "Angular JS site",
      url: "https://angularjs.org/"
    }, {
      name: "Angular2 JS site",
      url: "https://angular.io/"
    }, {
      name: "AngularJS tutorial",
      desc: "AngularJS codeschool tutorial, sponsored by Google",
      url: "http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro"
    }, {
      name: "AngularJS Gems base(zip)",
      desc: "AngularJS gems",
      url: "gems_base.zip"
    }, {
      name: "AngularJS Gems",
      desc: "AngularJS gems",
      url: "http://37.187.2.239:81/dwec/angular"
    }, {
      name: "AngularJS sillas",
      desc: "AngularJS sillas",
      url: "http://37.187.2.239:81/dwec/angular/index_sillas.html"
    }, {
      name: "AngularJS Gems (without own Directives)",
      desc: "AngularJS Gems (no own directives)",
      url: "http://37.187.2.239:81/dwec/angular/gems_noDirectives.zip",
      url2: "http://37.187.2.239:81/dwec/angular/gems_noDirectives"
    }, {
      name: "AngularJS Gems (without Routing)",
      desc: "AngularJS Gems (no routing)",
      url: "http://37.187.2.239:81/dwec/angular/gems_noRouting.zip",
      url2:"http://37.187.2.239:81/dwec/angular/gems_noRouting"
    }, {
      name: "AngularJS Gems (with Routing)",
      desc: "AngularJS Gems (routing)",
      url: "http://37.187.2.239:81/dwec/angular/gems_Routing.zip",
      url2: "http://37.187.2.239:81/dwec/angular/gems_Routing"
    }, {
      name: "other interesting tutorials"
    }, {
      name: "Kickstart your AngJS Dev",
      desc: "Kickstart Your AngularJS Development with Yeoman, Grunt and Bower",
      url: "http://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/"
    }, {
      name: "Your first AngJS App (1)",
      desc: "A Step-by-Step Tutorial for Your First AngularJS App",
      url: "http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app",
    }, {
      name: "Your first AngJS App (2)",
      desc: "A Step-by-Step Tutorial for Your First AngularJS App",
      url: "http://www.toptal.com/angular-js/your-first-angularjs-app-part-2-scaffolding-building-and-testing",
    }]
  }, {
    orden: 21,
    name: "Other",
    fills: [{
      name: "JSON editor",
      desc: "Javascript Object Notation editor",
      url: "http://www.jsoneditoronline.org/",
      seen: "seen"
    }, {
      name: "for..in",
      desc: "The for...in statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in",
      seen: "seen"
    }, {
      name: "iterating over arrays and objects",
      desc: "jQuery provides an object iterator utility called $.each() as well as a jQuery collection iterator: .each(). These are not interchangeable.",
      url: "https://learn.jquery.com/using-jquery-core/iterating/",
      url2: "http://www.hongkiat.com/blog/animatecss-css3-animation-library/",
      seen: "seen"
    }, {
      name: "animate CSS",
      desc: "Powerfull classes to create animations, just-add-water CSS animations",
      url: "https://daneden.github.io/animate.css/"
    }, {
      name: "WOW.js CSS",
      desc: " Reveal Animations When You Scroll. Very Animate.css Friend :-) Easily customize animation settings: style, delay, length, offset, iterations... ",
      url: "http://mynameismatthieu.com/WOW/"
    }, {
      name: "w3schools bootstrap tutorial",
      desc: "Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites. Bootstrap is completely free to download and use!",
      url: "http://www.w3schools.com/bootstrap/default.asp",
      seen: "seen"
    }, {
      name: "JS concepts to master",
      desc: "JavaScript Concepts JavaScript Professionals Must Know Well",
      url: "http://javascriptissexy.com/16-javascript-concepts-you-must-know-well/"
    }, {
      name: "OO JS Patterns (a)",
      url: "http://www.samselikoff.com/blog/some-Javascript-constructor-patterns/"
    }, {
      name: "OO JS Patterns (b)",
      url: "https://john-dugan.com/object-oriented-javascript-pattern-comparison/"
    }, {
      name: "Emmet in use",
      url: "emmet_example.html",
      seen: "seen"
    }, {
      name: "selecting colours",
      url: "http://paletton.com"
    }, {
      name: "bootstrapTemplate",
      url: "bootstrap_template.html",
      seen: "seen"
    }, {
      name: "event.preventDefault()",
      url: "http://api.jquery.com/event.preventdefault/",
      url2: "https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault",
      seen: "seen"
    }, {
      name: "multiple keypress",
      desc: "document.body.onkeydown = document.body.onkeyup = function(e){var e = e || event; key[e.keyCode] = e.type == 'keydown';}; ",
      url: "http://jsfiddle.net/B1KMusic/U5L2X/embedded/result%2Cjs/"
    },{
      name: "GoogleMaps1",
      desc: "an extra with google maps",
      url: "http://37.187.2.239:81/dwec/angular/maps1.html",
    }, {
      name: "GoogleMaps2",
      desc: "an extra with google maps",
      url: "http://37.187.2.239:81/dwec/angular/maps2.html",
    }]
  }, {
    orden: 24,
    name: "Links and references",
    fills: [{
      name: "AngularJS & AngularJS2.0",
      desc: "",
      url: "https://angularjs.org/",
      url2: "https://angularjs.org/",
      url3: "https://angular.io/"
    }, {
      name: "Aurelia",
      desc: "",
      url: "http://aurelia.io/"
    }, {
      name: "YUI library",
      desc: "",
      url: "http://yuilibrary.com/"
    }, {
      name: "ReactJS",
      desc: "",
      url: "http://facebook.github.io/react/"
    }, {
      name: "Polymer",
      desc: "",
      url: "https://www.polymer-project.org/"
    }, {
      name: "EmberJS",
      desc: "",
      url: "http://emberjs.com/"
    }, {
      name: "Top js template engines",
      desc: "(older post), from 2013, but good",
      url: "http://www.creativebloq.com/web-design/templating-engines-9134396"
    }, {
      name: "JS template chooser",
      desc: "This tool is not being updated, it depends too often on the framework",
      url: "https://garann.github.io/template-chooser/"
    }, {
      name: "MEAN JS",
      desc: "MEAN.JS is a full-stack JavaScript solution that helps you build fast, robust, and maintainable production web applications using MongoDB, Express, AngularJS, and Node.js. ",
      url: "http://meanjs.org/"
    }, {
      name: "nodejS",
      desc: "Node.jsÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.",
      url: "https://nodejs.org/en/",
      url2: "http://www.nodebeginner.org/"
    }, {
      name: "meteor",
      desc: "",
      url: "https://www.meteor.com/",
      url2: "http://es.discovermeteor.com/",
      url3: "http://discovermeteor.com/",
      url4: "http://javascriptissexy.com/learn-meteor-js-properly/"
    }, {
      name: "javascriptissexy",
      url: "http://javascriptissexy.com/"
    }, {
      name: "book1",
      url: "http://www.amazon.com/gp/product/1118026691/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1118026691&linkCode=as2&tag=interhaptic-20"
    }, {
      name: "book2",
      url: "http://www.amazon.com/gp/product/0596805527/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0596805527&linkCode=as2&tag=interhaptic-20"
    }, {
      name: "programming books",
      url: "ftp://91.193.236.10/pub/docs/linux-support/programming/"
    }, {
      name: "html5 game development",
      url: "http://www.html5gamedevelopment.com/"
    }, {
      name: "html5 game development engines",
      url: "https://html5gameengine.com/"
    }, {
      name: "js charts libraries 1",
      url: "http://www.sitepoint.com/15-best-javascript-charting-libraries/"
    }, {
      name: "js charts libraries 2",
      url: "http://thenextweb.com/dd/2015/06/12/20-best-javascript-chart-libraries/"
    }]
  }];
})();


/*

b = a.map(function (el) {
  console.log({
    name: el.name.trim(),
    desc: el.desc,
    url: el.url.trim()
  });
});
b = a.map(function (el) {
  var ob = {};
  ob.name = el.name.trim();
  ob.desc = el.desc.trim();
  ob.url = el.url.trim();
  return ob;
});
*/
