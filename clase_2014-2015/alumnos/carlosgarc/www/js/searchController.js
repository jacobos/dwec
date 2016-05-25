module.controller('searchController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.buscarciudad = [];

        var doSomething = function (d) { //¿Que hace?
            console.log("doing Something");

            $scope.buscarciudad = d;
        }

        $scope.search = function (Ciudad) {
            $http({
                method: 'JSONP',
                url: 'http://carlosgg.tk/proyectoOnsen/www/searchveh.php?ciu=' + Ciudad + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
}]);