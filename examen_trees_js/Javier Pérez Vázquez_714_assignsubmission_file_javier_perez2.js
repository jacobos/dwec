var container = document.getElementById("container");
var paint = document.getElementById("paint");
var imagenes = [];
var txt;
var ruta = null;
var xx;
var xy;
var foto;
//var click = false;
var nothing = false;
var del = false;
var smaller = false;
var bigger = false;
var imagenes = [];
var bolPintar = true;

for (var i = 1; i <= 12; i++) {
    var im = document.createElement("img");
    im.setAttribute("src", "im_trees/im" + i + ".png");
    im.className = "foto";
    im.height = 394 * 0.25;
    im.width = 300 * 0.25;
    container.appendChild(im);

    im.onclick = function () {
        selImagen(this);
    }
}

function selImagen(clicked) {

    ruta = clicked.getAttribute("src");

}

paint.onclick = function () {
   
    pintar();
}

function pintar(clicked) {

        if (ruta != null) {
            foto = document.createElement("img");
            foto.setAttribute("src", ruta);
            foto.height = 394 * 0.25;
            foto.width = 300 * 0.25;
            foto.style.position = "absolute";
            foto.style.top = yy + "px";
            foto.style.left = xx + "px";
            foto.className = "afoto";
            

            foto.onclick = function () {
                editar(this);
                bolPintar = false;
            }
            if(bolPintar){
                console.log(bolPintar);
              paint.appendChild(foto);  
            }
        
            bolPintar = true;
    }

}

for (var j = 0; j < 4; j++) {
    var btn = document.createElement("button");
    btn.className = "boton";
    paint.appendChild(btn);
    if (j == 0) {
        txt = document.createTextNode("Nothing");
        btn.setAttribute("id", "btnNothing");
    } else if (j == 1) {
        txt = document.createTextNode("Delete");
        btn.setAttribute("id", "btnDelete");

    } else if (j == 2) {
        txt = document.createTextNode("Smaller");
        btn.setAttribute("id", "btnSmaller");
    } else if (j == 3) {
        txt = document.createTextNode("Bigger");
        btn.setAttribute("id", "btnBigger");
    }
    btn.appendChild(txt);
    btn.onclick = function () {
        cambiarEditable(this);
    }
}

function cambiarEditable(clicked) {
    imagenesPintadas = document.getElementsByClassName("afoto");
    if (clicked.getAttribute("id") == "btnNothing") {
        nothing = true;
        del = false;
        smaller = false;
        bigger = false;

    } else if (clicked.getAttribute("id") == "btnDelete") {
        del = true;
        bolPintar = false;
    } else if (clicked.getAttribute("id") == "btnSmaller") {
        smaller = true;
        del = false;
        bigger = false;
        bolPintar = false;
    } else if (clicked.getAttribute("id") == "btnBigger") {
        bigger = true;
        del = false;
        smaller = false;
        bolPintar = false;
    }

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

    // x position of the mouse --> event.pageX;
    // y position of the mouse --> event.pageY;
    xx = event.pageX;
    yy = event.pageY;

};





function editar(clicked) {

    if (del) {
        clicked.parentNode.removeChild(clicked);
    } else if (smaller) {
        
        var alto = clicked.getAttribute("height");
        var ancho = clicked.getAttribute("width");
  
        alto *= 0.75;
        ancho *= 0.75;
        console.log(alto);
        clicked.height = alto;
        clicked.width = ancho;
    } else if (bigger) {
                
        var alto = clicked.getAttribute("height");
        var ancho = clicked.getAttribute("width");
  
        alto *= 1.25;
        ancho *= 1.25;
        console.log(alto);
        clicked.height = alto;
        clicked.width = ancho;
    }
}
/* img = document.createElement("img");
 img.height = 500;
 img.width = 500;*/