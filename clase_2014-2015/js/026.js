/*global document */

jQuery(document).ready(function () {
    var chT = document.createElement("input");
    chT.setAttribute("style", "position: absolute; width: 130px; top: 45%; left: 470px; padding: 10px;");
    chT.setAttribute("type", "button");
    chT.setAttribute("value", "change text");
    document.body.appendChild(chT);

    $(chT).on("click", function () {
        $("td").text("CHANGED");
    });
    
    $(chT).on("click", function () {
        console.log("HOLA");
    });

});