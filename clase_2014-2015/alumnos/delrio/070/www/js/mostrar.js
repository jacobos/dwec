module.controller('mostrar', ['$scope', '$http',
    function ($scope, $http) {
        $scope.contenedor = [];   

        var doSomething = function (e) {         
            
            $scope.contenedor = e;
        }

        $scope.mostrar= function () {
            $http({
                method: 'JSONP',
                url: 'http://webmasterstudio.tk/070/www/mostrar.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                console.log(data);
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
}]);
