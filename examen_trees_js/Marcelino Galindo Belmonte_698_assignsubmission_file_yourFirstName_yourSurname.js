//POSICION
var x;
      
      var y,z;
      
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
       
      x=event.pageX;
        y=event.pageY;
      // x position of the mouse --> event.pageX;
      // y position of the mouse --> event.pageY;
    };




//CONTAINER
var array_imagenes = document.getElementsByClassName("imgs");
var ArrayImg = [];
var cont=document.getElementById("container");
var imagenes_string = "im_trees/im1.png,im_trees/im2.png,im_trees/im3.png,im_trees/im4.png,im_trees/im5.png,im_trees/im6.png,im_trees/im7.png,im_trees/im8.png,im_trees/im9.png,im_trees/im10.png,im_trees/im11.png,im_trees/im12.png";
ArrayImg = imagenes_string.split(",");
var imgs;

for (i=0;i<ArrayImg.length;i++){
    var sty_img = "float:left; width:98px; height:98px; border:1px solid #000000; cursor:pointer;";
        imgs = document.createElement("img");
        imgs.setAttribute("style", sty_img);
        imgs.setAttribute("class", "imgs");
        imgs.setAttribute("imagen_n", i);
        cont.appendChild(imgs);
        imgs.setAttribute("src",ArrayImg[i]);        
}




//PAINT
var imaclick;

var contpaint=document.getElementById("paint");
var n_clicks=0;
var ruta;
var primerclick;
var segundoclick;


function funcion(clicked){
    primerclick=clicked.getAttribute("imagen_n");
    ruta = clicked.getAttribute("src");
    
    
    
     
}

var contability=0;
contpaint.onclick=function(){   
        var sty_img2 = "position:absolute; width:98px; height:98px;  cursor:pointer;margin-top:"+(y-30)+"px;margin-left:"+(x-300)+"px;";
        var crearima=document.createElement("img");
        crearima.setAttribute("style", sty_img2);
        crearima.setAttribute("numeroIMN",contability++);
        crearima.setAttribute("src",ruta);
        contpaint.appendChild(crearima);
        contability=contability+1;
        n_clicks=0;    
    
        
}

//BOTONES
var nombre1=document.createTextNode("Nothing");
var nombre2=document.createTextNode("Delete");
var nombre3=document.createTextNode("Smaller");
var nombre4=document.createTextNode("Bigger");



var b1 = document.createElement("button");
b1.type = "button";
b1.setAttribute("style","position:absolute;margin-left:25%;");
b1.appendChild(nombre1);
contpaint.appendChild(b1);
b1.onclick=function(){
    
    //NOTHING TO DO
    
}

var b2 = document.createElement("button");
b2.type = "button";
b2.setAttribute("style","position:absolute;margin-left:35%;");
b2.appendChild(nombre2);
contpaint.appendChild(b2);
function borrar(esto){
    
    
    
}

var b3 = document.createElement("button");
b3.type = "button";
b3.setAttribute("style","position:absolute;margin-left:45%;");
b3.appendChild(nombre3);
contpaint.appendChild(b3);
b1.onclick=function(){
    
    
    
}

var b4 = document.createElement("button");
b4.type = "button";
b4.setAttribute("style","position:absolute;margin-left:55%;");
b4.appendChild(nombre4);
contpaint.appendChild(b4);
b1.onclick=function(){
    
    
    
}







//----------
for (var i = 0; i < array_imagenes.length; i++) {
    array_imagenes[i].onclick = function () {
        funcion(this)
    };
}
//----------

