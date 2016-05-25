$(function() {
  var obOriginal = {};
  var contador = 0;
  $('#saveData').click(
    function(e) {
      contador++;
      obOriginal["t"+contador] = {
        tarea: $("#input").val(),
        estado: "on",
      };

      // some jQuery to write to file
      $.ajax({
        url: "servidor.php",
        data: {
          json: JSON.stringify(obOriginal)
        },
        dataType: "json",
        type: "POST"        
      });
    })
});
