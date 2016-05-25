module.controller('ControladorPedidos', function ($scope, $http) {

    $scope.pedidos = [];

    /*	$scope.clientes.push({
    		nombre: "jacobo",
    		apellidos: "jacobo",
    		domicilio: "jacobo",
    		email: "jacobo",
    		nombre: "jacobo",
    		telefono: "0"
    	});*/

    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;
    var codigo = "";

    $http({
        method: 'JSONP',
        url: 'http://programadorvalencia.es/proyecto/php/monaca/conexion_pedido.php?callback=JSON_CALLBACK'

    }).error(function (data) {
        alert("El server no responde");

    }).success(function (data) {
        $scope.pedidos = $scope.pedidos.concat(data);

        console.log(data);
    });

    $scope.getCurrentPage = function () {

        return $scope.pedidos.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
    };

    $scope.eliminar = function (code) {

        codigo = code;
    };

    $scope.destroyed = function () {
        $http({
            method: 'JSONP',
            url: 'http://programadorvalencia.es/proyecto/php/monaca/eliminar.php?cod=' + codigo + '&pag=pedidos&callback=JSON_CALLBACK'

        }).error(function (data) {
            console.log(data);

        }).success(function (data) {

        });

    };

    $scope.anadirPed = function () {

        if ($scope.nameUser == undefined || $scope.nameCli == undefined || $scope.fechaPed == undefined || $scope.encargoPed == undefined || $scope.precioPed == undefined) {
            alert($scope.nameUser + " " + $scope.nameCli + " " + $scope.fechaPed + " " + $scope.encargoPed + " " + $scope.precioPed);
            alert("Introduce todos los campos correctamete");
        } else {
alert($scope.nameUser + " " + $scope.nameCli + " " + $scope.fechaPed + " " + $scope.encargoPed + " " + $scope.precioPed);
            $http({
                method: 'JSONP',
                url: 'http://programadorvalencia.es/proyecto/php/monaca/add_pedido.php?usuario=' + $scope.nameUser + '&cliente=' + $scope.nameCli +'&fecha=' + $scope.fechaPed + '&encargo=' + $scope.encargoPed + '&precio=' + $scope.precioPed + '&callback=JSON_CALLBACK'

            }).error(function (data) {
                console.log(data);

            }).success(function (data) {

            })

        }
    }
	
	  $scope.changeUser = function () {
		  alert("si");
	  }




});