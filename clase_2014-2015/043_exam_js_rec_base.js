/*global document*/
(function () {
	function getCol() {
		return "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + "0.8)";
	}
    
    var myDiv,
		i = 0,
		j,
		k,
		valor,
		myDivO,
		first = 0,
		unC,
		color;
		        
    myDivO = document.createElement("div");
	myDivO.setAttribute("class", "bigDiv");
	myDivO.style.backgroundColor = getCol();
	document.body.appendChild(myDivO);
    for (i = 0; i < 6; i = i + 1) {
		myDiv = document.createElement("div");
		myDiv.setAttribute("class", "divis");
		valor = "top: " + i * 20 + "px; left: " + i * 20 + "px";
		myDiv.setAttribute("style", valor);
		myDivO.appendChild(myDiv);
	}
	
}());
