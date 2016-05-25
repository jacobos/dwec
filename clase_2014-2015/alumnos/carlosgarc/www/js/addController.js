module.controller('addController', ['$scope', '$http',

    function ($scope, $http) {

        $scope.vehicle = []; 

        $scope.addVeh = function (Matricula, Marca, Modelo, Ciudad, Precio_diario) { 

            $http({
                method: 'JSONP',
                url: 'http://carlosgg.tk/proyectoOnsen/www/addveh.php?mat=' + Matricula + ' &mar=' + Marca + '&mod=' + Modelo + '&ciu=' + Ciudad + '&pre=' + Precio_diario
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                show();
            });

        };

        }
                                          ]);