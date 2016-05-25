module.controller('PaginationController', function ($scope, $http, currentInfoFactory) {
        $scope.itemsPerPage = 4;
            $scope.clientes = [];

    $scope.buscar = [];
        var doSomething = function (d) {
            $scope.clientes = d;
        }

            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/clientes1.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
    
           $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/clientes8.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.buscar =$scope.buscar.concat(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
    
        $scope.buscarcliente = function () {
            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/clientes9.php?buscar=' + $scope.buscli + '&por=' + $scope.bus1 + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.clientes = [];
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
            
        $scope.currentPage = 0;

        $scope.getCurrentPage = function () {
            return $scope.clientes.slice($scope.currentPage * $scope.itemsPerPage,
                $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
        };

        $scope.nextPage = function () {
            $scope.currentPage = Math.min(parseInt(($scope.clientes.length - 1) / $scope.itemsPerPage),
            $scope.currentPage + 1);
        }

        $scope.prevPage = function () {
            $scope.currentPage = Math.max(0, $scope.currentPage - 1);
        }
        
        $scope.ponerSeleccion = function (p) {
            currentInfoFactory.set(p);
            
    }
        
        $scope.anadir = function () {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/clientes7.php?dni=' + $scope.input1a + '&nombre=' + $scope.input2a + '&apellidos=' + $scope.input3a + '&direccion=' + $scope.input4a + '&codigopostal=' + $scope.input5a + '&telefono=' + $scope.input6a + '&imagen=' + $scope.input7a + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            $scope.clientes=$scope.clientes.concat(data);
        }).error(function (data, status, headers, config) {

        });

    };
 });