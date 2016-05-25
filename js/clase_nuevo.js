(function () {
  var app = angular.module('clase', []);
  app.controller('dwecClassController', function ($scope) {
    $scope.elements = elementArray;
  });

  var elementArray = [
    {
      name: "document functions",
      fills: [
        {
          name: "document.getElementById(string)",
          desc: "Get the element with the specified ID",
          url: "http://www.w3schools.com/jsref/met_document_getelementbyid.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementbyid"
        },
        {
          name: "document.createTextNode(string)",
          desc: "The createElement() method creates an Element Node with the specified name",
          url: "http://www.w3schools.com/jsref/met_document_createtextnode.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createtextnode"
        },
        {
          name: "document.createElement(string)",
          desc: "The createElement() method creates an Element Node with the specified name (div, button, span...)",
          url: "http://www.w3schools.com/jsref/met_document_createelement.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2"
        },
        {
          name: "document.getElementsByClassName(string)",
          desc: "Get all elements with the specified class name",
          url: "http://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbyclassname"
        },
        {
          name: "document.getElementsByTagName(string)",
          desc: "Get all elements with the specified tag name",
          url: "http://www.w3schools.com/jsref/met_document_getelementsbytagname.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname"
        },
        {
          name: "document.querySelector(string)",
          desc: "Get the first element in the document with the given css selector",
          url: "http://www.w3schools.com/jsref/met_document_queryselector.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector_class"
        },
        {
          name: "document.querySelectorAll(string)",
          desc: "Get all the elements in the document with the given css selector",
          url: "http://www.w3schools.com/jsref/met_document_queryselectorall.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselectorall_class"
        },
        {
          name: "you can use the last four on elements too!!",
        },
        {
          name: "more here!!",
          url: "http://www.w3schools.com/jsref/dom_obj_document.asp"
        }
      ]
    }, {
      name: "element functions and properties",
      fills: [
        {
          name: "element.setAttribute(attr, str)",
          desc: "Sets the given attribute 'attr' the value of the string 'str'",
          url: "http://www.w3schools.com/jsref/met_element_setattribute.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1"
        },
        {
          name: "element.getAttribute(attr)",
          desc: "Get the value of the 'attr' attribute from elem",
          url: "http://www.w3schools.com/jsref/met_element_getattribute.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_getattribute1"
        },
        {
          name: "elem.appendChild(childElem)",
          desc: "Adds a new child node, to an element, as the last child node",
          url: "http://www.w3schools.com/jsref/met_node_appendchild.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild"
        },
        {
          name: "element.children",
          desc: "Returns a collection of an element's child element (excluding text and comment nodes)",
          url: "http://www.w3schools.com/jsref/prop_element_children.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_children"
        },
        {
          name: "element.childNodes",
          desc: "Returns a collection of an element's child nodes (including text and comment nodes)",
          url: "http://www.w3schools.com/jsref/prop_node_childnodes.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_childnodes"
        },
        {
          name: "element.cloneNode(true)",
          desc: "The cloneNode() method creates a copy of a node, and returns the clone. The cloneNode() method clones all attributes and their values.",
          url: "http://www.w3schools.com/jsref/met_node_clonenode.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_clonenode"
        },
        {
          name: "element.parentNode",
          desc: "Returns the parent node of an element",
          url: "http://www.w3schools.com/jsref/prop_node_parentnode.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_parentnode"
        },
        {
          name: "element.removeChild(childN)",
          desc: "Removes a child node ('childN') from an element",
          url: "http://www.w3schools.com/jsref/met_node_removechild.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_removechild"
        },
        {
          name: "element.firstChild",
          desc: "Returns the first child node of an element",
          url: "http://www.w3schools.com/jsref/prop_node_firstchild.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_firstchild"
        },
        {
          name: "element.lastChild",
          desc: "Returns the last child node of an element",
          url: "http://www.w3schools.com/jsref/prop_node_lastchild.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_lastchild"
        },
        {
          name: "element.nextSibling",
          desc: "Returns the next node at the same node tree level",
          url: "http://www.w3schools.com/jsref/prop_node_nextsibling.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_nextsibling"
        },
        {
          name: "element.previousSibling",
          desc: "Returns the previous node at the same node tree level",
          url: "http://www.w3schools.com/jsref/prop_node_previoussibling.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_previoussibling"
        },
        {
          name: "element.innerHTML",
          desc: "Sets or gets the inner HTML of an element",
          url: "http://www.w3schools.com/jsref/prop_html_innerhtml.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml"
        },
        {
          name: "more here!!",
          url: "http://www.w3schools.com/jsref/dom_obj_all.asp"
        }
      ]
    },
    {
      name: "Events",
      fills: [
        {
          name: "onclick",
          desc: "",
          url: "http://www.w3schools.com/jsref/event_onclick.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_addeventlistener"
        },
        {
          name: "ondblckick",
          desc: "",
          url: "http://www.w3schools.com/jsref/event_ondblclick.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick_addeventlistener"
        },
        {
          name: "onmousedown",
          desc: "",
          url: "http://www.w3schools.com/jsref/event_onmousedown.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousedown_addeventlistener"
        },
        {
          name: "onmouseover",
          desc: "",
          url: "http://www.w3schools.com/jsref/event_onmouseover.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener"
        },
        {
          name: "onmouseup",
          desc: "",
          url: "http://www.w3schools.com/jsref/event_onmouseup.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmousedown_addeventlistener"
        },
        {
          name: "onmouseout",
          desc: "",
          url: "http://www.w3schools.com/jsref/event_onmouseout.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_addeventlistener"
        },
        {
          name: "onkeydown",
          desc: "",
          url: "http://www.w3schools.com/jsref/event_onkeydown.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeydown_addeventlistener"
        },
        {
          name: "onkeypress",
          desc: "The KeyPress event is not raised by noncharacter keys; however, the noncharacter keys do raise the KeyDown and KeyUp events.",
          url: "http://www.w3schools.com/jsref/event_onkeypress.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeypress_addeventlistener"
        },
        {
          name: "onkeyup",
          desc: "",
          url: "http://www.w3schools.com/jsref/event_onkeyup.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onkeyup_addeventlistener"
        },
        {
          name: "onscroll",
          desc: "Execute a JavaScript when an element is being scrolled",
          url: "http://www.w3schools.com/jsref/event_onscroll.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll_addeventlistener"
        },
        {
          name: "onsubmit",
          desc: "Execute a JavaScript when a form is submitted",
          url: "http://www.w3schools.com/jsref/event_onsubmit.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onsubmit_addeventlistener"
        },
        {
          name: "onpaste",
          desc: "Execute a JavaScript when pasting some text on an alement",
          url: "http://www.w3schools.com/jsref/event_onpaste.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onpaste_addeventlistener"
        },
        {
          name: "onload",
          desc: "Execute a JavaScript immediately after a page has been loaded",
          url: "http://www.w3schools.com/jsref/event_onload.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onload_addeventlistener"
        },
        {
          name: "more here!!",
          url: "http://www.w3schools.com/jsref/dom_obj_event.asp"
        }
      ]
    },
    {
      name: "String methods and props.",
      fills: [
        {
          name: "charAt(0)",
          desc: "returns the character at the given position",
          url: "http://www.w3schools.com/jsref/jsref_charat.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_charat"
        },
        {
          name: "indexOf(x)",
          desc: "Returns the position of the first found occurrence of a specified value in a string",
          url: "http://www.w3schools.com/jsref/jsref_indexof.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_indexof"
        },
        {
          name: "slice(x,y)",
          desc: "Extracts a part of a string and returns a new string",
          url: "http://www.w3schools.com/jsref/jsref_slice_string.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_slice"
        },
        {
          name: "split(x)",
          desc: "Splits a string into an array of substrings",
          url: "http://www.w3schools.com/jsref/jsref_split.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_split"
        },
        {
          name: "substr(x, y)",
          desc: "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character",
          url: "http://www.w3schools.com/jsref/jsref_substr.asp"
        },
        {
          name: "substring(x, y)",
          desc: "Extracts the characters from a string, between two specified indices",
          url: "http://www.w3schools.com/jsref/jsref_substring.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_substring"
        },
        {
          name: "toLowerCase()",
          desc: "Converts a string to lowercase letters",
          url: "http://www.w3schools.com/jsref/jsref_tolowercase.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolowercase"
        },
        {
          name: "toUpperCase()",
          desc: "Converts a string to uppercase letters",
          url: "http://www.w3schools.com/jsref/jsref_touppercase.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_touppercase"
        },
        {
          name: "trim()",
          desc: "Removes whitespace from both ends of a string",
          url: "http://www.w3schools.com/jsref/jsref_trim_string.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_trim"
        },
        {
          name: "more here!",
          url: "http://www.w3schools.com/jsref/jsref_obj_string.asp"
        }
      ]
    },
    {
      name: "Array methods and props.",
      fills: [
        {
          name: "concat()",
          desc: "Joins two or more arrays, and returns a copy of the joined arrays",
          url: "http://www.w3schools.com/jsref/jsref_concat_array.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_concat"
        },
        {
          name: "indexOf()",
          desc: "Search the array for an element and returns its position",
          url: "http://www.w3schools.com/jsref/jsref_indexof_array.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_indexof_array"
        },
        {
          name: "join()",
          desc: "Joins all elements of an array into a string",
          url: "http://www.w3schools.com/jsref/jsref_join.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_join"
        },
        {
          name: "pop()",
          desc: "Removes the last element of an array, and returns that element",
          url: "http://www.w3schools.com/jsref/jsref_pop.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pop"
        },
        {
          name: "push()",
          desc: "Adds new elements to the end of an array, and returns the new length",
          url: "http://www.w3schools.com/jsref/jsref_push.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_push"
        },
        {
          name: "reverse()",
          desc: "Reverses the order of the elements in an array",
          url: "http://www.w3schools.com/jsref/jsref_reverse.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reverse",
        },
        {
          name: "slice()",
          desc: "Selects a part of an array, and returns the new array",
          url: "http://www.w3schools.com/jsref/jsref_slice_array.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_slice_array",
        },
        {
          name: "sort()",
          desc: "Sorts the elements of an array",
          url: "http://www.w3schools.com/jsref/jsref_sort.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_sort"
        },
        {
          name: "sort(funct)",
          desc: "sort in ascending order",
          url: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_sort2",
          url2: "http://www.w3schools.com/jsref/jsref_sort.asp"
        },
        {
          name: "sort randomly",
          desc: "how to randomly sort an array, shuffle",
          url: "shuffle.html",
          url2: "shuffle.html"
        },
        {
          name: "unshift()",
          desc: "Adds new elements to the beginning of an array, and returns the new length",
          url: "http://www.w3schools.com/jsref/jsref_unshift.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_unshift"
        },
        {
          name: "more here!",
          url: "http://www.w3schools.com/jsref/jsref_obj_array.asp"
        }
      ]
    },
    {
      name: "Other methods",
      fills: [
/*
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        },
*/
        {
          name: "console.log(data)",
          desc: "Display data on your browser console, with F12 you'll see it",
          url: "http://www.w3schools.com/js/tryit.asp?filename=tryjs_output_console",
          url2: "http://www.w3schools.com/js/tryit.asp?filename=tryjs_output_console"
        },
        {
          name: "alert(string)",
          desc: "The alert() method displays an alert box with a specified message and an OK button.",
          url: "http://www.w3schools.com/jsref/met_win_alert.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_alert"
        },
        {
          name: "scrollTo()",
          desc: "The scrollTo() method scrolls the document to the specified coordinates.",
          url: "http://www.w3schools.com/jsref/met_win_scrollto.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollto"
        },
        {
          name: "scrollBy()",
          desc: "The scrollBy() method scrolls the document by the specified number of pixels.",
          url: "http://www.w3schools.com/jsref/met_win_scrollby.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollby"
        },
        {
          name: "prompt(text,defaultText)",
          desc: "The prompt() method displays a dialog box that prompts the visitor for input.",
          url: "http://www.w3schools.com/jsref/met_win_prompt.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt"
        },
        {
          name: "setTimeOut(function(){}, time)",
          desc: "The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.",
          url: "http://www.w3schools.com/jsref/met_win_settimeout.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout"
        },
        {
          name: "clearTimeOut(functionName)",
          desc: "The clearTimeout() method clears a timer set with the setTimeout() method.",
          url: "http://www.w3schools.com/jsref/met_win_cleartimeout.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_cleartimeout"
        },
        {
          name: "setInterval(function(){}, time)",
          desc: "The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).",
          url: "http://www.w3schools.com/jsref/met_win_setinterval.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval"
        },
        {
          name: "clearInterval(functionName)",
          desc: "The clearInterval() method clears a timer set with the setInterval() method.",
          url: "http://www.w3schools.com/jsref/met_win_clearinterval.asp",
          url2: "http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_clearinterval"
        }
      ]
    },
    {
      name: "Class examples",
      fills: [
        {
          name: "Change innerHTML and JS in html",
          desc: "Change the HTML",
          url: "001_changeInnerHTML.html"
        },
        {
          name: "Swap elements",
          desc: "Swap the content of two elements, the onnerHTML",
          url: "002_swapElements.html"
        },
        {
          name: "Change CSS",
          desc: "Swap the css file with another one",
          url: "003_changeCSS.html"
        },
        {
          name: "Swap pictures",
          desc: "Swap the content of two elements, the styles",
          url: "004_pictureSwitch.html"
        },
        {
          name: "childNodes and children",
          desc: "differences between childNodes and children",
          url: "005_childNodes_children.html"
        },
        {
          name: "rotate divs",
          desc: "Rotate a group of divs dynamycally created",
          url: "006_moving.html"
        },
        {
          name: "create and hide images",
          desc: "create and hide images",
          url: "007_createAndHideImages.html"
        },
        {
          name: "Sort randomly",
          desc: "how to randomly sort an array, shuffle",
          url: "007_shuffle.html"
        },
        {
          name: "Pointer position",
          desc: "a mouse pointer",
          url: "008_pointer_position.html"
          
        },
        {
          name: "Puzzle",
          desc: "a puzzle game",
          url: "009_puzzle.html"
          
        }
      ]
    },
    {
      name: "jQuery (1)",
      fills: [
        {
          name: "jQuery selectors (w3sc)",
          desc: "Borrowing from CSS 1â€“3, and then adding its own, jQuery offers a powerful set of tools for matching a set of elements in a document.",
          url: "http://www.w3schools.com/jquery/jquery_ref_selectors.asp",
          url2: "http://www.w3schools.com/jquery/trysel.asp"
        },
        {
          name: "jQuery selectors (api)",
          desc: "Borrowing from CSS 1â€“3, and then adding its own, jQuery offers a powerful set of tools for matching a set of elements in a document.",
          url: "https://api.jquery.com/category/selectors/",
          url2: ""
        },
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        },
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        },
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        },
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        },
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        },
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        },
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        },
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        },
      ]
    },
    {
      name: "jQuery (2)",
      fills: [
        {
          name: "",
          desc: "",
          url: "",
          url2: ""
        }
      ]
    },
    {
      name: "Advanced",
      fills: [
        {
          name: "this, advanced",
          desc: "Knowing this, advanced",
          url: "http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/"

        }
      ]
    }
  ];
})();