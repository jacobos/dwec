module.controller('paginaSeleccionadaController', function ($scope, $http, currentInfoFactory) {

    $scope.actual = currentInfoFactory.get();
    $scope.edit = function () {
        modal.show();
        $(document).keypress(function (e) {
            if (e.which === 13) {
                var dato = $scope.dato.input;
                alert(dato);

                var titulote = $scope.actual.titulo;
                $http({
                    method: 'JSONP',
                    url: 'http://raullavarias.tk/angular/ex3_json.php?titulo=' + titulote + '&edit=' + dato + '&callback=JSON_CALLBACK'
                })
                $scope.actual.titulo = dato;
                modal.hide();
            }
        });
    };
    

    $scope.delete2 = function (nav) {
       
        titulote2 = $scope.actual.titulo;
        alert("has borrado " + titulote2);
        $http({
                method: 'JSONP',
                url: 'http://raullavarias.tk/angular/ex3_json.php?titulaco=' + titulote2 + '&callback=JSON_CALLBACK',
            
                /*cache : true*/
            })
        
       /* .error(function (data) {
            alert(data);
                console.log(data);

            }).complete(function () {
            
            location.reload();
                 
                nav.pushPage('index.html', {
                    animation: 'slide'
                });


            });*/
       /*location.reload();*/
      /*  url = "page7.html";
$(location).attr('href',url);*/
         
        $scope.ons.navigator.popPage("index.html");
       /* $scope.capitales = $scope.capitales.concat(data);*/
      /*  $scope.ons.navigator.pushPage("index.html")*/
      /* nav.pushPage('index.html', {
                    animation: 'slide'
             });*/
    
        };

});



/*setTimeout('modal.hide()', 2000);*/
/*$("#delete").click(function (nav) {
    


});*/