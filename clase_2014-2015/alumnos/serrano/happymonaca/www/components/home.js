// This is a JavaScript file

module.controller('Tabular', ['$scope', 
         function ($scope) {

		$scope.irClientes = function (nav) {
			alert("sss");
			nav.pushPage('clientes.html', {
				animation: 'slide'
			});

		};

         }

]);