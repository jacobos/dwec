module.controller('tdelController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.tareaborrar = [];   //Aqui, como los objetos los recogemos de los valores de los datos de la base de datos, lo creamos vacio, y ahí se metera todo.

        var doSomething = function (d) {         //guarda en el array los datos recogidos de la bbdd
            console.log("doing Something");
            $scope.tareaborrar = d;
            
        }
        
        


        $scope.deltarea = function (codigo) {
            ons.notification.alert({message: 'The task has been delete'});
            $http({
                method: 'JSONP',
               url: 'http://rubenfreelance.tk/070/www/tdel.php?cod=' + codigo + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
        
        $http({
            method: 'JSONP',
            url: 'http://rubenfreelance.tk/070/www/tdel.php?callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {

                doSomething(data);

        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });
}]);