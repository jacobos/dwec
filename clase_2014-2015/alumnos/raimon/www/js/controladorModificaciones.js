


module.controller('ControladorModificaciones', ['$scope', '$http','currentInfoFactory', function($scope, $http, currentInfoFactory){
		
		$scope.info = [];

		$http({
        method: 'JSONP',
        url: 'http://ramonromero.tk/angular/mostrarpersonajes.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        $scope.info = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
    
	$scope.ponerSeleccion = function (poner) {
        currentInfoFactory.set(poner);
    }
		

}]);


