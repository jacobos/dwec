module.controller('PaginaSeleccionadaController', function ($http,$scope, currentInfoFactory) {
    $scope.actual = currentInfoFactory.get();

    $scope.eliminator = function (nombre) {
            $http({
                method: 'GET',
                url: 'http://nestorlopezbarchino.com/onsen/del.php?info=' + nombre + '&callback=JSON_CALLBACK',
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                $scope.actual = data;
                ons.navigator.popPage();
                
            }).error(function (data, status, headers, config) {
                ons.navigator.popPage(); 
            });          
    };
    
    $scope.updator = function (name, family, material, description, image) {
        console.log("update");
            $http({
                method: 'GET',
                url: 'http://nestorlopezbarchino.com/onsen/up.php?name=' + name + '&family=' + family + '&material=' + material + '&description=' + description + '&image=' + image + '&callback=JSON_CALLBACK',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function (data, status, headers, config) {
                console.log(name+family+material+description+image);
                $scope.actual = data;
                ons.navigator.popPage();
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
                ons.navigator.popPage();
            });
        };
    
    

});

