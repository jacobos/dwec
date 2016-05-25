/*global document */

// Create a new anonymous function, to use as a wrapper
(function () {
    // Defines that JavaScript code should be executed in "strict mode".
    // http://www.w3schools.com/js/js_strict.asp
    'use strict';

    //declare the variables
    var i,
        last_image = 1,
        num_click = 1,
        src_imagen_1,
        src_imagen_2,
        imagen_1,
        img,
        var_a_multiplicar;

    // create the pintar function
    function pintar(imagen) {
        //we create an array for the IMG nodes
        var im_array = [],
            granDiv;

        //we remove the granDiv element (after we create a new one, we 'clean' the body for every 'pintar'
        document.body.removeChild(document.getElementById("granDiv"));

        // we create the div element, granDiv
        granDiv = document.createElement("div");
        //we give it it's id
        granDiv.setAttribute("id", "granDiv");

        // we create the 9 IMG elements, with the attributes and events
        for (i = 0; i < 9; i = i + 1) {
            //create the IMG element
            img = document.createElement("img");
            var_a_multiplicar = (i < 3 ? 0 : (i < 6 ? 1 : 2));
            //this line above is the same as (we use it for the y position of the image (we are using the css sprite)
            /*
            if(i < 3){
                var_a_multiplicar = 0;
            }
            else{
                if(i < 6){
                    var_a_multiplicar = 1;
                }
                else{
                    var_a_multiplicar = 2;
                }
            }
            */

            //set the style of the image
            //we use the css sprite (only one image, we move it and give it a size)
            //http://www.w3schools.com/css/css_image_sprites.asp
            img.setAttribute("style", "width: 200px; height: 200px; background: url(images/0" + imagen + ".jpg) -" + i % 3 * 200 + "px -" + var_a_multiplicar * 200 + "px; border: 2px solid black");

            //give the image an id (we are actually not using it)
            img.setAttribute("id", i);

            //assign the img an onclick event
            img.onclick = function () {
                //on the first click (first image clicked)
                if (num_click === 1) {
                    //we store in the imagen_1 the IMG node clicked
                    imagen_1 = this;
                    // or you could do this
                    //id_imagen_1 = this.getAttribute("id");
                    src_imagen_1 = this.getAttribute("style");
                    num_click = 2;
                } else {
                    //second click, second image clicked, swap the images
                    //
                    src_imagen_2 = this.getAttribute("style");
                    this.setAttribute("style", src_imagen_1);
                    imagen_1.setAttribute("style", src_imagen_2);
                    // or you could do this
                    //document.getElementById(id_imagen_1).setAttribute("src", src_imagen_2);
                    num_click = 1;
                }
            };
            // we insert every image (img, "IMG" element) inside of the im_array (the array of images)
            // the 'push' method inserts an element at the end of an array
            im_array.push(img);
        }
        //if the "ordeando" button contains the "NO" string, we shuffle the array in a random way
        if (document.getElementById("ordenado").innerHTML === "NO") {
            // the sort function sorts the items of an array
            // with the function we pass inside we are sorting the array in a random way
            im_array.sort(function () {
                return Math.random() - 0.5;
            });
        }
        //(if the innerHTML of "ordenado" is YES the picture will be resolved directly)         
        //we append all the images inside the granDiv
        for (i = 0; i < im_array.length; i = i + 1) {
            granDiv.appendChild(im_array[i]);
        }

        // we append the granDiv to the body
        document.body.appendChild(granDiv);
    }

    //when we click on the "but" button
    document.getElementById("but").onclick = function () {
        //document.getElementById("sel_imagen").value
        // we get the value of the sel_imagen input (see the html)
        // the trim deletes the whitespaces on the sides, ex "  hola  " becomes "hola"
        if (document.getElementById("sel_imagen").value.trim() !== "") { //if it's not empty
            last_image = document.getElementById("sel_imagen").value.trim();
        }
        pintar(last_image);
    };

    //when we click on the 'ordenado' button we change the value from YES to NO and viceversa
    document.getElementById("ordenado").onclick = function () {
        if (document.getElementById("ordenado").innerHTML === "NO") {
            document.getElementById("ordenado").innerHTML = "YES";
        } else {
            document.getElementById("ordenado").innerHTML = "NO";
        }
    };

    //we call the "pintar" funciton with the value given (initially 1)
    pintar(last_image);
}());