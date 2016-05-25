/*global document, alert */

// Create a new anonymous function, to use as a wrapper
(function () {
    // Defines that JavaScript code should be executed in "strict mode".
    // http://www.w3schools.com/js/js_strict.asp
    'use strict';

    //declare the variables
    var i,
        b = document.getElementsByTagName("td"),
        los_td = document.getElementsByTagName("td"),
        textNode;

    function func() {
        return function () {
            var elTDclickeado = this,
                a = document.createElement("input"),
                b = document.createElement("button");
            b.innerHTML = "Change";
            document.body.appendChild(a);
            document.body.appendChild(b);
            b.onclick = function () {
                elTDclickeado.innerHTML = a.value;
                a.parentNode.removeChild(a);
                b.parentNode.removeChild(b);
                //alert(a.value + " " + this.innerHTML);
            };
        };
    }

    //when you click on a td element the innerHTML will be shown
    for (i = 0; i < b.length; i = i + 1) {
        b[i].onclick = func();
    }

    //show the table names
    for (i = 0; i < los_td.length; i = i + 1) {
        if (i % 2 === 0) {
            textNode = document.createTextNode(los_td[i].innerHTML + " ");
            document.body.appendChild(textNode);
            /*                 for (var j = 0; j < los_td.length; j++) {
                     console.log(los_td[j].innerHTML);
                 }
                 console.log("\n");
*/
        }
    }
}());