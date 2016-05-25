module.controller('added_film', ['$scope', '$http',
 function ($scope, $http) {

$scope.new = function (n, d, a, g) {
	console.log("Cargando datos en AJAX y BBDD...");
    console.log(n);
    console.log(d);
    console.log(a);
    console.log(g);
    	  $http({
              method: 'JSONP',
              type: "GET",
              url: 'http://www.fernando-garcia.es/JAVA/Onsen-Monaca/add_json.php?variable1='+n+'&variable2='+d+'&variable3='+a+'&variable4='+g+'&callback=JSON_CALLBACK',
             
          })
          
          .success(function (data, status, headers, config) {
             // $scope.items = data;
          	console.log("Added film !!");
          })
          
          .error(function (data, status, headers, config) {
              console.log("Some error ocurred !");
          });
     };


 }]);

module.controller('ModificarFilmController', ['$scope', '$http',
            function ($scope, $http) {

           $scope.modify = function (codigo,nombre,director,year,gender) {
           	$http({
                   method: 'JSONP',
                   url: 'http://fernando-garcia.es/JAVA/Onsen-Monaca/ModifyJSON.php?cod=' + codigo + ' &nom=' + nombre + '&direc=' + director + '&year=' + year+ '&gender=' + gender,
               }).success(function (data, status, headers, config) {
                   console.log("Got info from the server!");
                   
               }).error(function (data, status, headers, config) {
                   console.log("Some error ocurred");
               });
                };


            }]);

module.controller('EliminarFilmController', ['$scope', '$http',
			  function ($scope, $http) {
			
			 $scope.delete = function (codigo,nombre,director,year,gender) {
			 	$http({
			         method: 'JSONP',
			         url: 'http://fernando-garcia.es/JAVA/Onsen-Monaca/deleteJSON.php?cod=' + codigo + ' &nom=' + nombre + '&direc=' + director + '&year=' + year+ '&gender=' + gender,
			     }).success(function (data, status, headers, config) {
			         console.log("Got info from the server!");
			         
			     }).error(function (data, status, headers, config) {
			         console.log("Some error ocurred");
			     });
			      };
			
			
			  }]);

module.controller('favs_films', function ($scope, $http, currentInfoFactory) {
	$scope.itemsPerPage = 5;
    $scope.currentPage = 0;
    $scope.items = [];

    $http({
        method: 'JSONP',
        url: 'http://www.fernando-garcia.es/JAVA/Onsen-Monaca/favs_json.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        $scope.items = data;
    	console.log(data);
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });

    $scope.getCurrentPage = function () {
        return $scope.items.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
    };

    $scope.nextPage = function () {
        //Almost the same as $scope.currentPage++;
        //(simplemente controla que si no hay más paginas a la derecha no aumente)
        $scope.currentPage = Math.min(parseInt(($scope.items.length - 1) / $scope.itemsPerPage),
            $scope.currentPage + 1);
    }

    $scope.prevPage = function () {
        //Almost the same as $scope.currentPage--;
        $scope.currentPage = Math.max(0, $scope.currentPage - 1);
    }
    $scope.ponerSeleccion = function (p) {
        currentInfoFactory.set(p);
    }
   
});

