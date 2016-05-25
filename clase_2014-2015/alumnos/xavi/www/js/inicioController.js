

module.controller('InicioController', function ($scope, $http) {
        
    
    
    $scope.cerrar =  function(nav) {
        
        nav.pushPage("login.html");
            localStorage.usuario="";
        };
      $scope.init = function(nav) {
          
              //  nav.pushPage('page1.html');
    if(localStorage.usuario!=""){        
                nav.pushPage('page1.html');
    }
      }
     
        $scope.inicio = function (email,pass,nav) {
            $http({
                method: 'JSONP',
                url: 'php/inicio.php?email=' + email + '&pass=' + pass + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                if(data == true){
        
                nav.pushPage('page1.html');
                    localStorage.usuario=email;
                    
                }else{
                alert(data);
                }
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
    
    
});