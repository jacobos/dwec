$(function() {
  $.ajax({
    type: "POST",
    url: "servidor.php",
    data: {sel: "sel"},
    complete: function(xhr, status) {
      if (status === 'error' || !xhr.responseText) {
        console.log("Some error");      } else {
        var data = xhr.responseText;
        $('#sel').html($('#sel').html()+'<option></option><option value="All">All</option>'+data);
        //...
      }
    },
    dataType: 'json'
  });
  $('#sel').on("change",
    function(e) {
      //THIS CODE DOES THE SAME AS THE ONE COMMENTED
      $.ajax({
        type: "POST",
        url: "servidor.php",
        data: {
          variable1: $('#sel').val()
        },
        complete: function(xhr, status) {
          if (status === 'error' || !xhr.responseText) {
            console.log("Some error");
          } else {
            var data = xhr.responseText;
            $('#answer').html(JSON.parse(data).devuelve);
            //...
          }
        },
        dataType: 'json'
      });
    })
});
/*
	$.ajax({
	type: "POST",
	url: "servidor.php",
	data: {variable1: $('#text1').val()},
	success: function(r){
						$('#answer').html('Server answer: '+JSON.parse(data).devuelve);
					},
	dataType: 'json'

				}
			)
		})
	});
*/
