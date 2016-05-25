/*global document*/
(function () {
    'use strict';
    var myDiv,
        i,
        valor;
    for (i = 0; i < 20; i = i + 1) {
        myDiv = document.createElement("div");
        myDiv.setAttribute("class", "divis");
        valor = "top: " + i * 20 + "px; left: " + i * 20 + "px";
        myDiv.setAttribute("style", valor);
        document.getElementById("bigDiv").appendChild(myDiv);
    }
}());