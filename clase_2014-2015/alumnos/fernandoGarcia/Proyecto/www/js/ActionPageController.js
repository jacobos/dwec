module.controller('ActionPageController', function ($scope, $http, currentInfoFactory) {
    $scope.itemsPerPage = 6;
    $scope.currentPage = 2;
    $scope.items = [];

    $http({
        method: 'JSONP',
        url: 'http://solvam.eu/ex3_json.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        $scope.items = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });

    $scope.getCurrentPage = function () {
        return $scope.items.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
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
});

