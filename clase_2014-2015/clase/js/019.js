/*global document */

(function () {
    'use strict';

    var files_string = "05_coral_reef_scene.jpg||100BestNatureFullHDWallpapers1920x1080pWwwFreewallpapers2BlogspotCom.jpg||10.jpg||12C2414051S50-1FO.jpg||18.jpg||1.jpg||355c92d024ot.com_.jpg.jpg||47ti38o1wlasap2.jpg||4911008-green-grass-nature-background-shot.jpg||52607284098e929ca37dd3d8f69eb30240351e2.jpg||animals_voegel_papageien-normal.jpg||are_we_there_yet_elephants-normal.jpg||At_The_Beach_Hd_Wallpaper_1920X1200.jpg||daffodils-garden-wallpaper.jpg",
        myArray,
        index,
        i,
        num_click = 1,
        src_imagen_1,
        src_imagen_2,
        id_imagen_1,
        imagen_1,
        img;
    myArray = files_string.split("||");

    for (i = 0; i < 9; i = i + 1) {
        img = document.createElement("img");
        img.setAttribute("src", "images/" + myArray[i]);
        document.getElementById("granDiv").appendChild(img);
        img.setAttribute("id", i);
        img.onclick = function () {
            if (num_click === 1) {
                imagen_1 = this;
                // or you could do this
                //id_imagen_1 = this.getAttribute("id");
                src_imagen_1 = this.getAttribute("src");
                num_click = 2;
            } else {
                src_imagen_2 = this.getAttribute("src");
                this.setAttribute("src", src_imagen_1);
                imagen_1.setAttribute("src", src_imagen_2);
                // or you could do this
                //document.getElementById(id_imagen_1).setAttribute("src", src_imagen_2);
                num_click = 1;
            }
        };
    }





}());