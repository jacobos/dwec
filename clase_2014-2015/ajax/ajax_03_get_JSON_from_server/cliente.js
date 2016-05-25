$(function() {
  $('#getData').click(
    function(e) {

      //FAST WAY
      //			$.getJSON('ali.json', function(data) {
      //				console.log(data); //en data tenemos el objeto json
      //			});

      //LONG WAY
      var jqxhr = $.getJSON("datos2.json", function() {
          //console.log( "success" );
        })
        .done(function(dat) {
          //en dat tenemos la respuesta del servidor, podemos verlo en la consola
          console.log("HOLA");
          console.log(dat);

          for (i = 0; i < 4; i++)
            $('#answer').html($('#answer').html() + "<pre>" + dat["empleados" + i] + "</pre>");
          //veremos que aparece un [object Object] en la respuesta, esto significa que nos ha devuelto un objeto (json)
          $('#answer').html($('#answer').html() + "<pre>" + dat + "</pre>");

          //recorremos todo lo que tengamos en dicho objeto
          $.each(dat, function(index, elem) {
            $('#answer').html($('#answer').html() + "<pre>" + index + " " + elem + "</pre>");
            //recorremos todo lo que tengamos en cada uno de las variables del objeto
            $.each(elem, function(index2, elem2) {
              $('#answer').html($('#answer').html() + "<pre>    " + index2 + " " + elem2 + "</pre>");
            });
          });
        })
        .fail(function() {
          console.log("error");
        })
        //                .always(function() {
        //                console.log( "complete" );
        //                });
        //                 Perform other work here ...
        //                 Set another completion function for the request above
        //                jqxhr.complete(function() {
        //                });

    }
  )
})
