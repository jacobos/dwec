var boton_nothing;
var boton_delete;
var boton_bigger;
var boton_smaller;
var div_boton;
var primerclick;
var segundoclick;
var numero_clicks=0;
var array_objetos;
var boton_nothing_text;
var boton_delete_text;
var boton_bigger_text;
var boton_smaller_text;
var ruta1;
var array_derecha;



array_objetos= document.getElementsByClassName("imgs");

var izquierda = document.getElementById("container");
var derecha= document.getElementById("paint");

for (var i = 0; i < 12; i++) {
    stylo_imagen = "width:98px; height:98px;";
    img = document.createElement("img");
    img.setAttribute("style", stylo_imagen);
    img.setAttribute("class", "imgs");
    img.setAttribute("numero_img", i);
    img.setAttribute("src", "im_trees/im"+ (i+1)+".png");
    izquierda.appendChild(img);
}



div_boton= document.createElement("div");

boton_nothing=document.createElement("button");
boton_delete=document.createElement("button");
boton_bigger=document.createElement("button");
boton_smaller=document.createElement("button");

boton_nothing_text=document.createTextNode("Nothing");
boton_delete_text=document.createTextNode("Delete");
boton_bigger_text=document.createTextNode("Bigger");
boton_smaller_text=document.createTextNode("Smaller");

boton_nothing.appendChild(boton_nothing_text);
boton_delete.appendChild(boton_delete_text);
boton_bigger.appendChild(boton_bigger_text);
boton_smaller.appendChild(boton_smaller_text);

div_boton.appendChild(boton_nothing);
div_boton.appendChild(boton_delete);
div_boton.appendChild(boton_bigger);
div_boton.appendChild(boton_smaller);

derecha.appendChild(boton_nothing);
derecha.appendChild(boton_delete);
derecha.appendChild(boton_bigger);
derecha.appendChild(boton_smaller);


function funcion1(objeto) {
    if (numero_clicks == 0) {
        primerclick= objeto.getAttribute("numero_img");
    
        ruta1 = objeto.getAttribute("src");
        console.log(ruta1);
        numero_clicks = 1;
    
}
    numero_clicks=0;
}

 img = document.createElement("img");
     
      
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
    }

       function funcion2(objeto){
           stylo_imagen2= "width:98px; height:98px; position:absolute; margin-left:"+ (event.pageX-550) + "px; margin-top:"+ (event.pageY)+"px;"
           img=document.createElement("img");
           img.setAttribute("style",stylo_imagen2);
           img.setAttribute("class","imagen_derecha");
           img.setAttribute("numero_img", i);
           img.setAttribute("src", ruta1);
           derecha.appendChild(img);
           array_derecha = document.getElementsByClassName("imagen_derecha");           
           
       }
        
       

for (var i = 0; i < array_objetos.length; i++) {
    array_objetos[i].onclick = function () {
        funcion1(this);
    };
}

for (var i = 0; i < array_objetos.length; i++) {
   derecha.onclick = function () {
        funcion2(this);
    };
}

                      
