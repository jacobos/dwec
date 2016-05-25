var container = document.getElementById("container");
var paint = document.getElementById("paint");



/*		2		*/
for (i = 1; i < 13; i++) {
	imagenes = document.createElement("IMG");
	container.appendChild(imagenes);
	imagenes.setAttribute("id", "img" + i);
	imagenes.setAttribute("src", "im_trees/im" + i + ".png");
	imagenes.setAttribute("heigth", "75");
	imagenes.setAttribute("width", "75");
}
/*		/2		*/



/*		3		*/
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
	//console.log(event.pageX);
};

img = document.createElement("img");
img.height = 500;
img.height = img.height * 0.5;
img.width = 500;
/*		/3		*/



/*		4		*/
for (var o = 1; o < 5; o++) {
	var btn = document.createElement("BUTTON");
	paint.appendChild(btn);
	btn.setAttribute("id", "btn" + o);
}

document.getElementsByTagName("BUTTON")[0].appendChild(document.createTextNode("Nothing"));
document.getElementsByTagName("BUTTON")[1].appendChild(document.createTextNode("Delete"));
document.getElementsByTagName("BUTTON")[2].appendChild(document.createTextNode("Smaller"));
document.getElementsByTagName("BUTTON")[3].appendChild(document.createTextNode("Bigger"));
/*		/4		*/



/*	5,6,7,8		*/
document.getElementById("btn1").onclick = function nothing() {
	alert("nothing");
};
document.getElementById("btn2").onclick = function del() {
	alert("delete");
};
document.getElementById("btn3").onclick = function smaller() {
	alert("smaller");
};

document.getElementById("btn4").onclick = function bigger() {
	alert("bigger");
};
/*	/5,/6,/7,/8	*/
