      var dot, eventDoc, doc, body, pageX, pageY;
 
document.onmousemove = function (event) {

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
var files_string="im1.png||im2.png||im3.png||im4.png||im5.png||im6.png||im7.png||im8.png||im9.png||im10.png||im11.png||im12.png";
var spl=files_string.split("||");
var nada=document.createElement("button");
var borrar=document.createElement("button");
var encoger=document.createElement("button");
var agrandar=document.createElement("button");
nada.setAttribute("style","position:absolute; left:500px; top:550px;");
borrar.setAttribute("style","position:absolute; left:600px; top:550px;");
encoger.setAttribute("style","position:absolute; left:700px; top:550px;");
agrandar.setAttribute("style","position:absolute; left:800px; top:550px;");
nada.innerHTML="Nothing";
borrar.innerHTML="Delete";
encoger.innerHTML="Smaller";
agrandar.innerHTML="Bigger";
var paint=document.getElementById("paint");
paint.appendChild(nada);
paint.appendChild(borrar);
paint.appendChild(encoger);
paint.appendChild(agrandar);

for(var i=0;i<spl.length;i=i+1){
    var imagenes=document.createElement("img");
var d=document.getElementById("container");
    d.setAttribute("style","width:200px; height:200px; float:left;");

    imagenes.setAttribute("src","im_trees/"+spl[i]);
    imagenes.setAttribute("style","width:100px; height:100px");
    
 d.appendChild(imagenes);
    encoger.onclick=function(){
    imagenes.onclick=function (){
        
       this.setAttribute("style","width:50px");
    };

    };
    borrar.onclick=function(){
        imagenes.onclick=function(){
            this.setAttribute("style","display:none;");
        };
    };
    agrandar.onclick=function(){
        imagenes.onclick=function(){
           
            this.setAttribute("style","width:300px");
            
        };
    };
    imagenes.onclick=function(){
        paint.onclick=function(){
           imagenes.setAttribute("style"," position:absolute; background-position:"+pageX+"px "+pageY+"px");
            
            
        };
    };
   
        
  
    
}
