var izq = document.getElementById("container");
var der = document.getElementById("paint");

for (i = 1; i <= 1; i++) {
  var img1 = document.createElement("img");
  var img2 = document.createElement("img");
  var img3 = document.createElement("img");
  var img4 = document.createElement("img");
  var img5 = document.createElement("img");
  var img6 = document.createElement("img");
  var img7 = document.createElement("img");
  var img8 = document.createElement("img");
  var img9 = document.createElement("img");
  var img10 = document.createElement("img");
  img1.setAttribute("src", "im_trees/im3.png");
  img2.setAttribute("src", "im_trees/im4.png");
  img3.setAttribute("src", "im_trees/im5.png");
  img4.setAttribute("src", "im_trees/im6.png");
  img5.setAttribute("src", "im_trees/im7.png");
  img6.setAttribute("src", "im_trees/im8.png");
  img7.setAttribute("src", "im_trees/im9.png");
  img8.setAttribute("src", "im_trees/im10.png");
  img9.setAttribute("src", "im_trees/im11.png");
  img10.setAttribute("src", "im_trees/im12.png");
  img1.height = 100;
  img1.width = 100;
  img2.height = 100;
  img2.width = 100;
  img3.height = 100;
  img3.width = 100;
  img4.height = 100;
  img4.width = 100;
  img5.height = 100;
  img5.width = 100;
  img6.height = 100;
  img6.width = 100;
  img7.height = 100;
  img7.width = 100;
  img8.height = 100;
  img8.width = 100;
  img9.height = 100;
  img9.width = 100;
  img10.height = 100;
  img10.width = 100;
  izq.appendChild(img1);
  izq.appendChild(img2);
  izq.appendChild(img3);
  izq.appendChild(img4);
  izq.appendChild(img5);
  izq.appendChild(img6);
  izq.appendChild(img7);
  izq.appendChild(img8);
  izq.appendChild(img9);
  izq.appendChild(img10);
}

var nothing = document.createTextNode("nothing");
var del = document.createTextNode("delete");
var smaller = document.createTextNode("smaller");
var bigger = document.createTextNode("bigger");

var button1 = document.createElement("Button");
var button2 = document.createElement("Button");
var button3 = document.createElement("Button");
var button4 = document.createElement("Button");

button1.appendChild(nothing);
button2.appendChild(del);
button3.appendChild(smaller);
button4.appendChild(bigger);

der.appendChild(button1);
der.appendChild(button2);
der.appendChild(button3);
der.appendChild(button4);

function dele() {
  var e1 = img1.setAttribute('display', 'none');
  var e2 = document.getElementById('img2').setAttribute('display', 'none');
  var e3 = document.getElementById('img3').setAttribute('display', 'none');
  var e4 = document.getElementById('img4').setAttribute('display', 'none');
  var e5 = document.getElementById('img5').setAttribute('display', 'none');
  var e6 = document.getElementById('img6').setAttribute('display', 'none');
  var e7 = document.getElementById('img7').setAttribute('display', 'none');
  var e8 = document.getElementById('img8').setAttribute('display', 'none');
  var e9 = document.getElementById('img9').setAttribute('display', 'none');
  var e10 = document.getElementById('img10').setAttribute('display', 'none');
}


button1.onclick = function() {
  nothing();
}

button2.onclick = function() {
  dele();
}

button3.onclick = function() {
  smaller();
}

button4.onclick = function() {
  bigger();
}

function nothing() {
  var mensaje = document.createTextNode("nothing happens");
  alert(mensaje);
}

function smaller() {
  img1.setAttribute("style", "height: 50, width: 50");
  img2.setAttribute("style", "height: 50, width: 50");
  img3.setAttribute("style", "height: 50, width: 50");
  img4.setAttribute("style", "height: 50, width: 50");
  img5.setAttribute("style", "height: 50, width: 50");
  img6.setAttribute("style", "height: 50, width: 50");
  img7.setAttribute("style", "height: 50, width: 50");
  img8.setAttribute("style", "height: 50, width: 50");
  img9.setAttribute("style", "height: 50, width: 50");
  img10.setAttribute("style", "height: 50, width: 50");
}

function bigger() {
  img1.setAttribute("style", "height: 200, width: 200");
  img2.setAttribute("style", "height: 200, width: 200");
  img3.setAttribute("style", "height: 200, width: 200");
  img4.setAttribute("style", "height: 200, width: 200");
  img5.setAttribute("style", "height: 200, width: 200");
  img6.setAttribute("style", "height: 200, width: 200");
  img7.setAttribute("style", "height: 200, width: 200");
  img8.setAttribute("style", "height: 200, width: 200");
  img9.setAttribute("style", "height: 200, width: 200");
  img10.setAttribute("style", "height: 200, width: 200");
}

document.onmousemove = function(event) {
  var dot, eventDoc, doc, body, pageX, pageY;

  event = event || window.event; // IE-ism

  // If pageX/Y aren't available and clientX/Y are,
  // calculate pageX/Y - logic taken from jQuery.
  // (This is to support old IE)
  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;

    event.pageX = event.clientX +
      (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
      (doc && doc.clientLeft || body && body.clientLeft || 0);
    event.pageY = event.clientY +
      (doc && doc.scrollTop || body && body.scrollTop || 0) -
      (doc && doc.clientTop || body && body.clientTop || 0);
  }
  console.log(event.pageX);
  // x position of the mouse --> event.pageX;
  // y position of the mouse --> event.pageY;
};
