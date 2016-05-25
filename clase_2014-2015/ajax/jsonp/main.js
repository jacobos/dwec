window.onload = function() {

  $(document).ready(function() {


    function work_with_data(data) {
      $.each(data, function(ind, val) {
        a = data;
        $("#entrada").before(ind + ": " + val + "<br>");
      });
    }


    // USING POST, CHANING HEADERS ON SERVER SIDE
	    $.ajax({
	      url: "http://jacobo.solvam.net/ajax/jsonp/ex2_json.php",
	      type: "POST",
	      crossDomain: true,
	      data: {
		info: "hola"
	      },
	      dataType: "json",
	      success:function(result){
		console.log(JSON.stringify(result));
	      },
	      error:function(xhr,status,error){
		alert(status);
	      }
	    });
    // END USING POST, CHANING HEADERS ON SERVER SIDE

    // "NORMAL" JSONP
	    var url = "http://jacobo.solvam.net/ajax/jsonp/ex_json.php?val=22&callback=?";
	    $.getJSON(url, function(data) {
	      work_with_data(data);
	    }).error(function(data) {
	      $(document.body).append("Error!");
	    });
    // END NORMAL JSONP

    // GOOGLE SEARCH (WHEN ENTER CLICKED
	    $("#entrada").on("keyup", function(event) {
	      if (event.keyCode == 13) {
		$("#elemento").click();
		$("#content").fadeOut();
	      }
	    });
    // END GOOGLE SEARCH (WHEN ENTER CLICKED

    // GOOGLE SEARCH (WITH JSONP)
	    $("#elemento").on("click", function() {
	      var uri = "https://www.googleapis.com/books/v1/volumes?q=" + $("#entrada").val() + "&maxResults=20&startIndex=1";
	      $.get(uri, function(data) {
		var contenido = "";
		for (var i = 0; i < data.items.length; i++) {
		  var item = data.items[i];
		  // in production code, item.text should have the HTML entities escaped.
		  if (item.volumeInfo.imageLinks !== undefined) {
		    contenido += '<div class="book"> <span> <span class="vam"><a href="' + item.volumeInfo.infoLink + '" target="_blank">' + item.volumeInfo.title + '<b><br>by<br></b> ' + item.volumeInfo.authors +
		      '</a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="vam"><a target="_blank" href="' + item.volumeInfo.previewLink + '">Preview</a></span>&nbsp;&nbsp;&nbsp;&nbsp;' +
		      '<span class="vam"><img src="' + item.volumeInfo.imageLinks.thumbnail + '"> </img></span></span></div><br>';
		    console.log(item);
		  }
		}
		document.getElementById("content").innerHTML = contenido;
		$("#content").fadeIn();
		$("a").filter(function(index) {
		  return (index % 2 == 0);
		}).parent().css("width", "500px");
	      });
	    });
    // END GOOGLE SEARCH
  });
};
