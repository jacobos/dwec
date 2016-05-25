$(function(){
    var apellido , nombre;
    
    $('#anadirjugador .btn-warning').eq(0).on("click", function(){
     
        var dni = $('#anadirusuario input').eq(0).val();
         var nombre = $('#anadirusuario input').eq(1).val();
         var apellido = $('#anadirusuario input').eq(2).val();
         var fecha_inscripcion = $('#anadirusuario input').eq(3).val();
         var equipo = $('#anadirusuario select').val();

        $.ajax({
        
            url: 'php/consulta.php',
            type: 'POST',
            success: function (response) {
   
                
                
             $('#anadirusuario').find('div').fadeIn().delay(1000).fadeOut();
                location.reload();         
       
            },
            data:{
            
            num:3,
            dni: dni,
            nombre:nombre,
            apellido:apellido,
            fecha_inscripcion: fecha_inscripcion,
            equipo: equipo
            }
                
        }); 
        
    });
    
$('#jugadores  .buscar').eq(0).on("click", function(){

    nombre = $(this).parent().parent().find('select').val().split(" ")[0];
     apellido = $(this).parent().parent().find('select').val().split(" ")[1];
 
$.ajax({
        
            url: 'php/consulta.php',
            type: 'POST',
            success: function (response) {
                $('#jugadores tbody').html(response);
                funcionbotones();
       
            },
            data:{
            
            num: 0,
            nombre:nombre,
            apellido:apellido
            }
                
        });
    
});
    $('#jugadores .buscar').eq(1).on("click", function(){
    
var equipo = $(this).parent().parent().find('select').val();

$.ajax({
        
            url: 'php/consulta.php',
            type: 'POST',
            success: function (response) {
                $('#jugadores tbody').html(response);
                funcionbotones();
           
            },
            data:{
            
            num: 1,
            equipo:equipo
            }
                
        });
    
});
 function funcionbotones(){
     $('#jugadores .btn-info').on("click", function(){

               nombre = $(this).parent().siblings().eq(1).text();
               apellido = $(this).parent().siblings().eq(2).text();
                $(this).parent().siblings().eq(1).html('<input type="text" value="'+nombre+'">');
           $(this).parent().siblings().eq(2).html('<input type="text" value="'+apellido+'">');
               $(this).parent().html(' <a class="btn btn-small btn-primary" href="#"> <i class="icon-edit icon-large"></i> Guardar</a>');
$('#jugadores .btn-primary').on("click", function(){
     var nombre2 = $(this).parent().siblings().eq(1).find('input').val();
              var apellido2 = $(this).parent().siblings().eq(2).find('input').val();
    var dni = $(this).parent().siblings().eq(4).text();
    
$.ajax({
        
            url: 'php/consulta.php', 
            type: 'POST',
            success: function (response) {
               
                $('#jugadores .container').prepend('<div class="alert alert-success"><strong>EL usuario se ha modificado correctamente</strong></div>');
                setTimeout(6000,location.reload());
        
            },
            data:{
            
           num: 2,
            dni:dni,
            nombre2: nombre2,
            apellido2:apellido2
            }
                
        });
});
      
    
});
        $('#jugadores .btn-danger').on("click", function(){

    var dni = $(this).parent().siblings().eq(4).text();
    
$.ajax({
        
            url: 'php/consulta.php', 
            type: 'POST',
            success: function (response) {
              
                $('#jugadores .container').prepend('<div class="alert alert-success"><strong>EL usuario ha sido eliminado correctamente</strong></div>');
                setTimeout(10000,location.reload());
        
            },
            data:{
            
           num: 4,
            dni:dni
            }
                
        });
});
 }
    
    
});