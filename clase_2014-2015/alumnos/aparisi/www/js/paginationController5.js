module.controller('PaginationController5', function ($scope, $http, currentInfoFactory) {
        
      
        
        
        $scope.itemsPerPage = 7;
        $scope.facturas = [];
$scope.buscar = [];
        var doSomething = function (d) {
            $scope.facturas = $scope.facturas.concat(d);
            //$scope.$apply();
        }

            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/facturas1.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });

            
        $scope.currentPage = 0;

        $scope.getCurrentPage = function () {
            return $scope.facturas.slice($scope.currentPage * $scope.itemsPerPage,
                $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
        };

        $scope.nextPage = function () {
            $scope.currentPage = Math.min(parseInt(($scope.facturas.length - 1) / $scope.itemsPerPage),
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
            url: 'http://javieraparisi.es/proyecto/php/facturas6.php?numfactura=' + $scope.input1a + '&dni_cliente=' + $scope.input2a + '&matricula=' + $scope.input3a + '&numreparacion=' + $scope.input4a + '&referencia=' + $scope.input5a + '&fecha=' + $scope.input6a + '&precio=' + $scope.input7a + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            doSomething(data);
        }).error(function (data, status, headers, config) {

        });

    };
    
    $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/facturas7.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.buscar =$scope.buscar.concat(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
    
        $scope.buscarfactura = function () {
            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/facturas8.php?buscar=' + $scope.buscli + '&por=' + $scope.bus1 + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.facturas = [];
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
    });