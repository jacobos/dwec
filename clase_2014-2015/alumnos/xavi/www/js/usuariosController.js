module.controller('UsuariosController', function ($scope, $http) {
        
    var email = localStorage.usuario;
   $scope.usuarios = [];

    $http({
        method: 'JSONP',
        url:'php/usuario.php?callback=JSON_CALLBACK&email='+email
    }).success(function (data, status, headers, config) {
        $scope.usuarios = data;
    
       
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
     $scope.addUs = function(name,desc,chef){
        var img =$('#fichero').val().split("\\")[2];
     
       $http({
        method: 'JSONP',
        url:'php/addRec.php?name='+name+'&desc='+desc+'&chef='+chef+'&img='+img
    }).success(function (data, status, headers, config) {
  
       
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
    };
    
});