var uno = document.getElementById("name1"),
  ds = document.getElementById("name2");

function exchange() {
  var aux = ds.innerHTML;
  ds.innerHTML = uno.innerHTML;
  uno.innerHTML = aux;
}

var but = document.getElementById("but")
but.addEventListener("click", function(){
  exchange();
});