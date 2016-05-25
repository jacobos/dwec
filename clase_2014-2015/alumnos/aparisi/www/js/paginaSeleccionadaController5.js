module.controller('PaginaSeleccionadaController5', function ($scope, $http, currentInfoFactory) {
    //$scope.dni=currentInfoFactory.getDni();
    $scope.actual = currentInfoFactory.get();
    
    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/facturas2.php?variable1=' + $scope.actual.matricula + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
        $scope.laVariable1 = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });

    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/facturas3.php?variable1=' + $scope.actual.matricula + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
       $scope.laVariable2 = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    


    $scope.colocar = function () {
        $scope.input1 = $scope.actual.numfactura;
        $scope.input3 = $scope.actual.dni_cliente;
        $scope.input4 = $scope.actual.matricula;
        $scope.input5 = $scope.actual.numreparacion;
        $scope.input6 = $scope.actual.referencia;
        $scope.input7 = $scope.actual.fecha;
        $scope.input8 = $scope.actual.precio;
       
   };
    $scope.modificar = function () {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/facturas4.php?numfacturaa=' + $scope.input1 + '&numfacturan=' + $scope.input2 + '&dni_cliente=' + $scope.input3 + '&matricula=' + $scope.input4 + '&numreparacion=' + $scope.input5 + '&referancia=' + $scope.input6 + '&fecha=' + $scope.input7 + '&precio=' + $scope.input8 + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            $scope.actual.numfactura = $scope.input2;
            $scope.actual.dni_cliente = $scope.input3;
            $scope.actual.matricula = $scope.input4;
            $scope.actual.numreparacion = $scope.input5;
            $scope.actual.referencia = $scope.input6;
            $scope.actual.fecha = $scope.input7;
            $scope.actual.precio = $scope.input8;
        }).error(function (data, status, headers, config) {

        });

    };

    $scope.eliminar = function (nav) {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/facturas5.php?variable1=' + $scope.actual.numfactura + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            console.log("got info from the server!");
            nav.popPage();
        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });
    };

});