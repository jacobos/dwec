$(function () {
  
  $('#getData').click(
    function (e) {
      $.getJSON('datos2.json', function (data) {
        console.log(data);

        $.each(data, function(i, v){
          $(document.body).append(i + " " + v +"<br>");
        });
        //en data tenemos el objeto json
      });
    })
});