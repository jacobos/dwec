module.controller('listController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.listveh = [];

        var doSomething = function (e) {
            console.log("doing Something");

            $scope.listveh = e;
        }

        $http({
            method: 'JSONP',
            url: 'http://carlosgg.tk/proyectoOnsen/www/listveh.php?callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            console.log("got info from the server!");
            doSomething(data);
        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });

}]);