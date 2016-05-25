module.controller('PaginationController3', function ($scope, $http, currentInfoFactory) {
        
      
        
        
        $scope.itemsPerPage = 4;
        $scope.piezas = [];
$scope.buscar = [];
        var doSomething = function (d) {
            $scope.piezas = $scope.piezas.concat(d);
            //$scope.$apply();
        }

            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/piezas1.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });

            
        $scope.currentPage = 0;

        $scope.getCurrentPage = function () {
            return $scope.piezas.slice($scope.currentPage * $scope.itemsPerPage,
                $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
        };

        $scope.nextPage = function () {
            $scope.currentPage = Math.min(parseInt(($scope.piezas.length - 1) / $scope.itemsPerPage),
            $scope.currentPage + 1);
        }

        $scope.prevPage = function () {
            $scope.currentPage = Math.max(0, $scope.currentPage - 1);
        }
        
        $scope.ponerSeleccion = function (p) {
            currentInfoFactory.set(p);
            //currentInfoFactory.setDni(p.dni);
    }
        
        $scope.anadir = function () {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/piezas4.php?referencia=' + $scope.input1a + '&descripcion=' + $scope.input2a + '&precio=' + $scope.input3a + '&stock=' + $scope.input4a + '&imagen=' + $scope.input5a + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            doSomething(data);
        }).error(function (data, status, headers, config) {

        });

    };
    
    $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/piezas5.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.buscar =$scope.buscar.concat(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
    
        $scope.buscarpieza = function () {
            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/piezas6.php?buscar=' + $scope.buscli + '&por=' + $scope.bus1 + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.piezas = [];
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
    });