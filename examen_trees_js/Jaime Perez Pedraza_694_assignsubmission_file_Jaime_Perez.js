var atributo = 0;
var imagenselect=null;
var imgs = ["im1","im2","im3","im4","im5","im6","im7","im8","im9","im10","im11","im12"];
var container = document.getElementById("container");
var n = imgs.length;
for (var r=0;r<n;r++){
    var img = document.createElement("img");
    var img1 ="im_trees/"+imgs[r] + ".png";
    img.setAttribute("src", img1);
    img.height = 120;
    img.width = 120;
     img.addEventListener("click", function(){
        pintar(this);
    });
    container.appendChild(img);
    

}
var divPintar = document.getElementById("paint");
var divBotones =  document.createElement("div");
divBotones.setAttribute ("style", " position:relative;top: 600px; ");
var nothing = document.createElement("input");
var deletee = document.createElement("input");
var smaller = document.createElement("input");
var bigger = document.createElement("input");
nothing.setAttribute("type", "button");
nothing.setAttribute("id", "nothing");
nothing.setAttribute("value", "Nothing");
nothing.setAttribute("style", " width:75px; height:30px;position: relative; left: 20px;");
deletee.setAttribute("type", "button");
deletee.setAttribute("id", "deletee");
deletee.setAttribute("value", "Delete");
deletee.setAttribute("style", " width:75px; height:30px;position: relative; left: 100px;");
smaller.setAttribute("type", "button");
smaller.setAttribute("id", "smaller");
smaller.setAttribute("value", "Smaller");
smaller.setAttribute("style", " width:75px; height:30px;position: relative; left: 180px;");
bigger.setAttribute("type", "button");
bigger.setAttribute("id", "bigger");
bigger.setAttribute("value", "Bigger");
bigger.setAttribute("style", " width:75px; height:30px;position: relative; left: 260px;");
divBotones.appendChild(nothing);
divBotones.appendChild(deletee);
divBotones.appendChild(smaller);
divBotones.appendChild(bigger);
divPintar.setAttribute("onmousemove", "position(event)");
divPintar.appendChild(divBotones);

 divPintar.onmousemove = function (event) {
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
      
    var posicionx=event.pageX;
     var posiciony=event.pageY;
//     console.log(posiciony);
    };
divPintar.onclick = function (){
    if (imagenselect == null){
    }else{
         
        var imagenNueva = document.createElement("img");
        
       imagenNueva.setAttribute("src", imagenselect.getAttribute("src"));
        var rr = 100;
        imagenNueva.setAttribute("style", "position:absolute; left:"+event.pageX+"px;top:"+event.pageY+"px;width:"+rr+"px; height:"+rr+"px;");
        
        imagenNueva.addEventListener("click", function(){
        if (atributo==1){
            
            imagenNueva =img;
        }else if(atributo ==2){
            
           imagenNueva.parentNode.removeChild(imagenNueva);
            imagenselect=null;
        }else if(atributo== 3) {
            rr = rr * 0.5;
            imagenNueva.setAttribute("style", "position:absolute; left:"+event.pageX+"px;top:"+event.pageY+"px;width:"+rr+"px; height:"+rr+"px;");
            imagenselect=null;
        }else if(atributo == 4){
             rr = rr * 1.5;
            imagenNueva.setAttribute("style", "position:absolute; left:"+event.pageX+"px;top:"+event.pageY+"px;width:"+rr+"px; height:"+rr+"px;");
            imagenselect=null;
        }
    });
        divPintar.appendChild(imagenNueva);
    
    }
    
}
function pintar(img){
     imagenselect = img;
    
    
}

nothing.onclick = function(img){
    
    atributo=1;
    
}
deletee.onclick = function(){
    
    atributo=2;
    
}
smaller.onclick = function(){
    
    atributo=3;
    
}
bigger.onclick = function(){
    
    atributo=4;
    
}
    