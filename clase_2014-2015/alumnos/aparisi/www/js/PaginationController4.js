module.controller('PaginationController4', function ($scope, $http, currentInfoFactory) {
        
      
        
        
        $scope.itemsPerPage = 7;
        $scope.reparaciones = [];
$scope.buscar = [];
        var doSomething = function (d) {
            $scope.reparaciones = $scope.reparaciones.concat(d);
            //$scope.$apply();
        }

            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/reparaciones1.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });

            
        $scope.currentPage = 0;

        $scope.getCurrentPage = function () {
            return $scope.reparaciones.slice($scope.currentPage * $scope.itemsPerPage,
                $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
        };

        $scope.nextPage = function () {
            $scope.currentPage = Math.min(parseInt(($scope.reparaciones.length - 1) / $scope.itemsPerPage),
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
            url: 'http://javieraparisi.es/proyecto/php/reparaciones7.php?numreparacion=' + $scope.input1a + '&matricula=' + $scope.input2a + '&descripcion=' + $scope.input3a + '&horas=' + $scope.input4a + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            doSomething(data);
        }).error(function (data, status, headers, config) {

        });

    };
    
    $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/reparaciones8.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.buscar =$scope.buscar.concat(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
    
        $scope.buscarreparacion = function () {
            $http({
                method: 'JSONP',
                url: 'http://javieraparisi.es/proyecto/php/reparaciones9.php?buscar=' + $scope.buscli + '&por=' + $scope.bus1 + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                $scope.reparaciones = [];
                doSomething(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
    });