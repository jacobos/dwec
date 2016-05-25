module.controller('eliminarController', ['$scope', '$http',
                                           
    function ($scope, $http) {
        
        $scope.canciones = [];  

                 $http({
                method: 'JSONP',
     url: 'http://javicorrecher.tk/onsen/070/www/ListaCanciones.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                
                $scope.canciones = data;

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        
var show = function () {    //Para mostrar el listado de clientes
      
                 $http({
                method: 'JSONP',
     url: 'http://javicorrecher.tk/onsen/070/www/ListaCanciones.php?callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                
                $scope.canciones = data;

            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        
};

        $scope.delete = function (codigo) { //Para insertar un registro
            
            
             
            
               $http({
                method: 'JSONP',
     url: 'http://javicorrecher.tk/onsen/070/www/Delete.php?codigo=' + codigo
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                show();
            });
            
            
        
        };
            
        }
                                          ]);