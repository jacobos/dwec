var body = document.dody;
var paint = document.getElementById("paint");
var container = document.getElementById("container");
var botones = document.createElement("div");

var images = new Array("im_trees/im1.png", "im_trees/im2.png", "im_trees/im3.png", "im_trees/im4.png", "im_trees/im5.png", "im_trees/im6.png", "im_trees/im7.png", "im_trees/im8.png", "im_trees/im9.png", "im_trees/im10.png", "im_trees/im11.png", "im_trees/im12.png");
var x = 0;

//CREA LAS IMAGENES
for(x = 0; x<images.length; x++){
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", images[x]);
    img.style.width = "90px";
    
    (function() {
            alfa = img;
            var h = x;
            alfa.onclick = function() {
                evento(h)
            };
    })();
    
    div.appendChild(img);
    div.style.float="left";
    container.appendChild(div);
}
//CREA LOS BOTONES
//Nothing
var nothing = document.createElement("input");
nothing.setAttribute("type", "submit");
nothing.setAttribute("value", "Nothing");
botones.appendChild(nothing);
//Delete
var borrar = document.createElement("input");
borrar.setAttribute("type", "submit");
borrar.setAttribute("value", "Borrar");
botones.appendChild(borrar);
//Smaller
var smaller = document.createElement("input");
smaller.setAttribute("type", "submit");
smaller.setAttribute("value", "Smaller");
botones.appendChild(smaller);
//Bigger
var bigger = document.createElement("input");
bigger.setAttribute("type", "submit");
bigger.setAttribute("value", "Bigger");
botones.appendChild(bigger);
botones.setAttribute("style", "position:absolute; bottom: 0px;");
paint.appendChild(botones);


//ONCLICKS
var funcion = 0;
nothing.onclick = function(){funcion = 0;};
borrar.onclick = function(){funcion = 1;};
smaller.onclick = function(){funcion = 2;};
bigger.onclick = function(){funcion = 3;};

var putImagen = null;

function evento(z){
    putImage = z;
}

//DEFINO LA POSICION EN posX Y posY AL HACER CLICK CON EL RATÓN

paint.onclick = function (event) {
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
      // x position of the mouse --> event.pageX;
      // y position of the mouse --> event.pageY;
    crearImagen(event.pageX, event.pageY);
    };


var elArbol;
function crearImagen(posX, posY){
    switch(funcion){
        case 0:
                posX = posX - 50;
                posY = posY - 50;
                var creaImagen = document.createElement("img");
                creaImagen.setAttribute("src", images[putImage]);
                creaImagen.setAttribute("style", "position: absolute; top: " + posY + "px; left: " + posX + "px; width: 100px;");
                (function() {
                    alfa = creaImagen;
                    alfa.onclick = function() {
                        eventoSelArbol(this);
                    };
                })();
                var alfa = creaImagen;            
                paint.appendChild(creaImagen);
            break;
        case 1:
            if(elArbol != null){
                paint.removeChild(elArbol);
                elArbol = null;
            }
            break;
        case 2:
            if(elArbol != null){
                var n = elArbol.style.width.indexOf("px");
                var res = elArbol.style.width.substr(0, n);
                var nuevoWidth = res - 20;
                elArbol.style.width = (nuevoWidth + "px");
                elArbol = null;
            }
            break;
        case 3:
            if(elArbol != null){
                var n = elArbol.style.width.indexOf("px");
                var res = elArbol.style.width.substr(0, n);
                var nuevoWidth = (res-1) +1 + 20;
                elArbol.style.width = (nuevoWidth + "px");
                elArbol = null;
            }
            break;
    }
}

function eventoSelArbol(sel){
    elArbol = sel;
}

