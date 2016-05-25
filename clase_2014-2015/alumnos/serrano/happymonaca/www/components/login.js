// This is a JavaScript file

var module = ons.bootstrap('myapp', ['onsen']);

module.controller('ControladorTareas', ['$scope', '$http',
         function ($scope, $http) {

		$scope.ponerSeleccion = function (us, pas, nav) {


			if (us == null || pas == null) {
				alert("Rellena todos los campos");

			} else {

				$http({
					method: 'JSONP',
					url: 'http://programadorvalencia.es/proyecto/php/monaca/conexion_monaca.php?usuario=' + us + '&password=' + pas + '&callback=JSON_CALLBACK'

				}).error(function (data) {
					alert("El server no responde");

				}).success(function (data) {

					if (us == "" || pas == "") {
						alert("Rellena todos los campos");

					} else if (data == 'Conectado') {
						nav.pushPage('menu.html', {
							animation: 'slide'
						});

					} else {
						alert(data);
					}
				});

			}

		};
			 
			
         }

]);