var images = "im1.png||im2.png||im3.png||im4.png||im5.png||im6.png||im7.png||im8.png||im9.png||im10.png||im11.png||im12.png",
        myArray,
        i,
        d,
        img;

     arrayIM = images.split("||");

for (  i = 0; i < arrayIM.length; i=i+1){

    d = document.createElement("div");
    d.setAttribute("style", "float:left;");
    img = document.createElement("img");
    img.setAttribute("style", "width:"+80+"px;"+"height:"+80+"px;");
    img.setAttribute("src", "im_trees/"+arrayIM[i]);

    d.appendChild(img);

    document.getElementById("container").appendChild(d);

    img.setAttribute("id", "a" + i);
    img.setAttribute("class", "pintura");


     img.addEventListener("click", function(){
     cambiar(this);
    });


}
var f = document.getElementById("paint");

f.setAttribute("style", "float:bottom;");
var boton1 = document.createElement("input");
boton1.setAttribute("type", "button");
boton1.setAttribute("id", "1");
boton1.setAttribute("value", "Nothing");
var boton2 = document.createElement("input");
boton2.setAttribute("type", "button");
boton2.setAttribute("id", "2");
boton2.setAttribute("value", "Delete");
var boton3 = document.createElement("input");
boton3.setAttribute("type", "button");
boton3.setAttribute("id", "3");
boton3.setAttribute("value", "Smaller");
var boton4 = document.createElement("input");
boton4.setAttribute("type", "button");
boton4.setAttribute("id", "4");
boton4.setAttribute("value", "Bigger");

f.appendChild(boton1);
f.appendChild(boton2);
f.appendChild(boton3);
f.appendChild(boton4);



function cambiar(img){

    img2 = document.createElement("img");

    img2.height = 80;
    img2.height = img.height * 0.5;
    img2.width = 80;
    img2.setAttribute("src", img.src);



        f.appendChild(img2);










}
