
module.controller('ChefController', function ($scope, $http) {


    $scope.chefs = [];

    $http({
        method: 'JSONP',
        url:'php/chef.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        $scope.chefs = data;
       
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
     $scope.addChef = function(name,desc,date){
        var img =$('#fichero').val().split("\\")[2];
     
       $http({
        method: 'JSONP',
        url:'php/addChef.php?name='+name+'&desc='+desc+'&date='+date+'&img='+img
    }).success(function (data, status, headers, config) {
  
       
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
    };
      $scope.delChef = function(name){
        
        
       $http({
        method: 'JSONP',
        url:'php/delChef.php?name='+name+'&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
           $scope.chefs = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
    };
     $scope.modChef1 = function(name){
     
     localStorage.nombre= name;
 
     };
    
     $scope.modChef2 = function(name,desc,date){
          var fd = localStorage.nombre;

         
      $http({
        method: 'JSONP',
        url:'php/modChef.php?name='+name+'&desc='+desc+'&date='+date+'&name2='+fd+'&callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
          $scope.chefs = data;
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
    
    };
    
    
});
