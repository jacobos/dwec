module.controller('PaginaSeleccionadaController2', function ($scope, $http, currentInfoFactory) {
    //$scope.dni=currentInfoFactory.getDni();
    $scope.actual = currentInfoFactory.get();

    $scope.laVariable;
    $scope.laVariable1;
    
    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/coches2.php?variable1=' + $scope.actual.matricula + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
        $scope.laVariable1 = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });

    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/coches3.php?variable1=' + $scope.actual.matricula + '&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
        $scope.laVariable2 = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    


    $scope.colocar = function () {
        $scope.input1 = $scope.actual.matricula;
        $scope.input3 = $scope.actual.dni_cliente;
        $scope.input4 = $scope.actual.marca;
        $scope.input5 = $scope.actual.modelo;
        $scope.input6 = $scope.actual.color;
        $scope.input7 = $scope.actual.kilometros;
       
   };
    $scope.modificar = function () {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/coches4.php?matriculaa=' + $scope.input1 + '&matriculan=' + $scope.input2 + '&dnicliente=' + $scope.input3 + '&marca=' + $scope.input4 + '&modelo=' + $scope.input5 + '&color=' + $scope.input6 + '&kilometros=' + $scope.input7 + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            $scope.actual.matricula = $scope.input2;
            $scope.actual.dni_cliente = $scope.input3;
            $scope.actual.marca = $scope.input4;
            $scope.actual.modelo = $scope.input5;
            $scope.actual.color = $scope.input6;
            $scope.actual.kilometros = $scope.input7;
        }).error(function (data, status, headers, config) {

        });

    };

    $scope.eliminar = function (nav) {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/coches5.php?variable1=' + $scope.actual.matricula + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            console.log("got info from the server!");
            nav.popPage();
            $window.location.reload();
        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });
    };

});