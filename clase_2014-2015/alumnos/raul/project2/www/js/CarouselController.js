
module.controller('CarouselController', function ($scope,$http) {
    $scope.topicos = [];
        
        var doSomething = function (d) {
            console.log("doing Something");

            $scope.topicos.push(d);
        }
     $scope.topicos = [];
    $http({
method: 'JSONP',
url: 'http://raullavarias.tk/angular/carousel.php?callback=JSON_CALLBACK'
            }).success(function (data , status, headers, config) {
            /*$scope.topicos = doSomething(data);*/
         $scope.topicos = data;
        
                console.log("data succes" + data);
            }).error(function (data, status, headers, config) {
                console.log("data error" + data);
                console.log("Some  ocurred");
            });
    
});

 /*$scope.getCurrentPage = function () {

        return $scope.usurs.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
    };


<tr ng-repeat="user in getCurrentPage()">
                <td>{{user.codigo}}</td>
                <td>{{user.nombre}}</td>
                <td>{{user.apellidos}}</td>
                <td>{{user.email}}</td>
                <td>
*/