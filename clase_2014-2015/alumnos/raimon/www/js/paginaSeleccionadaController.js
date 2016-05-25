module.controller('PaginaSeleccionadaController', function ($scope, $http, currentInfoFactory) {
    $scope.actual = currentInfoFactory.get();
	
	$scope.eliminar= function(id2){

		 $http({
                method: 'JSONP',
         url: 'http://ramonromero.tk/angular/eliminarpersonajes.php?id='+id2+'&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
               // doSomething(data);
                // data contains the response
                // status is the HTTP status
                // headers is the header getter function
                // config is the object that was used to create the HTTP request
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
		};
		
		$scope.modificar = function (id3) {
				var id2=id3;
				var nombre2=$("input[name=nombre]").val();
				var edad2=$("input[name=edad]").val();
				var sexo2=$("select[name=sexo]").val();
				var clase2=$("select[name=clase]").val();
		
					$http({
						method: 'JSONP',
				 url: 'http://ramonromero.tk/angular/modificar.php?nombre='+nombre2+'&edad='+edad2+'&sexo='+sexo2+'&clase='+clase2+'&id='+id2+'&callback=JSON_CALLBACK'
					}).success(function (data, status, headers, config) {
                        
						console.log("got info from the server!");
						//doSomething(data);
                        
						// data contains the response
						// status is the HTTP status
						// headers is the header getter function
						// config is the object that was used to create the HTTP request
					}).error(function (data, status, headers, config) {
						console.log("Some error ocurred");
                        $scope.actual = {nombre: nombre2, edad: edad2, sexo: sexo2, clase: clase2, vit:10, pm: 10};
					});
					
					
				};
});
