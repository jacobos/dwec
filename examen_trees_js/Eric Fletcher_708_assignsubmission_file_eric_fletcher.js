var img; 
var img1;
var img2;
var click = true;
var paint = document.getElementById("paint");

var boton1 = document.createElement("input");
boton1.setAttribute("value","Nothing");
boton1.setAttribute("type","button");
boton1.style.cssText="height:20px; width:100px;";
paint.appendChild(boton1);

var boton2 = document.createElement("input");
boton2.setAttribute("value","Delete");
boton2.setAttribute("type","button");
boton2.style.cssText="height:20px; width:100px;";
paint.appendChild(boton2);

var boton3 = document.createElement("input");
boton3.setAttribute("value","Smaller");
boton3.setAttribute("type","button");
boton3.style.cssText="height:20px; width:100px;";
paint.appendChild(boton3);

var boton4 = document.createElement("input");
boton4.setAttribute("value","Bigger");
boton4.setAttribute("type","button");
boton4.style.cssText="height:20px; width:100px;";
paint.appendChild(boton4);




 var ponerImagenes = function () {
    var container = document.getElementById("container");
    for (var i = 1; i < 13; i++) { // un for para ir creando cada una de las imagenes
        img = document.createElement("img"); //creo el nodo de la imagen
        img.setAttribute("src", "im_trees/im"+i+".png"); // le pongo el src a la imagen
        img.setAttribute("myimg", "im_trees/im"+i+".png");
        img.setAttribute("class", "imgs"); // le pongo una clase imgs
        img.style.cssText = "height:100px; width:100px;";
        container.appendChild(img); // añado las imagenes al contenedor
    }

}
 ponerImagenes();

var recojer = document.getElementsByClassName("imgs"); // creo una variable recojer para que guarde todas las imagenes



recojer[0].onclick = function(){
 img1= recojer[0].getAttribute("src");
    
};
recojer[1].onclick = function(){
 img1= recojer[1].getAttribute("src");
    
};
recojer[2].onclick = function(){
 img1= recojer[2].getAttribute("src");

};
recojer[3].onclick = function(){
 img1= recojer[3].getAttribute("src");
    
};
recojer[4].onclick = function(){
 img1= recojer[4].getAttribute("src");
   
};
recojer[5].onclick = function(){
 img1= recojer[5].getAttribute("src");
    
};
recojer[6].onclick = function(){
 img1= recojer[6].getAttribute("src");
   
};
recojer[7].onclick = function(){
 img1= recojer[7].getAttribute("src");
   
};
recojer[8].onclick = function(){
 img1= recojer[8].getAttribute("src");
    
};
recojer[9].onclick = function(){
 img1= recojer[9].getAttribute("src");
    
};
recojer[10].onclick = function(){
 img1= recojer[10].getAttribute("src");
    
};
recojer[11].onclick = function(){
 img1= recojer[11].getAttribute("src");
   
};


  paint.onclick = function(){

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
    
    
     creada= document.createElement("img");
    creada.setAttribute("src",img1);
    creada.style.cssText="position:absolute;height:80px; width:80px;";
        top=    creada.style.top=event.pageY+"px";
         left=   creada.style.left=event.pageX+"px";
    creada.style.top=event.pageY+"px";
    creada.style.left=event.pageX+"px";
    paint.appendChild(creada);
    
   
        
    };
    
        
    };

boton4.onclick= function(){
    
    
    creada.style.cssText="position:absolute;height:300px; width:300px;";
    creada.style.top=top;
    creada.style.left=left;
    
}


