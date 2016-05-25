module.controller('tviewController', ['$scope', '$http',

    function ($scope, $http) {

        $scope.insertview = []; //se recogen los objtos para guardarlo en un array

        $http({
            method: 'JSONP',
            url: 'http://rubenfreelance.tk/070/www/tview.php?callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {

            $scope.insertview = data;

        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });



        var repintar = function () { //funcion para volver a poner la tabla sin refrescar

            $http({
                method: 'JSONP',
                url: 'http://rubenfreelance.tk/070/www/tview.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {

                $scope.insertview = data;

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        }


        //variable para añadir a la bbdd
        $scope.updatestate = function (codigo,estado) { //Para insertar un registro
            ons.notification.alert({
                message: 'The state of task has been changed'
            });

            $http({
                method: 'JSONP',
                url: 'http://rubenfreelance.tk/070/www/tview.php?cod=' + codigo +' &esta=' + estado
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                repintar();
            });
        };



                }
                ]);