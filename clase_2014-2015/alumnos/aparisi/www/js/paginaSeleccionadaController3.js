module.controller('PaginaSeleccionadaController3', function ($scope, $http, currentInfoFactory) {
    //$scope.dni=currentInfoFactory.getDni();
    $scope.actual = currentInfoFactory.get();
    $scope.laVariable;
    $scope.laVariable1;
    
    angular.element(document).ready(function() {
      if($scope.actual.stock=="SI"){
     $("#chek").setAttribute("cheked",null);   
    }
    });
    
    $scope.colocar = function () {
        $scope.input1 = $scope.actual.referencia;
        $scope.input3 = $scope.actual.descripcion;
        $scope.input4 = $scope.actual.precio;
        $scope.input5 = $scope.actual.stock;
        $scope.input6 = $scope.actual.imagen;    
       
   };
    $scope.modificar = function () {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/piezas2.php?referenciaa=' + $scope.input1 + '&referencian=' + $scope.input2 + '&descripcion=' + $scope.input3 + '&precio=' + $scope.input4 + '&stock=' + $scope.input5 + '&imagen=' + $scope.input6 + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            $scope.actual.referencia = $scope.input2;
            $scope.actual.descripcion = $scope.input3;
            $scope.actual.precio = $scope.input4;
            $scope.actual.stock = $scope.input5;
            $scope.actual.imagen = $scope.input6;
        }).error(function (data, status, headers, config) {

        });

    };

    $scope.eliminar = function (nav) {
        $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyecto/php/piezas3.php?variable1=' + $scope.actual.referencia + '&callback=JSON_CALLBACK'
        }).success(function (data, status, headers, config) {
            console.log("got info from the server!");
            nav.popPage();
        }).error(function (data, status, headers, config) {
            console.log("Some error ocurred");
        });
    };

});