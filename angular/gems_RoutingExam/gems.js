(function() {
  var app = angular.module('store', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl: 'hola.html'
        })
        .when('/gem/ex/:name', {
          templateUrl: 'ex.html',
          controller: 'productPanelsController',
          controllerAs: 'panel'
        })
          .when('/gem/:name', {
            templateUrl: 'product-title.html'
          })
          .when('/gem/info/:name', {
            templateUrl: 'product-panels.html',
            controller: 'productPanelsController',
            controllerAs: 'panel'
          });
      }
    ]);

  app.controller('productPanelsController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('StoreController', ['$http', '$scope', function($http, $scope) {
    controller = this;
    this.products = [];
    this.setElem = function(pr) {
      console.log(pr);
      $scope.pr = pr;
    };
/*
https://randomuser.me/

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data){
    console.log(data);
  }
});
*/
$http({
url: "https://derpibooru.org/search.json?q=pinkie+pie",
type: 'GET',
dataType: 'json'
}).success(function(data, status, headers, config) {
  console.log(data.search); //controller.products = data;
  $.each(data.search, function(i, v){
    console.log(v.tags);
    console.log(v.uploader);
    console.log("http:"+v.image)
  })

});

    $http({
      dataType: 'json',
      url: 'https://randomuser.me/api/'
//      url: 'http://jacobosolvam.tk/dwec/angular/products.php?callback=JSON_CALLBACK'
    }).success(function(data, status, headers, config) {
      controller.products = data;
      console.log(data);
      // data contains the response
      // status is the HTTP status
      // headers is the header getter function
      // config is the object that was used to create the HTTP request
    }).error(function(data, status, headers, config) {
      console.log("Some error ocurred");
    });
  }]);

  app.controller("ReviewController", function() {
    this.review = {};
    this.review.stars = 4;
    this.addReview = function(product) {
      console.log("HI");
      product.reviews.push(this.review);
      //localStorage.setItem("gemas", JSON.stringify(products));
      this.review = {};
    };
  });

})();

/*
// http://jacobosolvam.tk/dwec/angular/products.php

<?php

header("content-type: application/json");

$json = '[{"name":"Dodecahedron","price":17,"description":"Dodecahedron is a nice piece of gem to work with!!","canPurchase":true,"images":[{"full":"im/gem-01.gif","small":"im/gem-01.gif"}],"reviews":[{"stars":5,"body":"I love this product!","author":"joe@thomas.com"},{"stars":1,"body":"This product sucks","author":"tim@hater.com"}]},{"name":"Hex","price":4.95,"description":"Triangle is nice!!","canPurchase":true,"images":[{"full":"im/gem-02.gif","small":"im/gem-02.gif"}]},{"name":"TriangleHex","price":3.95,"description":"TriangleHEx is like JF!!","canPurchase":true,"images":[{"full":"im/gem-03.gif","small":"im/gem-03.gif"}]},{"name":"Tri Tri","price":4.95,"description":"Triangle is nice!!","canPurchase":true,"images":[{"full":"im/gem-04.gif","small":"im/gem-04.gif"}]},{"name":"Cube","price":9.95,"description":"Triangle is nice!!","canPurchase":true,"images":[{"full":"im/gem-05.gif","small":"im/gem-05.gif"}]},{"name":"Star","price":9.95,"description":"Triangle is nice!!","canPurchase":true,"images":[{"full":"im/gem-06.gif","small":"im/gem-06.gif"}]}]';
$result = json_decode ($json);

//the two top lines should be change
//to access your database, look at the Example

echo $_GET['callback']. '('. json_encode($result) . ')';

?>

*/


/*
// Example

<?php
    header("content-type: application/json");

	$con=mysqli_connect("localhost","solvam","solvam","solvam") or die('{"devuelve": "Error en conexion a la DB"}');


	//the table should exist in your database
	$result = mysqli_query($con,"SELECT * FROM City");
    $i = 0;
	while($row = mysqli_fetch_array($result))
	{
		if($i < 33)
		{
		    //we use utf8_encode for special characters in the database (avoid errors with JSON data)
		    $array['where'] = utf8_encode($row['Name']);
		    $array['what'] = $row['Population']." people living there";
		    $array['desc'] = "In the ".utf8_encode($row['District']). " district";
		    $num = $i % 4+1;
		    $array['img'] = "http://components.onsen.io/patterns/images/location".$num.".png";
		    $i++;
		    $back[] = $array;
		}
	}



    echo $_GET['callback']. '('. json_encode($back) . ')';

?>
*/

/*
  var gems = [{
    name: 'Dodecahedron',
    price: 17,
    description: 'Dodecahedron is a nice piece of gem to work with!!',
    canPurchase: true,
    images: [{
      full: "im/gem-01.gif",
      small: "im/gem-01.gif"
    }],
    reviews: [{
      stars: 5,
      body: "I love this product!",
      author: "joe@thomas.com"
    }, {
      stars: 1,
      body: "This product sucks",
      author: "tim@hater.com"
    }]
  }, {
    name: 'Hex',
    price: 4.95,
    description: 'Triangle is nice!!',
    canPurchase: true,
    images: [{
      full: "im/gem-02.gif",
      small: "im/gem-02.gif",
    }]
  }, {
    name: 'TriangleHex',
    price: 3.95,
    description: 'TriangleHEx is like JF!!',
    canPurchase: true,
    images: [{
      full: "im/gem-03.gif",
      small: "im/gem-03.gif",
    }]
  }, {
    name: 'Tri Tri',
    price: 4.95,
    description: 'Triangle is nice!!',
    canPurchase: true,
    images: [{
      full: "im/gem-04.gif",
      small: "im/gem-04.gif",
    }]
  }, {
    name: 'Cube',
    price: 9.95,
    description: 'Triangle is nice!!',
    canPurchase: true,
    images: [{
      full: "im/gem-05.gif",
      small: "im/gem-05.gif",
    }]
  }, {
    name: 'Star',
    price: 9.95,
    description: 'Triangle is nice!!',
    canPurchase: true,
    images: [{
      full: "im/gem-06.gif",
      small: "im/gem-06.gif",
    }]
  }];
*/
