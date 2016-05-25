(function () {
  'use strict';

  var files_string = "im1.png||im2.png||im3.png||im4.png||im5.png||im6.png||im7.png||im8.png||im9.png||im10.png||im11.png||im12.png",
    myArray,
    myArray2,
    i,
    tipovariable,
    img2,
    img,
    imagen_1,
    src_imagen_1 ,
      c,
    d;
    

    
  myArray = files_string.split("||"); 
    
     for (i = 0; i < myArray.length; i = i + 1) {
    d = document.createElement("div");
    img = document.createElement("img");
             img.height = 50;
    img.setAttribute("src", "im_trees/" + myArray[i]); 
    d.appendChild(img);
    document.getElementById("container").appendChild(d);
    d.setAttribute("class", "flex-item"); 
    img.setAttribute("id", "a" + i); 
        

        };  
    
    
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
    };
             
    document.getElementById('paint').onclick = function() {
    if(tipovariable==1){
        
    }
};

    
}());

