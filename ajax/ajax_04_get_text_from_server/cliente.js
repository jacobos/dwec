    $(function() {
      $('#getData').click(
        function(e) {
          $.ajax({
            url: "serv.txt",
            success: function(data) {
              $('#answer').html("<pre>" + data + "</pre>");
            },
            dataType: 'text'

          })
        })
    });
