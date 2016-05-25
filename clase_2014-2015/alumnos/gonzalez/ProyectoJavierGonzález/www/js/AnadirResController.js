module.controller('AnadirResController', ['$scope', '$http',
                                           
    function ($scope, $http) {
        
        $scope.resultRes = [];   //Aqui, como los objetos los recogemos de los valores de los 

                 $http({
                method: 'JSONP',
     url: 'http://javiergonzalez.tk/070/www/ListadoReservas.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                
                $scope.resultRes = data;

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        
var mostrar = function () {    //Para mostrar el listado de clientes
    
                 $http({
                method: 'JSONP',
     url: 'http://javiergonzalez.tk/070/www/ListadoReservas.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                
                $scope.resultRes = data;

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        
};

 
                                           
                                           
        $scope.addRes = function (Idcliente,npersonas,mesa,Fecha,Hora,Menu,Bebida) { //Para insertar un registro
            
            
               $http({
                method: 'JSONP',
     url: 'http://javiergonzalez.tk/070/www/AñadirReserva.php?nom=' + Idcliente + ' &num=' + npersonas + '&mes=' + mesa + ' &fec=' + Fecha + ' &hor=' + Hora + ' &men=' + Menu + ' &beb=' + Bebida 
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                mostrar();
            });
            
            
        
        };
            
        }
                                          ]);