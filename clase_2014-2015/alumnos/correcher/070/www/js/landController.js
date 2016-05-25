module.controller('LandController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.canciones = [{
            img: "http://data2.whicdn.com/images/30278360/original.jpg",
            what: "Animal i have become",
            where: "Three Days Grace",
            desc: "One of the most epic songs ever."
        }, {
            img: "http://wac.450f.edgecastcdn.net/80450F/loudwire.com/files/2012/06/Rise-Against-Appeal-to-Reason.jpg",
            what: "Savior",
            where: "Rise Against",
            desc: "Other great song and i like it."
        }, {
            img: "http://upload.wikimedia.org/wikipedia/en/6/65/Michael_Jackson_-_Beat_It_cover.jpg",
            what: "Beat ot",
            where: "Michael Jackson",
            desc: "Mount Fuji is the highest mountain in Japan and a frequent attractive subject of Japanese art."
        }, {
            img: "http://i.ytimg.com/vi/6vUiQRucHsM/hqdefault.jpg",
            what: "Curro y sacrificio",
            where: "SDFK",
            desc: "First rap song on my live."
        }];
 
        var doSomething = function (d) {
            console.log("doing Something");

            $scope.canciones.push(d);
            //$scope.$apply();
        }

        $scope.new = function () {
            $http({
                method: 'JSONP',
                url: 'http://javicorrecher.tk/onsen/070/www/ex2_json.php?callback=JSON_CALLBACK'
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


        $scope.newAll = function () {
              $http({
        method: 'JSONP',
        url: 'http://javicorrecher.tk/onsen/070/www/ex3_json.php?callback=JSON_CALLBACK'
    }).success(function (data, status, headers, config) {
        $scope.items = data;
                  doSomething(data);
    }).error(function (data, status, headers, config) {
        console.log("Some error ocurred");
    });
            
            
                
            
            
        };

        $scope.del = function () {
            $scope.canciones.pop();
        };
        $scope.delAll = function () {
            $scope.canciones = [];
        };
}]);