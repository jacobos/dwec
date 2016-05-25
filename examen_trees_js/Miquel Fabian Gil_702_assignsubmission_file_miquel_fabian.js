var i;
var clicked;
var n_figuras=0;
var posicionX;
var posicionY;
var gran=false;
var peke=false;
var borrar=false;
for (i = 1; i < 13; i = i + 1) {
    img = document.createElement("img");
    img.setAttribute("src","im_trees/im"+i+".png");
    img.setAttribute("style","float:left");
    img.setAttribute("id","imag"+i+"e");
    img.height = 100;
    img.width = 100;
    document.getElementById("container").appendChild(img);

    img.onclick = function(){
    clicked = this.getAttribute("src");
    console.log(clicked); //En la consola sale la imagen que pinchas

    };


}

document.onmousemove = function (event) {
      var dot, eventDoc, doc, body, pageY, pageX;

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
    posicionX = event.pageX;
    posicionY = event.pageY;
    posicionX=posicionX-50;
    posicionY=posicionY-50;

}

lienzo = document.getElementById("paint");
lienzo.onclick = function(){

    if(gran===true){
        console.log("Entra en gran2...JACOBO TEN PIEDAD");
        





    }else if(peke===true){
        console.log("Entra en peke2...JACOBO TEN PIEDAD");



    }else if(borrar===true){
        console.log("Entra en borrar2...JACOBO TEN PIEDAD");

            // Capturamos el click y lo pasamos a una funcion
            document.onclick = captura_click;
            function captura_click(e) {
                // Funcion para capturar el click del raton
                var HaHechoClick;

                // Si hac click un elemento, lo leemos
                HaHechoClick = event.srcElement;

                console.log(HaHechoClick);
                lienzo.removeChild(HaHechoClick);
            }





    }else{
    n_figuras = n_figuras + 1;
    figura = document.createElement("img");
    figura.setAttribute("src",clicked);
    figura.setAttribute("id","figur"+n_figuras+"s");
    figura.setAttribute("style","position:absolute;top:"+posicionY+"px;left:"+posicionX+"px;");
    figura.height = 100;
    figura.width = 100;
    lienzo.appendChild(figura);
    console.log(figura); //En la consola sale la imagen que pinchas
}
}
contenedor = document.getElementById("container");


var nada = document.createElement("button");
var t = document.createTextNode("Nothing");
nada.appendChild(t);
contenedor.appendChild(nada);

nada.onclick = function(){
    gran=false;
    peke=false;
    borrar=false;
    }


var borrar = document.createElement("button");
var t = document.createTextNode("Delete");
borrar.appendChild(t);
contenedor.appendChild(borrar);
borrar.onclick = function(){
    gran=false;
    peke=false;
    borrar=true;
    }


var peque = document.createElement("button");
var t = document.createTextNode("Small");
peque.appendChild(t);
contenedor.appendChild(peque);

peque.onclick = function(){
    gran=false;
    peke=true;
    borrar=false;
    }


var grande = document.createElement("button");
var t = document.createTextNode("Big");
grande.appendChild(t);
contenedor.appendChild(grande);

grande.onclick = function(){
    gran=true;
    peke=false;
    borrar=false;
    }
