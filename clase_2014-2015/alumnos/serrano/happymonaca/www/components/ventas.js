module.controller('ControladorVentas', function ($scope, $http) {

    $scope.ventas = [];

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
        url: 'http://programadorvalencia.es/proyecto/php/monaca/conexion_ventas.php?callback=JSON_CALLBACK'

    }).error(function (data) {
        alert("El server no responde");

    }).success(function (data) {
        $scope.ventas = $scope.ventas.concat(data);

        console.log(data);
    });

    $scope.getCurrentPage = function () {

        return $scope.ventas.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
    };

    $scope.anadir = function () {


        if ($scope.nameUser == undefined || $scope.apellidoUser == undefined || $scope.identUser == undefined || $scope.passUser == undefined || $scope.emailUse2 == undefined) {
            alert("Introduce todos los campos correctamete");
        } else {
            $http({
                method: 'JSONP',
                url: 'http://programadorvalencia.es/proyecto/php/monaca/add_user.php?nombre=' + $scope.nameUser + '&apellidos=' + $scope.apellidoUser + '&nameLogin=' + $scope.identUser + '&paswordLogin=' + $scope.passUser + '&correoUsuarios=' + $scope.emailUse2 + '&callback=JSON_CALLBACK'

            }).error(function (data) {
                console.log(data);

            }).success(function (data) {

            })

        }
    }

    $scope.eliminar = function (code) {
        codigo = code;
    };

    $scope.destroyed = function () {
        $http({
            method: 'JSONP',
            url: 'http://programadorvalencia.es/proyecto/php/monaca/eliminar.php?cod=' + codigo + '&pag=ventas&callback=JSON_CALLBACK'

        }).error(function (data) {
            console.log(data);

        }).success(function (data) {

        });

    };

    $scope.modificar = function (code, nombre, apellidos, email) {
        $scope.code = code;
        $scope.nameUser = nombre;
        $scope.apellidosUser = apellidos;
        $scope.emailUser = email;
    }

    $scope.modUsers = function () {

        $http({

            method: 'JSONP',
            url: 'http://programadorvalencia.es/proyecto/php/monaca/modify_user.php?name=' + $scope.nameUser + '&apell=' + $scope.apellidosUser + '&email=' + $scope.emailUser + '&cod=' + $scope.code + '&callback=JSON_CALLBACK'

        }).error(function (data) {
            console.log(data);

        }).success(function (data) {

        })

    }

});