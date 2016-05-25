/*global document, window */
boton
var myStyle = document.getElementById("css1"),
    boton = document.getElementById("miBotoncito");

function func() {
  'use strict';

  if (myStyle.getAttribute("href") === "styles/two.css") {
    myStyle.setAttribute("href", "styles/one.css");
  } else {
    myStyle.setAttribute("href", "styles/two.css");
  }
}

boton.onclick = function () {
  'use strict';
  func();
};
//the same as the one we have above
//boton.addEventListener("click", function(){func()});
// but with this one we can have as many events on the onclick as we want, with
// boton.onclick we only have one