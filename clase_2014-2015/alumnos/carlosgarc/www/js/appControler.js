module.controller('AppController', function ($scope, $http) {
    $scope.go = function(){
        location.replace("page3.html");
    }
});