module.controller('AnadirClieController', ['$scope', '$http',
                                           
    function ($scope, $http) {
        


        $scope.addClie = function (nombre,apellido,fijo,movil,direccion,mail) { //Para insertar un registro
            
             
            
            
               $http({
                method: 'JSONP',
     url: 'http://proyectophp.tk/070/www/AnadirCliente.php?nom=' + nombre + ' &apell=' + apellido + '&tel=' + fijo + '&mov=' + movil + '&dire=' + direccion + '&mail=' + mail + '&callback2=JSON_CALLBACK',
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                mostrar();
            });
            
              
        
        }; 
        
      
        
        
          
             
        }
                                          ]);