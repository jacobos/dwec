   
$(function(){

$('#acceso').on("click", function () {
    var usuario = $('.modal-body').find('input').eq(0).val();
    var contrasena = $('.modal-body').find('input').eq(1).val();

    $.ajax({

        url: 'php/acceso.php',
        type: 'POST',
        success: function (response) {
            $('html').prepend(response);
     
            location.reload();
        },
        data: {
            us: usuario,
            cont: contrasena 
        }
    }); 


});
$('li i.cat').on("click", function () {

    var textli = $(this).parent().text().trim();
    console.log("'"+textli+"'");
    var li = $(this).parent();
    $(this).parent().text("");


    li.append('Nombre equipo :<input type="text" value="' + textli + '"/> <i class="fa fa-check fa-fw guardar"></i>');

    li.find('i.guardar').on("click", function () {
        var nombre = li.find('input').val().trim();
        alert(''+textli+''+nombre);
        $.ajax({

            url: 'php/club.php',
            type: 'POST',
            success: function (response) {
              $('body').append(response);
            },
            data: {
                nombre: nombre,
                nombre2: textli
            }
        });

    });
});
    

});
