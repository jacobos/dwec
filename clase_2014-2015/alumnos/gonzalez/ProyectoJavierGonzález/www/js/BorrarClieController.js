module.controller('BorrarClieController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.borrcliente = [];   //Aqui, como los objetos los recogemos de los valores de los datos de la base de datos, lo creamos vacio, y ahí se metera todo.

        var doSomething = function (d) {         //¿Que hace?
            console.log("doing Something");

            $scope.borrcliente = d;
            //$scope.$apply();
        }
        
        


        $scope.borring = function (codigo) {
            $http({
                method: 'JSONP',
               url: 'http://javiergonzalez.tk/070/www/BorrarCliente.php?info=' + codigo + '&callback=JSON_CALLBACK'
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