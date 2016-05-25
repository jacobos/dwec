$(function() {
  $('#saveData').click(
    function(e) {
      jsonObject = {
        name: "Arya",
        surname: "Stark",
        age: "80"
      };

      // some jQuery to write to file
      $.ajax({
        url: "servidor.php",
        data: {
          json: JSON.stringify(jsonObject) /* convert here only */
        },
        dataType: "json",
        type: "POST",
        success: function(da) {
          $("#answer").append(da);
          $.getJSON("file.json", function(data) {
            console.log(data);
          });
        }
      });
    })
});
