
//IMAGENES

var images = "im1.png||im2.png||im3.png||im4.png||im5.png||im6.png||im7.png||im8.png||im9.png||im10.png||im11.png||im12.png",
             arrayImagenes,
             i,
             img,
             d;

arrayImagenes = images.split("||");

for(i = 0; i < arrayImagenes.length; i=i+1){
    d = document.createElement("div");
    d.setAttribute("style","float: left;");
    img = document.createElement("img");
    img.setAttribute("style","width:"+90+"px;"+"height:"+90+"px;");
    img.setAttribute("src","im_trees/"+arrayImagenes[i]);
    d.appendChild(img);
    document.getElementById("container").appendChild(d);
    d.setAttribute("id","img"+i);
    d.setAttribute("class","imagen");
}

//BOTONES
var botonNothing, botonDelete, botonSmaller, botonBigger;
    
botonNothing = document.createElement("button");
    botonNothing.setAttribute("id","nothing");
botonDelete = document.createElement("button");
    botonDelete.setAttribute("id","delete");
botonSmaller = document.createElement("button");
    botonSmaller.setAttribute("id","smaller");
botonBigger = document.createElement("button");
    botonBigger.setAttribute("id","bigger");

// AGREGAMOS LOS BOTONES AL DIV PAINT
botonNothing.textContent = "Nothing";
botonDelete.textContent = "Delete";
botonSmaller.textContent = "Smaller";
botonBigger.textContent = "Bigger";

botonNothing.setAttribute("style","margin-top:"+650+"px;"+"margin-left:"+350+"px;");

document.getElementById("paint").appendChild(botonNothing);
document.getElementById("paint").appendChild(botonDelete);
document.getElementById("paint").appendChild(botonSmaller);
document.getElementById("paint").appendChild(botonBigger);

// COLOCAR IMAGEN EN 'PAINT'
document.onmousemove = function (event) {
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
    
    img = document.createElement("img");
    img.height = 500;
    img.height = img.height * 0.5;
    img.width = 500;

    var click1 = null;
    var click2 = null;
    var ruta1 = null;
    var ruta2 = null;

    function cambio() {
        click1.setAttribute("style", ruta2);
        click2.setAttribute("style", ruta1);
        click1 = null;
        click2 = null;
        ruta1 = null;
        ruta2 = null;
    }

img0.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img0);   
    } 
};

img1.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img1); 
    } 
};

img2.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img2); 
    } 
};

img3.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img3);  
    } 
};

img4.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img4); 
    } 
};

img5.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img5); 
    } 
};

img6.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img6); 
    } 
};

img7.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img7); 
    } 
};

img8.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img8); 
    } 
};

img9.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img9);  
    } 
};

img10.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img10); 
    } 
};

img11.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img11); 
    } 
};

img12.onclick = function () {
    if (click1 == null) {
        click2 = document.getElementById("paint").appendChild(img12);   
    } 
};

