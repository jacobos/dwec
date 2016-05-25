$(function() {
  $('#getData').click(
    function(e) {
      $("#answer").load("anotherIndex.html #info1");
      //http://api.jquery.com/load/ it's the same as a get but more simple
    })
})
