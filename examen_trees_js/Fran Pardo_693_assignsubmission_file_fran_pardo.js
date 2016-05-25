document.onmousemove = function (event) {
	var dot, eventDoc, doc, body, pageX, pageY;
	event = event || window.event;
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
	x = (event.pageX - 25);
	y = (event.pageY - 25);
};
pintars = false;
smaller1 = false;
bigger1 = false;
delete1 = false;
pictures = new Array();
for (var x = 1; x <= 12; x++) {
	pictures[x - 1] = "im_trees/im" + x + ".png";
}
padre = document.getElementById("container");
paint = document.getElementById("paint");
x = 0;
y = 0;
paint.addEventListener("click", function () {
	pintar(this)
});

//NOTHING
div = document.createElement("button");
div.addEventListener("click", function () {
	nada()
});
div.setAttribute("style", "width:60px;height:30px;position:absolute:bottom:0px;left:20%;background-color:red;margin-bottom:30px;");
var texto = document.createTextNode("Nothing");
div.appendChild(texto);

//DELETE
div2 = document.createElement("button");
div2.addEventListener("click", function () {
	borrar()
});

div2.setAttribute("style", "width:60px;height:30px;position:absolute:bottom:0px;left:20%;background-color:red;margin-bottom:30px;");
var texto = document.createTextNode("Delete");
div2.appendChild(texto);

//SMALLER
div3 = document.createElement("button");
div3.addEventListener("click", function () {
	minimo()
});

div3.setAttribute("style", "width:60px;height:30px;position:absolute:bottom:0px;left:20%;background-color:red;margin-bottom:30px;");
var texto = document.createTextNode("Smaller");
div3.appendChild(texto);

//BIGGER
div4 = document.createElement("button");
div4.addEventListener("click", function () {
	maximo()
});
div4.setAttribute("style", "width:60px;height:30px;position:absolute:bottom:0px;left:20%;background-color:red;margin-bottom:30px;");
var texto = document.createTextNode("Bigger");
div4.appendChild(texto);

padre.appendChild(div);
padre.appendChild(div2);
padre.appendChild(div3);
padre.appendChild(div4);


for (x = 0; x < 12; x += 1) {
	img = document.createElement("img");
	img.setAttribute("style", "width:90px;height:90px;");
	img.setAttribute("src", pictures[x]);
	img.addEventListener("click", function () {
		func(this)
	});
	padre.appendChild(img);
}

function nada() {
	pintars = false;
	smaller1 = false;
	bigger1 = false;
	delete1 = false;
}

function minimo() {
	pintars = false;
	smaller1 = true;
	bigger1 = false;
	delete1 = false;
}

function maximo() {
	smaller1 = false;
	bigger1 = true;
	delete1 = false;
	pintars = false;
}

function borrar() {
	smaller1 = false;
	bigger1 = false;
	delete1 = true;
	pintars = false;
}

function modificar(este) {
	if (pintars == false) {
		if (smaller1 == true) {
			este.width = (este.width * 0.75);
			este.height = (este.height * 0.75);
		}
		if (bigger1 == true) {
			este.width = (este.width * 1.5);
			este.height = (este.height * 1.5);
		} else if (delete1 == true) {
			este.setAttribute("style", "width:0px;height:0px;");
		}
	}
}

function func(este) {
	pintars = true;
	imagen_insertar = este.getAttribute("src");
}

numero = 0;

function pintar(este) {
	if (pintars) {
		numero += 1;
		img2 = document.createElement("img");
		img2.setAttribute("src", imagen_insertar);
		img2.setAttribute("style", "position:absolute;top:" + y + "px;left:" + x + "px;");
		img2.width = 50;
		img2.height = 50;
		img2.setAttribute("id", "id" + numero);
		img2.addEventListener("click", function () {
			modificar(this)
		});
		paint.appendChild(img2);
	}
}