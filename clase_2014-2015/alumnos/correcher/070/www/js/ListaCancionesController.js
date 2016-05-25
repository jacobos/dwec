module.controller('ListaCancionesController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.canciones = [];   //Aqui, como los objetos los recogemos de los valores de los datos de la base de datos, lo creamos vacio, y ahí se 

        var doSomething = function (i) {         //¿Que hace?
            console.log("doing Something");

            $scope.canciones = i;
            //$scope.$apply();
        }
        
        


        $scope.muestraCanciones = function () {  
            $http({
                method: 'JSONP',
                url: 'http://javicorrecher.tk/onsen/070/www/ListaCanciones.php?callback=JSON_CALLBACK'
                
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
                // data contains the response
                // status is the HTTP status
                // headers is the header getter function
                // config is the object that was used to create the HTTP request
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
            
        };
}]);