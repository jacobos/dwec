module.controller('PaginaSeleccionadaController', function ($scope, $http, currentInfoFactory) {
    //$scope.dni=currentInfoFactory.getDni();
    $scope.actual = currentInfoFactory.get();
    $scope.laVariable;
    $scope.laVariable1;
    
    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/clientes2.php?variable1=' + $scope.actual.dni + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
        $scope.laVariable = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/clientes3.php?variable1=' + $scope.actual.dni + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
        $scope.laVariable1 = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });

    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/clientes4.php?variable1=' + $scope.actual.dni + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
        $scope.laVariable2 = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    


    $scope.colocar = function () {
        $scope.input1 = $scope.actual.dni;
        $scope.input3 = $scope.actual.nombre;
        $scope.input4 = $scope.actual.apellidos;
        $scope.input5 = $scope.actual.direccion;
        $scope.input6 = $scope.actual.codigopostal;
        $scope.input7 = $scope.actual.telefono;
        $scope.input8 = $scope.actual.imagen;
    };

    $scope.modificar = function () {


        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/clientes5.php?dnia=' + $scope.input1 + '&dnin=' + $scope.input2 + '&nombre=' + $scope.input3 + '&apellidos=' + $scope.input4 + '&direccion=' + $scope.input5 + '&codigopostal=' + $scope.input6 + '&telefono=' + $scope.input7 + '&imagen=' + $scope.input8 + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            $scope.actual.dni = $scope.input2;
            $scope.actual.nombre = $scope.input3;
            $scope.actual.apellidos = $scope.input4;
            $scope.actual.direccion = $scope.input5;
            $scope.actual.codigopostal = $scope.input6;
            $scope.actual.telefono = $scope.input7;
            $scope.actual.imagen = $scope.input8;
        }).error(function (data, status, headers, config) {

        });

    };
    
    

    $scope.eliminar = function (nav) {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/clientes6.php?variable1=' + $scope.actual.dni + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            console.log("got info from the server!");
            nav.popPage();
            
        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });
    };

});