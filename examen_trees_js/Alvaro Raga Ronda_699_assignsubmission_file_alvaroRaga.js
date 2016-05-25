

var contenedor= document.getElementById("container");
var pintar= document.getElementById("paint"), doble;
pintar.setAttribute("position", "absolute");

	for(var i=1; i<=12; i++){
	var imag= document.createElement("img");
	imag.setAttribute("src", "im_trees/im"+i+".png");
	imag.setAttribute("width", "85px");
	imag.setAttribute("heigth", "85px");
	imag.setAttribute("class", "imagen");
		
	contenedor.appendChild(imag);
		
};

var imagenes= document.getElementsByClassName("imagen");
for(var a=0; a<imagenes.length; a++){
imagenes[a].onclick= function () {llevar(this)};
}


var boleano;

function llevar(click){

	doble= click.cloneNode(true);

		document.onmousemove= function(e){
				
			doble.style.left= e.pageX;
			doble.style.top= e.pageY;
			pintar.appendChild(doble);
			//console.log(click);
	}
};
var div= document.createElement("div");
div.setAttribute("style", "position: absolute; top: 10px; left: 300px;");
document.body.appendChild(div);

var boton, boton1, boton2, boton3;

boton= document.createElement("button");
boton.setAttribute("type", "button");
var info= document.createTextNode("Nothing");
boton.appendChild(info);

div.appendChild(boton);

boton1= document.createElement("button");
boton1.setAttribute("type", "button");
var info= document.createTextNode("Delete");
boton1.appendChild(info);

boton1.onclick= function(){borrar(this)};
div.appendChild(boton1);


boton2= document.createElement("button");
boton2.setAttribute("type", "button");
var info= document.createTextNode("Smaller");
boton2.onclick= function(){peque(this)};
boton2.appendChild(info);

div.appendChild(boton2);

boton3= document.createElement("button");
boton3.setAttribute("type", "button");
var info= document.createTextNode("Bigger");
boton3.onclick= function(){grande(this)};
boton3.appendChild(info);

div.appendChild(boton3);

var elementos= document.getElementById("paint").children;

function borrar(){
	for(var a=0; a<elementos.length; a++){
		elementos[a].onclick= function(){borrado(this)};
		console.log(elementos[a])
	}
	function borrado(click){
		pintar.removeChild(click);
		console.log("HI");
		console.log(click);
	};
}

function peque(){
	for(var a=0; a<elementos.length; a++){
		elementos[a].onclick= function(){borrado(this)};
		console.log(elementos[a])
	}
	function borrado(click){
	
		click.height= click.height*0.5;
		click.width= click.width*0.5;
		console.log("HI");
		console.log(click);
	};
}
function grande(){
	for(var a=0; a<elementos.length; a++){
		elementos[a].onclick= function(){borrado(this)};
		console.log(elementos[a])
	}
	function borrado(click){
	
		click.height= click.height*2;
		click.width= click.width*2;
		console.log("HI");
		console.log(click);
	};
}