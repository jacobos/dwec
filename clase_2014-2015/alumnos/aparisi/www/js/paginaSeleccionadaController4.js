module.controller('PaginaSeleccionadaController4', function ($scope, $http, currentInfoFactory) {
    //$scope.dni=currentInfoFactory.getDni();
    $scope.actual = currentInfoFactory.get();
    
    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/reparaciones2.php?variable1=' + $scope.actual.matricula + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
        $scope.laVariable = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/reparaciones3.php?variable1=' + $scope.actual.matricula + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
        $scope.laVariable1 = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });

    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/reparaciones4.php?variable1=' + $scope.actual.matricula + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
       $scope.laVariable2 = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    


    $scope.colocar = function () {
        $scope.input1 = $scope.actual.numreparacion;
        $scope.input3 = $scope.actual.matricula;
        $scope.input4 = $scope.actual.descripcion;
        $scope.input5 = $scope.actual.horas;
       
   };
    $scope.modificar = function () {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/reparaciones5.php?numreparaciona=' + $scope.input1 + '&numreparacionn=' + $scope.input2 + '&matricula=' + $scope.input3 + '&descripcion=' + $scope.input4 + '&horas=' + $scope.input5 + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            $scope.actual.numreparacion = $scope.input2;
            $scope.actual.matricula = $scope.input3;
            $scope.actual.descripcion = $scope.input4;
            $scope.actual.horas = $scope.input5;
        }).error(function (data, status, headers, config) {

        });

    };

    $scope.eliminar = function (nav) {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/reparaciones6.php?variable1=' + $scope.actual.numreparacion + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            console.log("got info from the server!");
            nav.popPage();
        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });
    };
    
    

});