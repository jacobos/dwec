/*global document */

(function () {
    'use strict';

    function createPes(elementType, amount, theClass, appendWhere) {
        var i,
            ps,
            text;

        for (i = 0; i < amount; i = i + 1) {

            ps = document.createElement(elementType);
            ps.setAttribute("class", theClass);
            text = document.createTextNode("elemento " + elementType + " " + i);
            ps.appendChild(text);

            appendWhere.appendChild(ps);
        }
    }

    function changeColorTo(theClass, classAtt, prop) {
        var but = document.createElement("button"),
            text;
        document.body.appendChild(but);
        text = document.createTextNode("boton: " + theClass);
        but.appendChild(text);

        but.onclick = function () {
            var pes = document.getElementsByClassName(theClass),
                j;
            for (j = 0; j < pes.length; j = j + 1) {
                pes[j].style[classAtt] = prop;
            }
        };
    }

    changeColorTo("pes1", "background", "blue");
    changeColorTo("pes2", "color", "blue");
    changeColorTo("pes3", "color", "green");
    changeColorTo("pes4", "color", "red");

    createPes("p", 8, "pes1", document.body);
    createPes("div", 4, "pes2", document.body);
    createPes("p", 2, "pes3", document.body);
    createPes("p", 3, "pes4", document.body);



    var myFirstObject = {
        0: 64,
        background: "#7ec",
        color: "blue"
    };
    //equivalent to
    var myFirstObject = {};
    myFirstObject[0] = 64;
    myFirstObject.background = "#7ec";
    myFirstObject.color = "blue";


    $(document.body).fadeOut()
    //    Object { 0: <body>, length: 1 }
    $(document.body).fadeIn(2000)
    //    Object { 0: <body>, length: 1 }
    $(document.body).append
    //    function .append()
    $(document.body).append("write whatever you want")
    //    Object { 0: <body>, length: 1 }
    document.body.appendChild(document.createTextNode("write whatever you want2"))
    //    #text "write whatever you want2"
    var p =  document.createElement("p")
    //    undefined
    var t = document.createTextNode("my text")
    //    undefined
    p.appendChild(t)
    //    #text "my text"
    document.body.appendChild(p)
    //    <p>
    $(document.body).append("<p> my text2 </p>")
    //    Object { 0: <body>, length: 1 }
    p.style.background = "#eee"
    //    "#eee"
    var text3 = $("<p>my text3</p>")
    //    undefined
    text3
    //    Object { 0: <p>, length: 1 }
    $(document.body).append(text3)
    //    Object { 0: <body>, length: 1 }
    text3.css("background", "#7aa")
    //    Object { 0: <p>, length: 1 }
    text3.css("color", "#fff")
    //    Object { 0: <p>, length: 1 }
    text3.css
    //    function .css()
    text3.css({background: "red", color: "blue"});
    //    Object { 0: <p>, length: 1 }
    text3.css({background: "#7ec", color: "blue"});
    //    Object { 0: <p>, length: 1 }
    typeof {}
    //    "object"
    var myFirstObject = {
            background: "#7ec",
            color: "blue"
    };
    //    undefined
    myFirstObject.background
    //    "#7ec"
    myFirstObject["background"]
    //    "#7ec"
    myFirstObject[0]
    //    undefined
    text3
    //    Object { 0: <p>, length: 1 }
    text3[0]
    //    <p style="background: rgb(119, 238, 204) none repeat scroll 0% 0%; color: blue;">
    text3[1]
    //    undefined
    text3[1] = "vict"
    //    "vict"
    text3
    //    Object { 0: <p>, 1: "vict", length: 1 }
    text3.length === text3["length"]
    //    true
    text3.length === text3[length]
    //    false
    text3.length
    //    1
    $("p").length
    //    16
    $("p")
    //    Object { 0: <p.pes1>, 1: <p.pes1>, 2: <p.pes1>, 3: <p.pes1>, 4: <p.pes1>, 5: <p.pes1>, 6: <p.pes1>, 7: <p.pes1>, 8: <p.pes3>, 9: <p.pes3>, 8 más… }
    $("p")[0]
    //    <p class="pes1">
//$("p").0
//SyntaxError: missing ; before statement
    myFirstObject[0] = "paco"
    //    "paco"
    myFirstObject
    //    Object { 0: "paco", background: "#7ec", color: "blue" }
    myFirstObject[0]
    //    "paco"
    myFirstObject["0"]
    //    "paco"


})();