module.controller('PaginationControllerLands', function ($scope, $http, currentInfoFactory) {
    $scope.itemsPerPage = 3;
    $scope.currentPage = 0;
    $scope.items = [];
    $scope.itemsPerPage2 = 30;
    $scope.currentPage2 = 0;



    $http({
        method: 'JSONP',
        url: 'http://proyectophp.tk/070/www/ex3_json.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        $scope.items = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });


    $scope.getCurrentPage = function () {
        return $scope.items.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
    };
    $scope.getCurrentPage2 = function () {
        return $scope.items.slice($scope.currentPage2 * $scope.itemsPerPage2,
            $scope.currentPage2 * $scope.itemsPerPage2 + $scope.itemsPerPage2);
    };

    $scope.nextPage = function () {
        //Almost the same as $scope.currentPage++;
        //(simplemente controla que si no hay más paginas a la derecha no aumente)
        $scope.currentPage = Math.min(parseInt(($scope.items.length - 1) / $scope.itemsPerPage),
            $scope.currentPage + 1);
    }

    $scope.prevPage = function () {
        //Almost the same as $scope.currentPage--;
        $scope.currentPage = Math.max(0, $scope.currentPage - 1);
    }
    $scope.ponerSeleccion = function (p) {
        currentInfoFactory.set(p);
    }



    $scope.delClie = function (elim) { //Para insertar un registro
        ons.notification.alert({
            message: 'Deleted'
        });
        $http({
            method: 'JSONP',
            url: 'http://proyectophp.tk/070/www/AnadirCliente.php?nom2=' + elim + '&callback2=JSON_CALLBACK',
        }).success(function (data, status, headers, config) {
            console.log("success");

        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });



    };

    $scope.modClie = function (nombr, apellid, fij, movi, direccio, mai, codig) { //Para modificar un registro
        ons.notification.alert({
            message: 'Changed'
        });
        $http({
            method: 'JSONP',
            url: 'http://proyectophp.tk/070/www/Modificar.php?nom=' + nombr + ' &apell=' + apellid + '&tel=' + fij + '&mov=' + movi + '&dire=' + direccio + '&mail=' + mai + '&codigo=' + codig + '&callback3=JSON_CALLBACK',
        }).success(function (data, status, headers, config) {
            $scope.items = data;
            console.log("success");

        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });



    };


});