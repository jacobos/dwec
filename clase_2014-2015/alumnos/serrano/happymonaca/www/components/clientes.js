module.controller('paco', function ($scope, $http, currentInfoFactory) {
    $scope.a = 5;
});
    module.controller('ControladorClientes', function ($scope, $http, currentInfoFactory) {

    $scope.clientes = [];

    $scope.clientes.push({
        nombre: "jacobo",
        apellidos: "jacobo",
        domicilio: "jacobo",
        email: "jacobo",
        nombre: "jacobo",
        telefono: "0"
    });

    $scope.itemsPerPage = 10;
    $scope.currentPage = 0;
    var codigo = "";

    $http({
        method: 'JSONP',
        url: 'http://programadorvalencia.es/proyecto/php/monaca/conexion_cliente.php?callback=JSON_CALLBACK'

    }).error(function (data) {
        alert("El server no responde");

    }).success(function (data) {

        $scope.clientes = $scope.clientes.concat(data);

        console.log(data);

    });

    $scope.getCurrentPage = function () {

        return $scope.clientes.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
    };


    $scope.eliminar = function (code) {
        codigo = code;
    };

    $scope.destroyed = function (nav) {
        $http({
            method: 'JSONP',
            url: 'http://programadorvalencia.es/proyecto/php/monaca/eliminar.php?cod=' + codigo + '&pag=clientes&callback=JSON_CALLBACK'

        }).error(function (data) {
            console.log(data);

        }).success(function (data) {
            //nav.popPage();

        });

    };

    $scope.anadir = function () {


        if ($scope.nameUser == undefined || $scope.apellidoUser == undefined || $scope.emailUse2 == undefined || $scope.telefono == undefined || $scope.domicilio == undefined) {
            alert($scope.nameUser + " " + $scope.apellidoUser + " " + $scope.email + " " + $scope.telefono + " " + $scope.domicilio);
            alert("Introduce todos los campos correctamete");
        } else {
            $http({
                method: 'JSONP',
                url: 'http://programadorvalencia.es/proyecto/php/monaca/add_cliente.php?nombre=' + $scope.nameUser + '&apellidos=' + $scope.apellidoUser +
                    '&email=' + $scope.emailUse2 + '&telefono=' + $scope.telefono + '&domicilio=' + $scope.domicilio + '&callback=JSON_CALLBACK'

            }).error(function (data) {
                console.log(data);

            }).success(function (data) {

            })

        }
    }


    $scope.modificar = function (codeCli, nombreCli, apellidosCli, emailCli, telefonoCli, domicilioCli) {
        $scope.codeCli = codeCli;
        $scope.nombreCli = nombreCli;
        $scope.apellidosCli = apellidosCli;
        $scope.emailCli = emailCli;
        $scope.telefonoCli = telefonoCli;
        $scope.domicilioCli = domicilioCli;
        
       
    }
    
    $scope.modCli = function () {
   
        
        $http({

            method: 'JSONP',
            url: 'http://programadorvalencia.es/proyecto/php/monaca/modify_cliente.php?nombres=' + $scope.nombreCli + '&apellidos=' + $scope.apellidosCli + '&emails=' + $scope.emailCli +  '&tlfs=' + $scope.telefonoCli +  '&domicilios=' + $scope.domicilioCli + '&cods=' + $scope.codeCli + '&callback=JSON_CALLBACK'

        }).error(function (data) {
            console.log(data);

        }).success(function (data) {

        })

    }
    
    $scope.ponerSeleccion = function (p) {
    
        currentInfoFactory.set(p);
    }
    
    

});