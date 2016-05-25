var imagenes = new Array();
var divcontenedor = document.getElementById("container");
var imagenContainer = "im_trees/grunge_back.jpg";
var imagen = "im_trees/im1.png";
var paint = document.getElementById("paint");

var nohacernada=false;
var grande=false;
var peq=false;
var del=false;
for (var x = 1; x < 13; x++) {
    imagenes[x - 1] = "im_trees/im" + x + ".png";
    console.log(imagenes[x]);
}
for (x = 1; x < 12; x++) {
    var img = document.createElement("img");
    img.setAttribute("src", imagenes[x]);
    img.setAttribute("id", "imagenN" + x);
    img.setAttribute("style", "width:90px; height:90px; margin-left:20px;");
    divcontenedor.appendChild(img);
    divcontenedor.setAttribute("style", "background: url(" + imagenContainer + ")");

    img.addEventListener("click", function () {
        func(this)
    });
}
paint.addEventListener("click", function () {
    pinto(this)
});

function func(este) {
    insertoImagen = este.getAttribute("src");
    insertoImagen2 = este.getAttribute("id");
    nohacernada=true;
}

function pinto(MiFuncion) {
    if(nohacernada==true){
    img2 = document.createElement("img");
    img2.setAttribute("src", insertoImagen);
    img2.setAttribute("id", insertoImagen2);
    img2.setAttribute("style", "position:absolute; left: " + (event.pageX) + "px; top:" + (event.pageY) + "px;");
    img2.width=50;
    img.height=50;
    img2.addEventListener("click", function () {
        modificar(this)
    });
    paint.appendChild(img2);
}
}

function modificar(esto) {
if(nohacernada==false){
   
if(grande==true){
    esto.width=(esto.width*2);
    esto.height=(esto.height*2);
}
    else if(peq==true){
    esto.width=(esto.width/2);
    esto.height=(esto.height/2);
    }
    else if(del==true){
        esto.setAttribute("style","width:0px; height:0px;");
    }
}
}

document.onmouseup = function (event) {
    var dot, eventDoc, doc, body, pageX, pageY;
    event = event || window.event;

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
};
var boton1 = document.createElement("button");
boton1.innerHTML = "Nothing";
boton1.addEventListener("click", function () {
    nada()
});

function nada() {
    nohacernada = false;
    grande = false;
    peq = false;
    del = false;
}


var boton2 = document.createElement("button");
boton2.innerHTML = "Delete";
boton2.addEventListener("click", function () {
    dele()
});

function dele() {
    nohacernada = false;
    grande = false;
    peq = false;
    del = true;
}

var boton3 = document.createElement("button");
boton3.innerHTML = "Smaller";
boton3.addEventListener("click", function () {
    sma()
});

function sma() {
    nohacernada = false;
    grande = false;
    peq = true;
    del = false;
}

var boton4 = document.createElement("button");
boton4.innerHTML = "Bigger";
boton4.addEventListener("click", function () {
    big()
});

function big() {
    nohacernada = false;
    grande = true;
    peq = false;
    del = false;
}

divcontenedor.appendChild(boton1);
divcontenedor.appendChild(boton2);
divcontenedor.appendChild(boton3);
divcontenedor.appendChild(boton4);
boton1.setAttribute("style", "display:block; margin:5px;");
boton2.setAttribute("style", "display:block; margin:5px;");
boton3.setAttribute("style", "display:block; margin:5px;");
boton4.setAttribute("style", "display:block; margin:5px;");