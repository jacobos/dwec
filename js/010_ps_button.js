/*global document */

(function () {
    'use strict';

    function createPes(elementType, amount, theClass, appendWhere) {
        var i,
            ps,
            text;

        for (i = 0; i < amount; i = i + 1) {

            ps = document.createElement(elementType);
            ps.setAttribute("class", theClass);
            text = document.createTextNode("elemento " + elementType + " " + i);
            ps.appendChild(text);

            appendWhere.appendChild(ps);
        }
    }

    function changeColorTo(theClass, classAtt, prop) {
        var but = document.createElement("button"),
            text;
        document.body.appendChild(but);
        text = document.createTextNode("boton: " + theClass);
        but.appendChild(text);

        but.onclick = function () {
            var pes = document.getElementsByClassName(theClass),
                j;
            for (j = 0; j < pes.length; j = j + 1) {
                pes[j].style[classAtt] = prop;
            }
        };
    }

    changeColorTo("pes1", "background", "blue");
    changeColorTo("pes2", "color", "blue");
    changeColorTo("pes3", "color", "green");
    changeColorTo("pes4", "color", "red");
    
    createPes("p", 8, "pes1", document.body);
    createPes("div", 4, "pes2", document.body);
    createPes("p", 2, "pes3", document.body);
    createPes("p", 3, "pes4", document.body);

    
    




})();