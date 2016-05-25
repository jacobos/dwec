module.controller('loginform', ['$scope', '$http',
  function($scope, $http) {

    $scope.init = function(nav) {
      if (localStorage.usuario != null) {
//alert(localStorage.usuario);
        nav.pushPage('inicio.html');
      }
    }



    $scope.entrar = function(usuario, pass, nav) {
      /*
       $scope.formData = {
         usuario: usuario,
         pass: pass
       };*/
      $http({
        method: 'JSONP',
        url: 'http://www.juanfrantomas.com/sanchissystems/php/clientemovil.php?usuario=' + usuario + '&pass=' + pass + '&callback=JSON_CALLBACK',
        //  data    : $.param($scope.formData),  // pass in data as strings
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        } // set the headers so angular passing info as form data (not request payload)
      }).success(function(data) {
        console.log(data['success']);
        $scope.datos = data['success'];
        if ($scope.datos == true) {
          localStorage.usuario = usuario;
          nav.pushPage('inicio.html');
        } else {
          alert("Los datos no son correctos o estan vacios");
        }


      });
    };



  }
]);
