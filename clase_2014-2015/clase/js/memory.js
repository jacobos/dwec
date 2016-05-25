/*global document, setTimeout */

// Create a new anonymous function, to use as a wrapper
(function () {
    // Defines that JavaScript code should be executed in "strict mode".
    // http://www.w3schools.com/js/js_strict.asp
    'use strict';
    //declare the variables
    var i,
        im_array = [],
        granDiv,
        img,
        num_click = 0,
        im_click1,
        div,
        im_click2;

    function fun() {
        im_click1.children[0].setAttribute("style", "display: none");
        im_click2.children[0].setAttribute("style", "display: none");
    }

    granDiv = document.getElementById("granDiv");

    for (i = 1; i <= 10; i = i + 1) {
        div = document.createElement("div");
        img = document.createElement("img");
        img.setAttribute("style", "display: none");
        img.setAttribute("src", "images/0" + i + ".jpg");
        div.appendChild(img);
        im_array.push(div);
        div = document.createElement("div");
        img = document.createElement("img");
        img.setAttribute("style", "display: none");
        img.setAttribute("src", "images/0" + i + ".jpg");
        div.appendChild(img);
        im_array.push(div);
    }

    im_array.sort(function () {
        return Math.random() - 0.5;
    });
    for (i = 0; i < 20; i = i + 1) {
        granDiv.appendChild(im_array[i]);
        im_array[i].onclick = function () {
            if (num_click === 0) {
                this.children[0].setAttribute("style", "display: block");
                im_click1 = this;
                num_click = 1;
            } else {
                this.children[0].setAttribute("style", "display: block");
                if (im_click1.children[0].getAttribute("src") === this.children[0].getAttribute("src")) {
                    document.getElementById("mensajes").innerHTML = "IGUALES!";
                } else {
                    im_click2 = this;
                    setTimeout(fun, 400);
                    document.getElementById("mensajes").innerHTML = "DISTINTAS!";
                }
                num_click = 0;
            }
        };
    }
}());