module.controller('borrar', ['$scope', '$http',
    function ($scope, $http) {

        $scope.borrar = function (dni) {
            $http({
                method: 'JSONP',
                url: 'http://webmasterstudio.tk/070/www/borrar.php?dni=' + dni + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                console.log("got info from the server!");
                doSomething(data);
                // data contains the response
                // status is the HTTP status
                // headers is the header getter function
                // config is the object that was used to create the HTTP request
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };
}]);