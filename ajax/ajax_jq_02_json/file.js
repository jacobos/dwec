$("#bot").on("click", function() {
  // Using the core $.ajax() method
  $.ajax({

    // The URL for the request
    url: "file.php",

    // The data to send (will be converted to a query string)
    // (we will have id available in the php file)
    data: {
      id: $("#inp").val()
    },

    // Whether this is a POST or GET request
    // you can use GET here and then you'll have to use GET in the server (or REQUEST)
    // you can use POST here and then you'll have to use POST in the server (or REQUEST)
    type: "GET",

    // The type of data we expect back
    dataType: "json",

    // Code to run if the request succeeds;
    // the response is passed to the function
    success: function(data) {
      console.log(data);
      $("<h1>").text(data.title).appendTo(".container");
      $("<div class=\"content\">").html(data.info).appendTo(".container");
      $("<div class=\"moreContent\">").html("the array from the server &rarr;" + data.miArr).appendTo(".container");
    },

    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    error: function(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.log(xhr);
    },

    // Code to run regardless of success or failure
    complete: function(xhr, status) {
      console.log("The request is complete!");
    }
  });
});
