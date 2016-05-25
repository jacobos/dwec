module.controller('PaginationController2', function ($scope, $http, currentInfoFactory) {
        
        $scope.itemsPerPage = 7;
        $scope.coches = [];
        $scope.buscar = [];
        var doSomething = function (d) {
            $scope.coches = d;
           
        }

            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/coches1.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });

            
        $scope.currentPage = 0;

        $scope.getCurrentPage = function () {
            return $scope.coches.slice($scope.currentPage * $scope.itemsPerPage,
                $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
        };

        $scope.nextPage = function () {
            $scope.currentPage = Math.min(parseInt(($scope.coches.length - 1) / $scope.itemsPerPage),
            $scope.currentPage + 1);
        }

        $scope.prevPage = function () {
            $scope.currentPage = Math.max(0, $scope.currentPage - 1);
        }
        
        $scope.ponerSeleccion = function (a, p) {
            currentInfoFactory.set(p);
    }
        
        $scope.anadir = function () {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/coches6.php?matricula=' + $scope.input1a + '&dni=' + $scope.input2a + '&marca=' + $scope.input3a + '&modelo=' + $scope.input4a + '&color=' + $scope.input5a + '&kilometros=' + $scope.input6a + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            doSomething(data);
        }).error(function (data, status, headers, config) {

        });

    };
    
    $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/coches7.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.buscar =$scope.buscar.concat(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
    
        $scope.buscarcoche = function () {
            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/coches8.php?buscar=' + $scope.buscli + '&por=' + $scope.bus1 + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.coches = [];
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
    
    });