var im = "http://iconicontent.com/wp-content/uploads/2015/01/write-amazing-contentwrite-amazing-content.jpeg";
var myShop = {
  "albornoces": {
    "albornoces feos": [{
      "nom": "del patito feo",
      "precio": 77,
      "src": im,
      "desc": "..."
    }, {
      "nom": "del patito feo",
      "precio": 77,
      "src": im,
      "desc": "..."
    }, {
      "nom": "del patito feo",
      "precio": 77,
      "src": im,
      "desc": "..."
    }, {
      "nom": "del patito feo",
      "precio": 77,
      "src": im,
      "desc": "..."
    }],
    "albornoces bonitos": [

    ]
  }
};
$.each(myShop, function(i, val) {
  $.each(val, function(prod, val_prod_a) {
    $.each(val_prod_a, function(prod2, val_prod) {
      var tit = val_prod.nom;
      var content = val_prod.desc;
      var $div_col = $('<div class="col-md-3 col-sm-6 hero-feature">');
      var $div_thumb = $('<div class="thumbnail">');
      var $img_ = $('<img src="' + val_prod.src + '"alt="Placeholder">');
      var $div_cap = $('<div class="caption"><h3>' + tit + '</h3><p>' + content + '</p>' + '<a href="#" class="btn btn-primary">Buy Now!</a>');
      $div_col.append($div_thumb.append($img_).append($div_cap));

      var cont = 0;
      $(".row").eq(-2).append($div_col);
    });
  });
});
(function() {

  var tit = "Hi there!";
  var content = "amazing dog, ain't it?!";
  var $div_col = $('<div class="col-md-3 col-sm-6 hero-feature">');
  var $div_thumb = $('<div class="thumbnail">');
  var $img_ = $('<img src="http://iconicontent.com/wp-content/uploads/2015/01/write-amazing-contentwrite-amazing-content.jpeg" alt="Placeholder">');
  var $div_cap = $('<div class="caption"><h3>' + tit + '</h3><p>' + content + '</p>' + '<a href="#" class="btn btn-primary">Buy Now!</a>');
  $div_col.append($div_thumb.append($img_).append($div_cap));

  var cont = 0;
  $(".row").eq(-2).append($div_col);
  (function() {
    var newo = cont + 1;
    cont++;
    $("h3").last().on("click", function() {
      alert("HI" + newo);
    });
  })();

  $(document.body).on("click", function() {

    (function() {
      $(".row").eq(-2).append($div_col.clone());
      var newo = cont + 1;
      cont++;
      $("h3").last().on("click", function() {
        alert("HI" + newo);
      });
    })();
  });
})();

/*
//$.each(myShop, function(..){...})

<div class="col-md-3 col-sm-6">
  <div class="thumbnail">
    <img src="http://lorempixel.com/800/500/sports/2" alt="Placeholder">
    <div class="caption">
      <h3>Sea</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>
        <a href="#" class="btn btn-primary">Buy Now!</a> <a href="#" class="btn btn-default">More Info</a>
      </p>
    </div>
  </div>
</div>*/
