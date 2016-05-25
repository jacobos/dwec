var izquierda = document.getElementById("container");
var derecha = document.getElementById("paint");

for(i=1;i<=12;i++){
    var img = document.createElement("img");
    img.setAttribute("src","im_trees/im"+i+".png");
    img.height = 100;
    img.width = 100;
    izquierda.appendChild(img);
    
}
var not = document.createTextNode("Nothing");
var del = document.createTextNode("Delete");
var sma = document.createTextNode("Smaller");
var big = document.createTextNode("Bigger");
var btn1 = document.createElement("Button");
var btn2 = document.createElement("Button");
var btn3 = document.createElement("Button");
var btn4 = document.createElement("Button");
btn1.appendChild(not);
btn2.appendChild(del);
btn3.appendChild(sma);
btn4.appendChild(big);
derecha.appendChild(btn1);
derecha.appendChild(btn2);
derecha.appendChild(btn3);
derecha.appendChild(btn4);

img.onClick = function(){
    cogerImagen();
}

function cogerImagen(clicked){
    var recoger = clicked.getAttribute("src");   
    imagen = document.createElement("img");
    imagen.setAttribute("src",recoger);
    derecha.appendChild(imagen);
    
    
}

btn1.onClick = function () {
    nada();
}

btn2.onClick = function(){
    borrar();
}
btn3.onClick = function(){
    pequeno();
}
btn4.onClick = function(){
    grande();
}
function nada(){
    
}

function borrar(){
    
}

function pequeno(){
    
}

function grande(){
    
}

 document.onmousemove = function (event) {
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