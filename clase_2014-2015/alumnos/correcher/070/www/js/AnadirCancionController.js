module.controller('AnadirCancionController', ['$scope', '$http',
                                           
    function ($scope, $http) {
        
        $scope.canciones = [];   //Aqui, como los objetos los recogemos de los valores de los 

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

              $scope.addSong = function (nombre,ano,genero,duracion,puntuacion) { //Para insertar un registro
             //Para insertar un registro
            
            
             
            
               $http({
                method: 'JSONP',
    url: 'http://javicorrecher.tk/onsen/070/www/AnadirCancion.php?nombre=' + nombre + ' &ano=' + ano + '&genero=' + genero + '&duracion=' + duracion + '&puntuacion=' + puntuacion + '&callback2=JSON_CALLBACK',
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                show();
            });
            
            
        
        };
            
        }
                                          ]);
