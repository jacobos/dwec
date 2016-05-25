module.controller('PaginationControllerLands', function ($scope, $http, currentInfoFactory) {
    $scope.itemsPerPage = 4;
    $scope.currentPage = 0;
    $scope.items = [];

    $http({
        method: 'JSONP',
        url: 'http://nestorlopezbarchino.com/onsen/ex3_json.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        $scope.items = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });

    $scope.getCurrentPage = function () {
        return $scope.items.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
    };
    
    $scope.newFil = function (param) {
            $scope.items = [];
            $http({
                method: 'JSONP',
                url: 'http://nestorlopezbarchino.com/onsen/ex4_json.php?info=' + param + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                $scope.items = data;                
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
    
       /* $scope.add = function (name, family, material, description, image) {
            $http({
                method: 'JSONP',
                url: 'http://nestorlopezbarchino.com/onsen/add.php?name=' + name + '&family=' + family + '&material=' + material + '&description=' + description + '&image=' + image + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                //$('.result').append("data");
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };*/
    
    $scope.add = function (name, family, material, description, image) {
            $http({
                method: 'GET',
                url: 'http://nestorlopezbarchino.com/onsen/add.php?name=' + name + '&family=' + family + '&material=' + material + '&description=' + description + '&image=' + image + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                
                //$('.result').append("Instrument added");
                //myNavigator.pushPage('page7.html', { animation : 'slide' });
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
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

