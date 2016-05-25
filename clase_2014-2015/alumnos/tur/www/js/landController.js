module.controller('LandController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.capitales = [{
            img: "images/onepiece.jpg",
            what: "One Piece",
            where: "Comedy, Adventure.",
            desc: "One Piece was created by Eiichiro Oda, in 1997 was serialized in the Weekly Shonen Jump magazine."
        }, {
            img: "images/berserk.jpg",
            what: "Berserk",
            where: "Action, Seinen.",
            desc: "Created by Kentaro Miura in 1988, the first manga was published in 1990."
        }, {
            img: "images/claymore.jpg",
            what: "Claymore",
            where: "Action, Dark Fantasy.",
            desc: "Written and illustrated by Norihiro Yagi in 2001, but it was published in 2007 due to some issue on the Shonen Jump.  "
        }, {
            img: "images/tokyo.jpg",
            what: "Tokyo Ghoul",
            where: "Gore, Seinen",
            desc: "Serialized in Shueisha's seinen manga magazine Weekly Young Jump between September 2011."
        }];

        var doSomething = function (d) {
            console.log("doing Something");

            $scope.capitales.push(d);
            //$scope.$apply();
        }

     $scope.new = function () {
            $http({
                method: 'JSONP',
                url: 'http://rituba.tk/ex2_json.php?callback=JSON_CALLBACK'
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

     


        $scope.del = function () {
            $scope.capitales.pop();
        };
        $scope.delAll = function () {
            $scope.capitales = [];
        };
        
        
}]);