/*global document */

(function () {
  'use strict';

  var files_string = "05_coral_reef_scene.jpg||100BestNatureFullHDWallpapers1920x1080pWwwFreewallpapers2BlogspotCom.jpg||10.jpg||12C2414051S50-1FO.jpg||18.jpg||1.jpg||355c92d024ot.com_.jpg.jpg||47ti38o1wlasap2.jpg||4911008-green-grass-nature-background-shot.jpg||52607284098e929ca37dd3d8f69eb30240351e2.jpg||animals_voegel_papageien-normal.jpg||are_we_there_yet_elephants-normal.jpg||At_The_Beach_Hd_Wallpaper_1920X1200.jpg||daffodils-garden-wallpaper.jpg",
    myArray,
    i,
    img,
    d;
  myArray = files_string.split("||"); // split the string into an array, using || as the separator

  // go through the elements in the array
  for (i = 0; i < myArray.length; i = i + 1) {
    d = document.createElement("div");
    img = document.createElement("img"); //create img element
    img.setAttribute("src", "images/" + myArray[i]); //set src attribute to the given in the string
    d.appendChild(img);
    document.getElementById("bigMuzzy").appendChild(d); // append the image to the container
    d.setAttribute("class", "flex-item"); //give the class to align vertically in the middle
    img.setAttribute("id", "a" + i); //we are not using this, but we give every image an id
    img.onclick = function () {
      this.setAttribute("style", "display:none"); //hide the image onlick
      // deleting the node would be like this
      // this.parentNode.removeChild(this);
    };
  }
}());