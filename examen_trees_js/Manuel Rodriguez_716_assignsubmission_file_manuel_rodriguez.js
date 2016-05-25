var left_side = document.getElementById("container");
var right_side = document.getElementById("paint");
var img;
var sty_img;
var array_right;
var img_right_side=0;
var sty_img2;
var n_clicks = 0;
var div_button;
var imagen_copy;
var sty_button;
var b_nothing;
var b_delete;
var b_bigger;
var b_smaller;
var b_nothing_node;
var b_delete_node;
var b_bigger_node;
var b_smaller_node;
var borrar;
var crecer;
var reducir;
var ancho;
var mleft;
var mtop;
var alto;
for (i = 0; i < 12; i++) {
    sty_img = "float:left; width:98px; height:98px; cursor:pointer; margin-left:20px;";
    img = document.createElement("img");
    img.setAttribute("style", sty_img);
    img.setAttribute("imagen_n", (i + 1));
    img.setAttribute("class", "imgs");
    img.setAttribute("src", "im_trees/im" + (i + 1) + ".png");
    left_side.appendChild(img);
}


var array_imagenes = document.getElementsByClassName("imgs");

sty_button = "width:80px; height:27px;";
sty_div = "width:330px; height:30px; margin-left:400px;position:fixed;";

div_button = document.createElement("div");
div_button.setAttribute("style", sty_div);

b_nothing = document.createElement("button");
b_delete = document.createElement("button");
b_bigger = document.createElement("button");
b_smaller = document.createElement("button");

b_nothing_node = document.createTextNode("NOTHING");
b_delete_node = document.createTextNode("DELETE");
b_bigger_node = document.createTextNode("BIGGER");
b_smaller_node = document.createTextNode("SMALLER");

b_nothing.setAttribute("style", sty_button);
b_delete.setAttribute("style", sty_button);
b_bigger.setAttribute("style", sty_button);
b_smaller.setAttribute("style", sty_button);

b_nothing.appendChild(b_nothing_node);
b_delete.appendChild(b_delete_node);
b_bigger.appendChild(b_bigger_node);
b_smaller.appendChild(b_smaller_node);

div_button.appendChild(b_nothing);
div_button.appendChild(b_delete);
div_button.appendChild(b_bigger);
div_button.appendChild(b_smaller);

right_side.appendChild(div_button);


//INTERFAZ CREADA

function f1(clicked) {
    if (n_clicks == 0) {
        primerclick = clicked.getAttribute("imagen_n");
        imagen_copy = clicked.getAttribute("src");
    } else {
        n_clicks = 0;
    }
}

for (var i = 0; i < array_imagenes.length; i++) {
    array_imagenes[i].onclick = function () {
        f1(this)
    };
}

document.onmousemove = function (event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
            (doc && doc.scrollTop || body && body.scrollTop || 0) -
            (doc && doc.clientTop || body && body.clientTop || 0);
    }

    function f2(clicked) {
        sty_img2 = "width:90px; height:90px; position:absolute; top:"+(event.pageY)+"px; left:"+(event.pageX)+"px;";
        img.setAttribute("left", event.pageX);
        img.setAttribute("top", event.pageY);
        img = document.createElement("img");
        img.setAttribute("style", sty_img2);
        img.setAttribute("class", "img_right");
        img.setAttribute("numero", img_right_side);
        img.setAttribute("src", imagen_copy);
        right_side.appendChild(img);
        img_right_side++;
        array_right = document.getElementsByClassName("img_right");
        for (var i = 0; i < array_right.length; i++) {
            array_right[i].onclick = function () {
               if(borrar==true){
                sty_borra = "display:none;";
                this.setAttribute("style", sty_borra);
               }
               else if(crecer==true){
                  ancho=this.width;
                  alto=this.height;
                  mtop = this.getAttribute("top");
                  mleft = this.getAttribute("left");
                  this.setAttribute("style", "position:absolute; width:"+(ancho+10)+"px; height:"+(alto+10)+"px; top:"+mtop+"px; left:"+mleft+"px;");
               }
               else if(reducir==true){
                   ancho=this.width;
                   alto=this.height;
                  mtop = this.getAttribute("top");
                  mleft = this.getAttribute("left");
                  this.setAttribute("style", "position:absolute; width:"+(ancho-10)+"px; height:"+(alto-10)+"px; top:"+mtop+"px; left:"+mleft+"px;");
               }
            };
        }
    }
    for (var i = 0; i < array_imagenes.length; i++) {
        right_side.onclick = function () {
            f2(this)
        };
    }
    // x position of the mouse --> event.pageX;
    // y position of the mouse --> event.pageY;
};


b_nothing.onclick = function () {
    borrar=false;
    crecer=false;
    reducir=false;
};

b_delete.onclick = function () {
    borrar=true;
    crecer=false;
    reducir=false;
};
b_bigger.onclick = function () {
    crecer=true;
    reducir=false;
    borrar=false;
};
b_delete.onclick = function () {
    reducir=true;
    crecer=false;
    borrar=false;
};

