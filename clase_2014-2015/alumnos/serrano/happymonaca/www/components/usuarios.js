module.controller('ControladorUsuarios', function ($scope, $http) {

    $scope.usurs = [];
    var cod = "vacio";
    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;


    $http({
        method: 'JSONP',
        url: 'http://programadorvalencia.es/proyecto/php/monaca/conexion_usuarios.php?callback=JSON_CALLBACK'

    }).error(function (data) {
        alert("El server no responde");

    }).success(function (data) {
        $scope.usurs = $scope.usurs.concat(data);

        console.log(data);
    });

    $scope.getCurrentPage = function () {

        return $scope.usurs.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
    };


    $scope.eliminar = function (codigo) {
        cod = codigo;
    };


    $scope.destroyed = function () {
        $http({
            method: 'JSONP',
            url: 'http://programadorvalencia.es/proyecto/php/monaca/eliminar.php?cod=' + cod + '&pag=usuarios&callback=JSON_CALLBACK'

        }).error(function (data) {
            console.log(data);

        }).success(function (data) {

        });
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