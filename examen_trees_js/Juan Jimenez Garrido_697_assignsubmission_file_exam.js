var ArrayImg = [];
var bigDiv = document.getElementById("container");
var img;
var n_clicks=0;
var primerclick;
var segundoclick;
var h1 = document.getElementById("h1"); 
var ruta1;
var ruta2;
var aciertos=0;

var imagenes_string = "im1.png||im2.png||im3.png||im4.png||im5.png||im6.png||im7.png||im8.png||im9.png||im10.png||im11.png||im12.png";

ArrayImg = imagenes_string.split("||");

    for (i = 0; i < ArrayImg.length; i++) {
        sty_img = "float:left; width:98px; height:98px; border:1px solid #000000; cursor:pointer;";
        img = document.createElement("img");
        img.setAttribute("style", sty_img);
        img.setAttribute("class", "imgs");
        img.setAttribute("imagen_n", i);
       
        bigDiv.appendChild(img);
    }

var array_imagenes = document.getElementsByClassName("imgs");


function f1(clicked) {
    if(n_clicks==0){
    primerclick=clicked.getAttribute("imagen_n");
    clicked.setAttribute("src", ArrayImg[clicked.getAttribute("imagen_n")]);
    ruta1 = clicked.getAttribute("src");
       
    n_clicks++;
    }else{
    segundoclick = clicked.getAttribute("imagen_n");
        console.log(segundoclick);
        if(primerclick==segundoclick){
         
            n_clicks=0;
        }else{
        clicked.setAttribute("src", ArrayImg[clicked.getAttribute("imagen_n")]);
        ruta2 = clicked.getAttribute("src");
                if(ruta1==ruta2){
                 array_imagenes[primerclick].setAttribute("style",  "float:left; width:98px; height:98px; border:1px solid #FF0000;"); 
                 array_imagenes[primerclick].onclick=null;
                 array_imagenes[segundoclick].onclick=null;
                 array_imagenes[segundoclick].setAttribute("style",  "float:left; width:98px; height:98px; border:1px solid #FF0000;");  
                 aciertos++;
                 h1.innerHTML="PUNTOS: "+aciertos;
                        if(aciertos==10){
                            
                            shuffleArray(ArrayImg);
                            location.reload(true);
                        }
                }else{
                 var retraso = setTimeout(function(){
                    
                    },0);
                }
                n_clicks=0;
        }
    }
}

	


for (var i = 0; i < array_imagenes.length; i++) {
    array_imagenes[i].onclick = function () {
        f1(this)
    };
}

function shuffleArray(array) {
      for (var i = array.length; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }

var nombre1=document.createTextNode("Nada");


var btn1 = document.createElement("button");
btn1.type="button";

