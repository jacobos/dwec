


module.controller('ControladorPersonajes', ['$scope', '$http', function($scope, $http){

	$scope.cambio= function(){
	var clase="guerrero"
	var sexo="hombre";
		sexo=$("select[name=sexo]").val();
		clase=$("select[name=clase]").val();

		if(($("select[name=clase]").val()=="guerrero") && (sexo=="hombre")){
			
			$("#info").find("img").attr("src","guerreromini.png").attr("style","");
			
		}else{if(($("select[name=clase]").val()=="guerrero") && (sexo=="mujer")){
			$("#info").find("img").attr("src","guerreramini.png");
			} else{if(($("select[name=clase]").val()=="mago") && (sexo=="hombre")){	
			$("#info").find("img").attr("src","magomini.png");
			
		}else{if(($("select[name=clase]").val()=="mago") && (sexo=="mujer")){
			$("#info").find("img").attr("src","magamini.png");
			
				}
			}					
		}
	}	
}

	
	$scope.inserccion = function () {
			var nombre2=$("input[name=nombre]").val();
			var edad2=$("input[name=edad]").val();
			var sexo2=$("select[name=sexo]").val();
			var clase2=$("select[name=clase]").val();
		
            $http({
                method: 'JSONP',
         url: 'http://ramonromero.tk/angular/inserts.php?nombre='+nombre2+'&edad='+edad2+'&sexo='+sexo2+'&clase='+clase2+'&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
                // data contains the response
                // status is the HTTP status
                // headers is the header getter function
                // config is the object that was used to create the HTTP request
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
			
			alert("You have created your character "+nombre2);
        };
		
}]);


