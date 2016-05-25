/*global document */

(function () {
    'use strict';

    var i,
        div;

    for (i = 0; i < 50; i = i + 1) {
        div = document.createElement("div");
        div.setAttribute("class", "cube");
        document.body.appendChild(div);
        if (i % 3 === 0) {
            div.setAttribute("style", "background-color: red");
        } else if (i % 3 === 1) {
            div.setAttribute("style", "background-color: blue");
        } else {
            div.setAttribute("style", "background-color: green");
        }

        div.onmouseover = function () {
            this.setAttribute("style", this.getAttribute("style") + "; background-color:yellow");
        };

        div.onclick = function () {
            var j,
                ar_elem = document.getElementsByClassName("cube"),
                aux = ar_elem[0].getAttribute("style");
            for (j = 0; j < ar_elem.length; j = j + 1) {
                if (j === ar_elem.length - 1) {
                    ar_elem[j].setAttribute("style", aux);
                } else {
                    ar_elem[j].setAttribute("style", ar_elem[j + 1].getAttribute("style"));
                }
            }
        };


        div.ondblclick = function () {
            this.parentNode.removeChild(this);
        };

    }

}());