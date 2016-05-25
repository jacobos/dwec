/*global document, window */

(function () {
    'use strict';
    var input = document.createElement("input");
    input.setAttribute("style", "position: absolute; top: 40%; left: 0%; padding: 10px;");
    input.setAttribute("type", "button");
    input.setAttribute("value", "View Source");
    input.onclick = function () {
        window.location = "view-source:" + window.location.href;
    };
    document.body.insertBefore(input, document.body.firstChild);
}());