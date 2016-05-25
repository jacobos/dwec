$(function(){
    var apellido , nombre;
    
    
$('#cuerpotecnico  .buscar').eq(0).on("click", function(){

    nombre = $(this).parent().parent().find('select').val().split(" ")[0];
     apellido = $(this).parent().parent().find('select').val().split(" ")[1];
    console.log(nombre);
    console.log(apellido);
$.ajax({
        
            url: 'php/consulta3.php',
            type: 'POST',
            success: function (response) {
                $('#cuerpotecnico tbody').html(response);
                funcionbotones();
       
            },
            data:{
            
            num: 0,
            nombre:nombre,
            apellido:apellido
            }
                
        });
    
});
    $('#cuerpotecnico .buscar').eq(1).on("click", function(){
    
var equipo = $(this).parent().parent().find('select').val();
               
$.ajax({
        
            url: 'php/consulta3.php',
            type: 'POST',
            success: function (response) {
                $('#cuerpotecnico tbody').html(response);
                funcionbotones();
           
            },
            data:{
            
            num: 1,
            equipo:equipo
            }
                
        });
    
});
 function funcionbotones(){
     $('#cuerpotecnico .btn-info').on("click", function(){

                 nombre = $(this).parent().siblings().eq(1).text();
               apellido = $(this).parent().siblings().eq(2).text();
        
                $(this).parent().siblings().eq(1).html('<input type="text" value="'+nombre+'">');
           $(this).parent().siblings().eq(2).html('<input type="text" value="'+apellido+'">');
               $(this).parent().html(' <a class="btn btn-small btn-primary" href="#"> <i class="icon-edit icon-large"></i> Guardar</a>');
$('#cuerpotecnico .btn-primary').on("click", function(){
    
     var nombre2 = $(this).parent().siblings().eq(1).find('input').val();
              var apellido2 = $(this).parent().siblings().eq(2).find('input').val();
    var funcion = $(this).parent().siblings().eq(4).text();
alert(nombre2+apellido2+funcion);
$.ajax({
        
            url: 'php/consulta3.php', 
            type: 'POST',
            success: function (response) {
               
                $('#cuerpotecnico .container').prepend('<div class="alert alert-success"><strong>EL usuario se ha modificado correctamente</strong></div>');
                setTimeout(6000,location.reload());
        
            },
            data:{
            
           num: 2,
            funcion:funcion, 
            nombre2: nombre2, 
            apellido2:apellido2,
            nombre: nombre,
            apellido: apellido
            }
                
        });
});
      
    
});
    
 }
    
    
});