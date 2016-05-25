var EJERCICIO = document.getElementById("container");
var EJERCICIO2 = document.getElementById("paint");

var imagenes = new Array();

//METE LAS IMAGENES EN UN ARRAY
for (var x = 1; x < 13; x++) {
    if (x < 13) {
        imagenes[x - 1] = "im_trees/im" + x + ".png";
    } else {}
    console.log(imagenes[x]);
}

//MUESTRA LAS IMAGENES EN EL LADO DERECHO
for (x = 0; x < 12; x++) {
    var img = document.createElement("img"); //creas 12 img y a cada una le añade un posición del array con los siguientes atributos
    img.setAttribute("src", imagenes[x]);
    img.height = 100;
    img.width = 100;
    EJERCICIO.appendChild(img);
}


//FUNCIONES QUE CREAN LOS BOTONES
function boton1() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Nothing");
    x.appendChild(t);
    EJERCICIO2.appendChild(x);
}
boton1();


function boton2() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Delete");
    x.appendChild(t);
    EJERCICIO2.appendChild(x);
}
boton2();


function boton3() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Smaller");
    x.appendChild(t);
    EJERCICIO2.appendChild(x);
}

boton3();


function boton4() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Bigger");
    x.appendChild(t);
    EJERCICIO2.appendChild(x);
}
boton4();




// EJERCICIO.addEventListener("click", pulsar);

// function pulsar() {
//    var imagen_almacenada = document.getElementsByTagName("img");
//    console.log(magen_almacenada = document.getElementsByTagName("img"));
//}
//EJERCICIO2.addEventListener("click", pulsar2);

//function pulsar2() {
//    var imagen_almacenada2.setItem(imagen_almacenada);
//    console.log(magen_almacenada = document.getElementsByTagName("img"));
//}



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

