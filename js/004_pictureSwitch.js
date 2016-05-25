var pictures = document.getElementsByClassName("picture");

var click = true,
  imOld,
  imNew;

//<div class="picture" style="background: yellow;width: 100px; height: 100px">

//clicked is an element with the class picture
function change(clicked) {
  //if it's the first click
  if (click) {
    imOld = clicked;
    click = false;
  } else {
    imNew = clicked.getAttribute("style");
    clicked.setAttribute("style", imOld.getAttribute("style"));
    imOld.setAttribute("style", imNew);
    click = true;
  }
}

for (var i = 0; i < pictures.length; i++) {
  pictures[i].onclick = function () {
    change(this)
  };
}