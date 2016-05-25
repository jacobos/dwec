/*global document */

// Create a new anonymous function, to use as a wrapper

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel

(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

(function () {
    // Defines that JavaScript code should be executed in "strict mode".
    // http://www.w3schools.com/js/js_strict.asp
    'use strict';

    //declare the variables
    var last_image = 1,
        img,
        granDiv = document.getElementById("granDiv");


    // create the pintar function
    function pintar(imagen) {

        var interval,
            i,
            imagenes,
            imagenes_tam,
            imagen_activa;

        //we create and append our images
        for (i = 1; i < 10; i++) {
            img = document.createElement("img");
            img.setAttribute("src", "http://jacobo.solvam.net/clase/images/0" + i + ".jpg");
            // 02.jpg 03.jpg etc.
            granDiv.appendChild(img);
        }
        imagenes = document.getElementsByTagName("img");

        granDiv.style.backgroundImage = "url(" + imagenes[imagenes.length - 1].getAttribute("src") + ")";

        imagenes_tam = imagenes.length;

        // we store the image we are going to hide/show
        var imagen_activa = imagenes_tam - 1;

        // input button nextImage
        var nextIm = document.createElement("input");
        nextIm.setAttribute("style", "position: absolute; width: 130px; top: 45%; left: 470px; padding: 10px;");
        nextIm.setAttribute("type", "button");
        nextIm.setAttribute("value", "Next Image");
        granDiv.appendChild(nextIm);

        // input button prevImage
        var prevIm = document.createElement("input");
        prevIm.setAttribute("style", "position: absolute; width: 130px; top: 45%; left: 0%; padding: 10px;");
        prevIm.setAttribute("type", "button");
        prevIm.setAttribute("value", "Previous Image");
        granDiv.appendChild(prevIm);

        function preIm() {
            if (imagen_activa == 0) {
                //fadeToggle --> http://api.jquery.com/fadetoggle/
                $(imagenes[0]).fadeToggle();
                imagen_activa = imagenes_tam - 1;
                // http://api.jquery.com/fadein/
                $(imagenes[imagen_activa]).fadeIn(
                    //after the fadeIn is done we call the function
                    function () {
                        // http://api.jquery.com/show/
                        // with $("img") we get all the img elements 
                        // (like document.getElementsByTagName("img"))
                        // --> you could also do $(document.getElementsByTagName("img")).show()
                        $("img").show();
                    }
                );

            } else {
                $(imagenes[imagen_activa]).fadeToggle();
                imagen_activa = imagen_activa - 1;
            }
        }

        function nextImage() {
            if (imagen_activa == imagenes_tam - 1) {
                imagen_activa = 0;
                $(imagenes).hide();
                $(imagenes[imagen_activa]).fadeIn();
            } else {
                imagen_activa = imagen_activa + 1;
                $(imagenes[imagen_activa]).fadeIn();
            }
        }
        // if you don't know what setInteval is
        // --> http://www.w3schools.com/js/js_timing.asp
        // --> https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.setInterval
        // you call a function every x miliseconds, in this case we call the preIm function every second
        
        var fps = 0.5;

        function draw() {
            setTimeout(function () {
                requestAnimationFrame(draw);
                // Drawing code goes here
                preIm();
            }, 1000 / fps);
        }
        draw();
        
        //timing events
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.setInterval
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.clearInterval
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.setTimeout
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.clearTimeout

        granDiv.onmouseover = function () {
            //clearInterval(interval);
        }
        granDiv.onmouseout = function () {
            //clearInterval(interval);
            //interval = setInterval(preIm, 2000);
        }

        prevIm.onclick = function () {
            //when we click on an image we show the previous one
            preIm();
        }
        nextIm.onclick = function () {
            nextImage();
        }
    }

    pintar(last_image);
}());