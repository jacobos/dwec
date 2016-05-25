


module.controller('juanfran', function ($scope, $http, currentInfoFactory) {
    $scope.juanfransito = 4;
});



module.controller('MaquinasController', function ($scope, $http, currentInfoFactory) {

 $scope.salir = function() {
   localStorage.usuario = "";
 }
  $scope.goCats = false;

    $scope.maquinas = [];
    var addMaquina = function(d) {
      console.log("doing Something");
      $scope.maquinas = [];

      $scope.maquinas = $scope.maquinas.concat(d);
      //$scope.$apply();
    }

    var llamamaquinas = function() {
      $http({
        method: 'JSONP',
        //url: 'conexionmaquinas.php?callback=JSON_CALLBACK'
         url: 'http://www.juanfrantomas.com/sanchissystems/onseui/conexionmaquinas.php?callback=JSON_CALLBACK'
      }).success(function(data, status, headers, config) {
        console.log("got info from the servero!");
        addMaquina(data);
        // data contains the response
        // status is the HTTP status
        // headers is the header getter function
        // config is the object that was used to create the HTTP request
      }).error(function(data, status, headers, config) {
        console.log("Some error ocurred");
      });
    };

    $http({
      method: 'JSONP',
      //url: 'conexionmaquinas.php?callback=JSON_CALLBACK'
      url: 'http://www.juanfrantomas.com/sanchissystems/onseui/conexionmaquinas.php?callback=JSON_CALLBACK'
    }).success(function(data, status, headers, config) {
      console.log("got info from the server!");
      addMaquina(data);
      // data contains the response
      // status is the HTTP status
      // headers is the header getter function
      // config is the object that was used to create the HTTP request
    }).error(function(data, status, headers, config) {
      console.log("Some error ocurred");
    });
var otravez = function () {
    $http({
      method: 'JSONP',
      //url: 'conexionmaquinas.php?callback=JSON_CALLBACK'
      url: 'http://www.juanfrantomas.com/sanchissystems/onseui/conexionmaquinas.php?callback=JSON_CALLBACK'
    }).success(function(data, status, headers, config) {
      console.log("got info from the server!");
      addMaquina(data);
      // data contains the response
      // status is the HTTP status
      // headers is the header getter function
      // config is the object that was used to create the HTTP request
    }).error(function(data, status, headers, config) {
      console.log("Some error ocurred");
    });

  };
    $scope.buscarmaquina = function(dato) {
      $http({
        method: 'JSONP',
        url: 'http://www.juanfrantomas.com/sanchissystems/onseui/conexionmaquinas.php?maquina=' + dato + ''
      }).success(function(data, status, headers, config) {
        console.log("got info from the server!");
        addMaquina(data);
        // data contains the response
        // status is the HTTP status
        // headers is the header getter function
        // config is the object that was used to create the HTTP request
      }).error(function(data, status, headers, config) {
        console.log("Some error ocurred");
      });
    };
    $scope.getMaquinas = function () {
      return $scope.maquinas;
    };

    $scope.ponerSeleccion = function (maquina) {

     currentInfoFactory.set(maquina);

    }

    $scope.processForm = function() {
      alert("pulsado submit"+$scope.formData.nombre);
  var nombre = $scope.formData.nombre;
  var desc = $scope.formData.desc;
  var archivo = $scope.formData.archivo;

  var modelo = $scope.formData.modelo;
  var cap_carga = $scope.formData.cap_carga;
  var elevacion = $scope.formData.elevacion;
  var alquiler = $scope.formData.alquiler;
  var venta = $scope.formData.venta;
  var preciodia = $scope.formData.preciodia;
  var preciototal = $scope.formData.preciototal;
$http({
  method: 'JSONP',
  url: "http://www.juanfrantomas.com/sanchissystems/onseui/crearmaquina.php?nombre=" + nombre + "&desc=" + desc + "&modelo=" + modelo + "&cap_carga=" + cap_carga + "&elevacion=" + elevacion + "&alquiler=" + alquiler + "&venta=" + venta + "&preciodia=" + preciodia + "&preciototal=" + preciototal + "&callback=JSON_CALLBACK",
  headers: {'Content-Type': 'application/x-www-form-urlencoded'} // set the headers so angular passing info as form data (not request payload)
  }).success(function(data) {

    otravez();
      console.log(dataObject);


      ons.navigator.popPage();
// if not successful, bind errors to error variables

  }).error(function(data) {
    otravez();
      ons.navigator.popPage();
      console.log(data);
    });
  };
});

  module.controller('PaginaSeleccionadaController', function ($scope,$http, currentInfoFactory) {
    $scope.actual = currentInfoFactory.get();
    $scope.eliminarmaquina = function(codigo) {
      var r = confirm("¿Desea eliminar la maquina con el id "+codigo+"?");
  if (r == true) {
    $http({
      method: 'JSONP',
      //url: 'conexionmaquinas.php?callback=JSON_CALLBACK'
      url: 'http://www.juanfrantomas.com/sanchissystems/onseui/borrarmaquina.php?codigo='+codigo+'&callback=JSON_CALLBACK'
    }).success(function(data, status, headers, config) {

      ons.navigator.popPage();
      console.log("got info from the server!");
    //  addMaquina(data);
      // data contains the response
      // status is the HTTP status
      // headers is the header getter function
      // config is the object that was used to create the HTTP request
    }).error(function(data, status, headers, config) {
      console.log("Some error ocurred");
      ons.navigator.popPage();


    });
  } else {
alert("no eliminada");
  }

    };
    $scope.editarmaquina = function(codigo) {
      alert("Editar con el id:"+codigo);

    };



});



module.controller('AlquilerController', function ($scope, $http) {
   var addalquiler = function (d) {
    $scope.alquileres = [];

    $scope.alquileres = $scope.alquileres.concat(d);


  };
  var actualiza = function () {
    $http({
      method: 'JSONP',
      url: "http://juanfrantomas.tk/conexionmaquinas.php?callback=JSON_CALLBACK",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'} // set the headers so angular passing info as form data (not request payload)
      }).success(function(data) {

        addalquiler(data);


    // if not successful, bind errors to error variables

      }).error(function(data) {
        addalquiler(data);
          console.log(data);
        });

  }
  $http({
    method: 'JSONP',
    url: "http://juanfrantomas.tk/conexionmaquinas.php?callback=JSON_CALLBACK",
    headers: {'Content-Type': 'application/x-www-form-urlencoded'} // set the headers so angular passing info as form data (not request payload)
    }).success(function(data) {

      addalquiler(data);


  // if not successful, bind errors to error variables

    }).error(function(data) {
      addalquiler(data);
        console.log(data);
      });


  $scope.crearahora = function(inputalquier){
alert(inputalquier.nombre);

    $http({
      method: 'JSONP',
      url: "http://juanfrantomas.tk/crearalquiler.php?nombre="+inputalquier.nombre+"&lugar="+inputalquier.lugar+"&hora="+inputalquier.hora+"&telefono="+inputalquier.telefono+"&callback=JSON_CALLBACK",
      headers: {'Content-Type': 'application/x-www-form-urlencoded'} // set the headers so angular passing info as form data (not request payload)
      }).success(function(data) {
    actualiza();


    // if not successful, bind errors to error variables

      }).error(function(data) {
      actualiza();
          console.log(data);
        });

  };
  $scope.goCats = false;



});
