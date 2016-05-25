module.controller('LandController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.capitales = [];

        var doSomething = function (d) {
            console.log("doing Something");

            $scope.capitales.push(d);
            //$scope.$apply();
        }

        $scope.newFil = function (param) {
            $scope.capitales = [];
            $http({
                method: 'JSONP',
                url: 'http://nestorlopezbarchino.com/onsen/ex4_json.php?info=' + param + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                $scope.capitales = $scope.capitales.concat(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };

        $scope.del = function () {
            $scope.capitales.pop();
        };
        $scope.delAll = function () {
            $scope.capitales = [];
        };
}]);