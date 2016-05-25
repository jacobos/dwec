var container, pain, img, imgs, butt, buttons, x, options, img_pain;

var options = ['', 0];
var imgs = ["im1.png", "im2.png", "im3.png", "im4.png", "im5.png", "im6.png", "im7.png", "im8.png", "im9.png", "im10.png", "im11.png", "im12.png"];
var buttons = ["Nothing", "Delete", "Smaller", "Bigger"];

for(x = 0; x<imgs.length; x = x+1) {
    
    img = document.createElement('img');
    img.setAttribute('src', 'im_trees/'+imgs[x]);
    img.setAttribute('width', '100px');
    
    container = document.getElementById('container');
    container.appendChild(img);
    
    img.onclick = function() {
        options[0] = this.getAttribute('src');
        //console.log(options[0]);
    };
}

for (x = 0; x<buttons.length; x = x+1) {
    
    butt = document.createElement('input');
    butt.setAttribute('type', 'button');
    butt.setAttribute('id', buttons[x]);
    butt.setAttribute('name', x);
    butt.setAttribute('value', buttons[x]);
    butt.setAttribute('style', 'z-index:9999;position:absolute;bottom:20px;left:'+(500 + x*80)+'px;');
    
    pain = document.getElementById('paint');
    document.body.appendChild(butt);
    
    butt.onclick = function() {
        options[1] = this.getAttribute('name');
        //console.log(options[1]);
    };
}

pain.onclick = function(e) {
    
    //console.log(options[1]);
    if(options[0] != '') {
        img_pain = document.createElement('img');
        img_pain.setAttribute('src', options[0]);
        img_pain.setAttribute('width', '80px');
        img_pain.setAttribute('style', 'position:absolute;top:'+(e.pageY-30)+'px;left:'+(e.pageX-50)+'px;');

        document.body.appendChild(img_pain);

        img_pain.onclick = function() {

            //console.log(options[1]);

            var opcion = options[1];

            if(opcion == 1) {
                //console.log('Remove');
                document.body.removeChild(this);

            }else if(opcion == 2){
                var size = this.width;
                this.setAttribute('width', (size*0.8));
                //console.log(size*1.5);

            }else if(opcion == 3){
                var size = this.width;
                this.setAttribute('width', (size*1.5));
                //console.log(size*0.8);

            }


        };
    }

    //console.log(e.pageX);
    //console.log(e.pageY);
    
};

