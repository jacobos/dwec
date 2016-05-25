
module.controller('RecetasController', function ($scope, $http) {
$scope.recetas = [];

    $http({
        method: 'JSONP',
        url:'php/recetas.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        $scope.recetas = data;
       
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
 $scope.addRec = function(name,desc,chef){
        var img =$('#fichero').val().split("\\")[2];
     
       $http({
        method: 'JSONP',
        url:'php/addRec.php?name='+name+'&desc='+desc+'&chef='+chef+'&img='+img
    }).success(function (data, status, headers, config) {
  
       
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
    };
      $scope.delRec = function(name){
        
        
       $http({
        method: 'JSONP',
        url:'php/delRec.php?name='+name+'&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
           $scope.recetas = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
    };
     $scope.modRec1 = function(name){
     
     localStorage.nombre= name;
 
     };
    
     $scope.modRec2 = function(name,desc,date){
          var fd = localStorage.nombre;
         alert();
         
      $http({
        method: 'JSONP',
        url:'php/modRec.php?name='+name+'&desc='+desc+'&date='+date+'&name2='+fd+'&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
          $scope.recetas = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
    };


});