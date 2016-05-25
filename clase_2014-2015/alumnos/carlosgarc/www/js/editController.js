module.controller('editController', ['$scope', '$http',

    function ($scope, $http) {

        $scope.editVehicle = []; 

        $http({
            method: 'JSONP',
            url: 'http://carlosgg.tk/proyectoOnsen/www/listveh.php?callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {

            $scope.editVehicle = data;

        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });

        var show = function () { 

            $http({
                method: 'JSONP',
                url: 'http://carlosgg.tk/proyectoOnsen/www/listveh.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {

                $scope.editVehicle = data;

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });

        };

        $scope.editar = function (Matricula, Marca, Modelo, Ciudad, Precio_diario) { 

            $http({
                method: 'JSONP',
                url: 'http://carlosgg.tk/proyectoOnsen/www/editveh.php?mat=' + Matricula + ' &mar=' + Marca + '&mod=' + Modelo + '&ciu=' + Ciudad + '&pre=' + Precio_diario
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                show();
            });

        };

        }
                                          ]);