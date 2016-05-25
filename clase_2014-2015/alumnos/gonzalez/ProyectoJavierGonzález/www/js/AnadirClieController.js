module.controller('AnadirClieController', ['$scope', '$http',
                                           
    function ($scope, $http) {
        
        $scope.addcliente = [];   //Aqui, como los objetos los recogemos de los valores de los 

                 $http({
                method: 'JSONP',
     url: 'http://javiergonzalez.tk/070/www/ListadoClientes.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                
                $scope.addcliente = data;

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        
var mostrar = function () {    //Para mostrar el listado de clientes
    
                 $http({
                method: 'JSONP',
     url: 'http://javiergonzalez.tk/070/www/ListadoClientes.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                
                $scope.addcliente = data;

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        
};

        $scope.addClie = function (nombre,apellidos,telefono) { //Para insertar un registro
            
            
            
            
               $http({
                method: 'JSONP',
     url: 'http://javiergonzalez.tk/070/www/AnadirCliente.php?nom=' + nombre + ' &apell=' + apellidos + '&tel=' + telefono 
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                mostrar();
            });
            
            
        
        };
            
        }
                                          ]);