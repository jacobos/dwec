/*global document*/
(function () {
	function getCol() {
		return "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 		255) + "," + Math.floor(Math.random() * 255) + "," + "0.8)";
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

	for(k = 0; k < 6; k = k + 1){
		for(j = 0; j < 4; j = j + 1){
			myDivO = document.createElement("div");
			myDivO.setAttribute("class", "bigDiv");			
			myDivO.setAttribute("style", "top: "+ (50 + j * 150) + "px;" + "left: " + (50 + k * 150) + "px")
			myDivO.style.backgroundColor = getCol();
			myDivO.onclick = function(){
				if(first == 0){
					unC = this;
					first = 1;
				}
				else{
					first = 0;
					color = unC.style.backgroundColor;
					unC.style.backgroundColor = this.style.backgroundColor;
					this.style.backgroundColor = color;
				}
			}
			document.body.appendChild(myDivO);
			for (i = 2; i < 6; i = i + 1) {
				myDiv = document.createElement("div");
				myDiv.setAttribute("class", "divis");
				valor = "top: " + i * 20 + "px; left: " + i * 20 + "px";
				myDiv.setAttribute("style", valor);
				myDiv.style.backgroundColor = getCol();
				myDivO.appendChild(myDiv);
				myDiv.onclick = function(){
					this.parentNode.removeChild(this);
				}
			}
		}
	}
	
}());
