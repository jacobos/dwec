(function() {
  console.log("HI");
  /*
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
  */


  $(document.body).on("click", function() {
    miVar = "my header";
    $(document.body).append('<div class="container">   <div class="row">     <div class="col-md-4">       <h2> First Heading</h2>       <p>         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.       </p>     </div>   </div> </div>');
    var st = '<div class="container">';
    st += '  <div class="row">';
    st += '    <div class="col-md-12">';
    st += '      <h2>Second heading</h2>';
    st += '      <p>' + miVar;
    st += '        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    st += '      </p>';
    st += '    </div>';
    st += '  </div>';
    st += '</div>';
    $(document.body).append(st);

    var $cont = $('<div class="container">');
    var $row = $('<div class="row">');
    var $col = $('<div class="col-md-12">');
    var $h2 = $('<h2>Third heading</h2>');
    var $p = $('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>');
    $cont.append($row);
    $row.append($col);
    $col.append($h2);
    $col.append($p);
    $(document.body).append($cont);
    // or $cont.append($row.append($row.append($col)));

    // By Yeray
    $cont = $('<div class="container">').html('<div class="row">     <div class="col-md-4">       <h2>Yerays Heading</h2>       <p>         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.       </p>     </div>   </div>');
    $(document.body).append($cont);
  });

})();
/*
var myShop = {
  "albornoces": {
    "albornoces feos": [
      {
        "del patito feo": {
          "precio": 77,
          "src": "img/patito.png",
          "desc": "..."
        }
      }
    ],
    "albornoces bonitos": [

    ]
  }
};
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
