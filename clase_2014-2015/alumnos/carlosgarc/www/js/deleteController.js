module.controller('deleteController', ['$scope', '$http',

    function ($scope, $http) {

        $scope.borrar = [];

        $http({
            method: 'JSONP',
            url: 'http://carlosgg.tk/proyectoOnsen/www/listveh.php?callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {

            $scope.borrar = data;

        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });

        var show = function () {

            $http({
                method: 'JSONP',
                url: 'http://carlosgg.tk/proyectoOnsen/www/listveh.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {

                $scope.borrar = data;

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });

        };

        $scope.delete = function (Matricula) {

            $http({
                method: 'JSONP',
                url: 'http://carlosgg.tk/proyectoOnsen/www/deleteveh.php?mat=' + Matricula
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                show();
            });

        };

        }
    ]);