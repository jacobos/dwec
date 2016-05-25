module.controller('LandController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.capitales = [{
            img: "http://components.onsen.io/patterns/images/location1.png",
            what: "Eiffel Tower",
            where: "Paris, France",
            desc: "Eiffel Tower is the symbol of Paris and named by Gustave Eiffel."
        }, {
            img: "http://components.onsen.io/patterns/images/location2.png",
            what: "Monument Valley",
            where: "Utah, USA",
            desc: "Director John Ford used Monument Valley for a number of his best-known films."
        }, {
            img: "http://components.onsen.io/patterns/images/location3.png",
            what: "Mount Fuji",
            where: "Japan",
            desc: "Mount Fuji is the highest mountain in Japan and a frequent attractive subject of Japanese art."
        }, {
            img: "http://components.onsen.io/patterns/images/location4.png",
            what: "Tokyo Tower",
            where: "Tokyo, Japan",
            desc: "Tokyo Tower is a communications and observation tower located in Tokyo, Japan."
        }];

        var doSomething = function (d) {
            console.log("doing Something");

            $scope.capitales.push(d);
            //$scope.$apply();
        }

        $scope.new = function () {
            $http({
                method: 'JSONP',
                url: 'http://solvam.eu/ex2_json.php?callback=JSON_CALLBACK'
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

        $scope.newFil = function (param) {
            $http({
                method: 'JSONP',
                url: 'http://solvam.eu/ex4_json.php?info=' + param + '&callback=JSON_CALLBACK'
            }).success(function (data, status, headers, config) {
                $scope.capitales = $scope.capitales.concat(data);
            }).error(function (data, status, headers, config) {
                console.log("Some error ocurred");
            });
        };

        $scope.newAll = function () {
            $http({
                method: 'JSONP',
                url: 'http://solvam.eu/ex3_json.php?callback=JSON_CALLBACK'
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