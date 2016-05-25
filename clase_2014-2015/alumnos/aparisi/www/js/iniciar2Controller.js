module.controller('iniciar2Controller', function ($scope, $http) {
        
     $scope.cerrar = function (nav) {
          $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyecto/php/index2.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        console.log("got info from the server!");
       location.reload();
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
      };
        
     
    
});