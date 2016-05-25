module.controller('PaginationControllerLands', function ($scope, $http, currentInfoFactory) {
    $scope.itemsPerPage = 5;
    $scope.currentPage = 1;
    $scope.items = [];

    $http({
        method: 'JSONP',
        url: 'http://www.fernando-garcia.es/JAVA/Onsen-Monaca/terror_json.php?callback=JSON_CALLBACK'
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

module.controller('PaginationControllerAction', function ($scope, $http, currentInfoFactory) {
    $scope.itemsPerPage = 5;
    $scope.currentPage = 0;
    $scope.items = [];

    $http({
        method: 'JSONP',
        url: 'http://www.fernando-garcia.es/JAVA/Onsen-Monaca/action_json.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        $scope.items = data;
    	console.log(data);
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

module.controller('PaginationControllerAdventures', function ($scope, $http, currentInfoFactory) {
    $scope.itemsPerPage = 5;
    $scope.currentPage = 1;
    $scope.items = [];

    $http({
        method: 'JSONP',
        url: 'http://www.fernando-garcia.es/JAVA/Onsen-Monaca/adventures_json.php?callback=JSON_CALLBACK'
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


module.controller('PaginationControllerComedy', function ($scope, $http, currentInfoFactory) {
    $scope.itemsPerPage = 5;
    $scope.currentPage = 1;
    $scope.items = [];

    $http({
        method: 'JSONP',
        url: 'http://www.fernando-garcia.es/JAVA/Onsen-Monaca/comedy_json.php?callback=JSON_CALLBACK'
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
    	console.log($scope.currentPage);
    	if($scope.currentPage == 1){}else{
        //Almost the same as $scope.currentPage--;
        $scope.currentPage = Math.max(0, $scope.currentPage - 1);
    	}
    }
    $scope.ponerSeleccion = function (p) {
        currentInfoFactory.set(p);
    }
});

module.controller('PaginationControllerBattle', function ($scope, $http, currentInfoFactory) {
    $scope.itemsPerPage = 5;
    $scope.currentPage = 1;
    $scope.items = [];

    $http({
        method: 'JSONP',
        url: 'http://www.fernando-garcia.es/JAVA/Onsen-Monaca/battle_json.php?callback=JSON_CALLBACK'
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

module.controller('PaginationControllerAll', function ($scope, $http, currentInfoFactory) {
    $scope.itemsPerPage = 6;
    $scope.currentPage = 0;
    $scope.items = [];

    $http({
        method: 'JSONP',
        url: 'http://www.fernando-garcia.es/JAVA/Onsen-Monaca/view_all_json.php?callback=JSON_CALLBACK'
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
    	if($scope.currentPage == 0){}else{
        //Almost the same as $scope.currentPage--;
        $scope.currentPage = Math.max(0, $scope.currentPage - 1);
    	}
    }
    $scope.ponerSeleccion = function (p) {
        currentInfoFactory.set(p);
    }
});





