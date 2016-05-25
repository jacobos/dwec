
     $(function(){
    var numero= 0;
jsonObject={};
    var json= $.getJSON("file.json", function(data) {
     
          }).done(function(dat) {
          //en dat tenemos la respuesta del servidor, podemos verlo en la consola
            jsonObject = dat;
      
          numero = dat.num ;
       
     
         $.ajax({
        
            url: 'php/cambiopag.php',
            type: 'POST',
            success: function (response) {
        
              $('nav').after(response);
              
            },
            data: {
                cambiopag: numero
            
            }
        });
function cambiarpag(numero2){
    jsonObject.num = numero2;

   
      $.ajax({
        url: "php/servidor.php",
          success:function (response){
      location.reload();
      },
        data: {
           
          json: JSON.stringify(jsonObject) 
        },
        type: "POST"
      });
  

}
$('#inicio').on('click', function(){ 
    
    
cambiarpag(0);
});
    
$('#jugadores').on('click', function(){ 
    
   
cambiarpag(2);
});
$('#categorias').on('click', function(){  
cambiarpag(1);
});
        $('#cuerpotecnico').on('click', function(){  
cambiarpag(3);
});
    $('#cerrar').on('click', function(){ 
 $.ajax({
         
            url: 'php/cerrar.php', 
            type: 'POST',
            success: function (response) {
          location.reload();
       
            }
        });
        });
        }).fail(function() {
          console.log("error");
        });

        

         
   });



