module.controller('AnadirCancionController', ['$scope', '$http',
  function ($scope, $http) {
        


        $scope.addSong = function (nombre,ano,genero) { //Para insertar un registro
            
             
            
            
               $http({
                method: 'JSONP',
     url: 'http://javicorrecher.tk/onsen/070/www/AñadirCancion.php?nombre=' + nombre + ' &ano=' + ano + '&genero=' + genero 
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                mostrar();   
            });
            
            
        
        };
            
        }
        ]);