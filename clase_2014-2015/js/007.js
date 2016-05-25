/*global document, window */

var myStyle = document.getElementById("css1");
//alert(myStyle.getAttribute("href"));
// --> myStyle.setAttribute("href", "css/two.css");
var boton = document.getElementById("miBotoncito");

function func() {
    'use strict';
    //alert(myStyle.getAttribute("href"));
    if (myStyle.getAttribute("href") === "csss/two.css") {
        myStyle.setAttribute("href", "csss/one.css");
    } else {
        myStyle.setAttribute("href", "csss/two.css");
    }
}

boton.onclick = function () {
    'use strict';
    func();
};
//the same as the one we have above
//boton.addEventListener("click", function(){func()});