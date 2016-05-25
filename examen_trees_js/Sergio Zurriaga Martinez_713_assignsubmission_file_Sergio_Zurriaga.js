var container = document.getElementById("container");
var paint = document.getElementById("paint");
var cont = 0,imagenClick1,srcImg;
var x;var y;
var big = false;
var small = false;
var noth = false;
var dele = false;
var todasImagenes2;
for(var i = 1 ; i < 13;i++)
{
	var img = document.createElement("img");
	img.setAttribute("src","im_trees/im"+i+".png");
	img.setAttribute("class","imagen");
	img.height = 100;
	img.width = 100;
	container.appendChild(img);
	
}
var divbottones = document.createElement("div");
var nothing = document.createElement("button");
var del = document.createElement("button");
var smaller = document.createElement("button");
var bigger = document.createElement("button");
bigger.innerHTML = "Bigger";
del.innerHTML = "Delete";
smaller.innerHTML = "Smaller";
nothing.innerHTML = "Nothing";
divbottones.appendChild(nothing);
divbottones.appendChild(del);
divbottones.appendChild(smaller);
divbottones.appendChild(bigger);
paint.appendChild(divbottones);

var todasImagenes = document.getElementsByClassName("imagen");
for(var i = 0; i < todasImagenes.length; i++)
{
    todasImagenes[i].onclick = function(){copiarImagen(this)};
}
function copiarImagen(imgClick)
{
		ini();
		imagenClick1 = imgClick;
		srcImg = imagenClick1.getAttribute("src");
		cont=1;
}

paint.onclick = function(){ponerImagen()};

function ponerImagen()
{

	if(cont==1)
	{
		var img2 = document.createElement("img");
		img2.setAttribute("src",srcImg);
		img2.setAttribute("class","imgPaint");
		img2.width = 100;
		img2.height = 100;
		resx = x-(img2.height/2);
		resy = y-(img2.height/2);
		img2.style.cssText = "position:absolute;top:"+resy+"px;left:"+resx+"px";
		paint.appendChild(img2);
	}
	
}
function imagenModi(imgMod)
{
	if(small)
	{
		if(imgMod.width>20)
		{
			imgMod.width = imgMod.width-20;
			imgMod.height = imgMod.height-20;
		}
		
	}
	else if(big)
	{
		imgMod.width = imgMod.width+20;
		imgMod.height = imgMod.height+20;
	}
	else if(dele)
	{
		document.getElementById("paint").removeChild(imgMod);
	}
	else if(noth)
	{
		big = false;
		small = false;
		noth = false;
		dele = false;	
	}

}
bigger.onclick = function(){
	big = true;	
	small = false;
	noth = false;
	dele = false;
	cont = 0;
	ini(1);
};
del.onclick = function(){
	big = false;	
	small = false;
	noth = false;
	dele = true;
	cont = 0;
	ini(1);
};
nothing.onclick = function(){
	big = false;	
	small = false;
	noth = true;
	dele = false;
	cont = 0;
	ini(1);
};
smaller.onclick = function(){
	big = false;	
	small = true;
	noth = false;
	dele = false;
	cont = 0;
	ini(1);
};
function ini(uno)
{
	if(uno==1)
	{
		todasImagenes2 = document.getElementsByClassName("imgPaint");
		for(var i = 0; i < todasImagenes2.length; i++)
		{
			todasImagenes2[i].onclick = function(){imagenModi(this)};
		}
	}
	else
	{
		todasImagenes2 = document.getElementsByClassName("imgPaint");
		for(var i = 0; i < todasImagenes2.length; i++)
		{
			todasImagenes2[i].onclick = null;
		}
	}
}
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
		 x = event.pageX;
		 y = event.pageY;
      // x position of the mouse --> event.pageX;
      // y position of the mouse --> event.pageY;
    };	