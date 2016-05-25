$(function(){
    var apellido , nombre;
    
    $('#anadirequipo .btn-warning').eq(0).on("click", function(){
     
        var nombre = $('#anadirequipo input').eq(0).val();
         var entrenadornom = $('#anadirequipo input').eq(1).val();
         var entrenadorap = $('#anadirequipo input').eq(2).val();
         var delegadonom = $('#anadirequipo input').eq(3).val();
         var delegadoap = $('#anadirequipo input').eq(4).val();
         var categoria = $('#anadirequipo select').val();
       
    
        $.ajax({
        
            url: 'php/consulta2.php',
            type: 'POST',
            success: function (response) {
 
                
                
             $('#anadirequipo2').find('div').fadeIn().delay(1000).fadeOut();
                location.reload(); 
       
            },
            data:{
            
            num:3,
            nombre:nombre,
            entrenadornom:entrenadornom,
            entrenadorap:entrenadorap,
            delegadonom:delegadonom,
            delegadoap:delegadoap,
            categoria: categoria 
            }
                
        }); 
        
    });
    
$('#categorias  .buscar').eq(0).on("click", function(){

    var categoria = $(this).parent().parent().find('select').val();
    
 
$.ajax({
        
            url: 'php/consulta2.php',
            type: 'POST',
            success: function (response) {
                $('.tabequipos table').remove();
                $('.tabequipos .panel-body').remove();
                $('.tabequipos').append(response);
                funcionbotones(); 
           
        
            },
            data:{
            
            num: 0,
            categoria:categoria

            }
                
        });
    
});
    $('#categorias .buscar').eq(1).on("click", function(){
    
var equipo = $(this).parent().parent().find('select').val();

$.ajax({
        
            url: 'php/consulta2.php',
            type: 'POST',
            success: function (response) {
                 $('.tabequipos .panel-body').remove();
                $('.tabequipos table').remove();
                $('.tabequipos').append(response);
                funcionbotones();
           
            },
            data:{
            
            num: 1,
            equipo:equipo
            }
                
        });
    
});
 function funcionbotones(){
     $('#categorias .btn-info').on("click", function(){

               nombre = $(this).parent().siblings().eq(1).text();
               apellido = $(this).parent().siblings().eq(2).text();
         var nomtab=$(this).attr('class').split(' ')[3];
                $(this).parent().siblings().eq(1).html('<input type="text" value="'+nombre+'">');
           $(this).parent().siblings().eq(2).html('<input type="text" value="'+apellido+'">');
               $(this).parent().html(' <a class="btn btn-small btn-primary" href="#"> <i class="icon-edit icon-large"></i> Guardar</a>');
$('#categorias .btn-primary').on("click", function(){
    
     var nombre2 = $(this).parent().siblings().eq(1).find('input').val();
              var apellido2 = $(this).parent().siblings().eq(2).find('input').val();
    var dni = $(this).parent().siblings().eq(3).text();

$.ajax({
        
            url: 'php/consulta2.php', 
            type: 'POST',
            success: function (response) {
               
                $('#categorias .container').prepend('<div class="alert alert-success"><strong>EL usuario se ha modificado correctamente</strong></div>');
                setTimeout(6000,location.reload());
        
            },
            data:{
            
           num: 2,
            nomtab:nomtab,
            dni:dni, 
            nombre2: nombre2, 
            apellido2:apellido2,
            nombre: nombre,
            apellido: apellido
            }
                
        });
});
      
    
});
        $('#categorias .btn-danger').on("click", function(){

    var dni = $(this).parent().siblings().eq(4).text();
    
$.ajax({
        
            url: 'php/consulta.php', 
            type: 'POST',
            success: function (response) {
              
                $('#categorias .container').prepend('<div class="alert alert-success"><strong>EL usuario ha sido eliminado correctamente</strong></div>');
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