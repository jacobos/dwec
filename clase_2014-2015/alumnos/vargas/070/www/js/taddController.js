module.controller('taddController', ['$scope', '$http',

    function ($scope, $http) {

                $scope.insertview = []; //variable creada para recojer los datos de la bbdd en forma de array de objetos
                
        // con este metodo lo que hacemos es nada mas cargar la pagina dibuja una lista con los elementos de la bbdd
                $http({
                    method: 'JSONP',
                    url: 'http://rubenfreelance.tk/070/www/tadd.php?callback=JSON_CALLBACK'
                }).success(function (data, status, headers, config) {

                    $scope.insertview = data;

                }).error(function (data, status, headers, config) {
                    console.log("Some error ocurred");
                });

        
            // esto es un metodo utilizado para que cuando añadas una tarea vuelva a dibujar la lista sin necesidad de cargar la pagina
           /* var repintar = function () { //funcion para volver a poner la tabla sin refrescar

                    $http({
                        method: 'JSONP',
                        url: 'http://rubenfreelance.tk/070/www/tadd.php?callback=JSON_CALLBACK'
                    }).success(function (data, status, headers, config) {

                        $scope.insertview = data;

                    }).error(function (data, status, headers, config) {
                        console.log("Some error ocurred");
                    });
                }
        */
        
                //funcion para añadir a la bbdd
                $scope.addTask = function (tarea) { //Para insertar un registro
                                ons.notification.alert({message: 'The '+tarea+' has been added'});
                    $http({
                        method: 'JSONP',
                        //llama al php y le pasa los datos recogidos del input
                        url: 'http://rubenfreelance.tk/070/www/tadd.php?task=' + tarea 
                    }).success(function (data, status, headers, config) {
                        console.log("got info from the server!");

                    }).error(function (data, status, headers, config) {
                        console.log("Some error ocurred");
                        $scope.insertview = $scope.insertview.concat({tarea: tarea, estado: "complete"});
//                        repintar();
                    });
                };
        
        

                }
                ]);