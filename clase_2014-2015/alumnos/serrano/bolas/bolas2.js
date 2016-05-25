//Math.floor((Math.random() * 10) + 1);

jQuery(document).ready(function () {
     var colors = Array("#fb2900", "#ff7800", "#fff43b", "#8dfa30", "#01c86a", "#00d7b2", "#0092e3", "#002f7e", "#390e73");
    var canvas = $('#canvasElem')[0],
        ctx = canvas.getContext('2d');
    $('#canvasElem').css({
        "background" : "#000"
    });
    var  mover = false;
    
     $("body").css({
        "overflow" : "hidden"
    });
    
    canvas.width = $("body").width();
    canvas.height = $(window).height()-20;
    var ax = 0,
        ay = 0;
    var comidas = 0;
    var empezado = false;
    var radiojugador = Math.floor((Math.random() * 15) + 10);
    var  cantidadbolas =  Math.floor((Math.random() * 70) + 60);

    var dt = 1 / 60;
    var pelotas = [];
     
    for(j = 0; j < cantidadbolas; j++){
         var pelota = {
            "x": Math.floor(Math.random() * canvas.width)  ,
            "y":  Math.floor(Math.random() *  canvas.height),
              "vx": Math.floor((Math.random() * 200) + (-100)),
            "vy":  Math.floor((Math.random() * 200) + (-100)),
            "r": Math.floor(Math.random(10)*40),
            "color":colors[Math.floor(Math.random(0)*8)]
        };
        
      
        var number = 1 + Math.floor(Math.random() * 6);
       
        pelotas.push(pelota);
    }
    
  
      var jugador = {
            "x":  canvas.width/2 ,
            "y":  canvas.height/2,
            "color": "#fff",
            "r": radiojugador
         };
    
    function animLoop() {
 
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (i = 0; i < pelotas.length; i++) {
         
            pelota = pelotas[i];
            pelota.vx += ax * dt;
            pelota.vy += ay * dt;
            pelota.x += pelota.vx * dt;
            pelota.y += pelota.vy * dt;

            if (pelota.x < 10) {
                pelota.x = 10;
                pelota.vx *= -0.8;
            } else if (pelota.x > canvas.width - 10) {
                pelota.x = canvas.width - 10;
                pelota.vx *= -0.8;
            }

            if (pelota.y < 10) {
                pelota.y = 10;
                pelota.vy *= -0.8;
            } else if (pelota.y > canvas.height - 10) {
                pelota.y = canvas.height - 10;
                pelota.vy *= -0.8;
            }
            
            if ((pelota.y+pelota.r > jugador.y -  jugador.r && pelota.y-pelota.r < jugador.y +  jugador.r &&
                pelota.x+pelota.r > jugador.x -  jugador.r && pelota.x-pelota.r < jugador.x +  jugador.r) &&
                jugador.r > pelota.r && empezado == true){
                  pelotas[i] = {};
                  
               jugador.r = radiojugador + 0.4;
                radiojugador = jugador.r;
                comidas++;
            }else if ((jugador.y -  jugador.r < pelota.y+pelota.r && jugador.y + jugador.r > pelota.y-pelota.r &&
                jugador.x -  jugador.r < pelota.x+pelota.r && jugador.x +  jugador.r > pelota.x-pelota.r) &&
                pelota.r > jugador.r  && empezado == true){
            
                jugador = {};
                alert("Has conseguido comer "+comidas+" bolas, acepta para comenzar"); 
                location.reload(); 
            }
            
            if(comidas == cantidadbolas){
                alert("Has ganado!! comiste "+comidas+" bolas "); 
                comidas =0;
                jugador = {};
                location.reload(); 
              
            }
            
           
            
            ctx.beginPath();
            ctx.arc(pelota.x, pelota.y, pelota.r, 0, 256);
            ctx.fillStyle = pelota.color; 
            ctx.fill();
                
        }
         
       
        
            ctx.fillStyle = jugador.color;     
            ctx.arc(jugador.x,jugador.y, jugador.r, 0, 256);
            ctx.fill();
        
         
        setTimeout(animLoop, dt * 1000);
    }

    animLoop();

    
    $(canvas).on({
          mousedown: function(e) {
            event.preventDefault();
              if((e.offsetY > jugador.y -  jugador.r && e.offsetY <  jugador.y +  jugador.r) && (e.offsetX >  jugador.x -  jugador.r && e.offsetX <  jugador.x +  jugador.r)){
                 mover  = true; 
                  
            }
              
          },
            mouseup: function(e3) {
             mover  = false;
          },
          mousemove: function(e2) {
             if(mover  == true){
                 jugador.y = e2.offsetY;
                 jugador.x = e2.offsetX;
                 empezado = true;
                }       
              
          },
         
        });

});