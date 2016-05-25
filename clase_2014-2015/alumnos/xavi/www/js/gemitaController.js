module.controller('GemitaController', ['$scope', '$http',
    function ($scope, $http) {
        var doSomething = function (d) {
            console.log("PUSHING NEW DATA AND SAVING INTO LOCAL");
            //INSERT THE NEW PRODUCT INTO THE PRODUCTS ARRAY (AND SEE IT DIRECTLY!)
            //BINDINGS AUTOMATICALLY MADE!
            $scope.products.push(d);
            //STORE THE DATA LOCALLY
            localStorage.setItem("gemas", JSON.stringify($scope.products));

        }

        // USE THIS IF YOU DON'T WANT TO USE LOCALSTORAGE
        $scope.products = gems;

        // Storing the data locally
        if (localStorage.getItem("gemas") === null) {
            $scope.products = gems;
        } else {
            $scope.products = JSON.parse(localStorage.getItem("gemas"));
        }

         $scope.removeGemasFromLocalStorage = function () {
             localStorage.removeItem("gemas");
         };
        // FUNCTION TO GET NEW OBJECTS FROM A PHP SERVER
        $scope.new = function (param) {
            $http({
                method: 'JSONP',
                url: 'http://jacobo.solvam.net/ex_json.php?info=' + param + '&callback=JSON_CALLBACK'
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
var gems = [
    {
        name: 'Dodecahedron',
        price: 17,
        description: 'Dodecahedron is a nice piece of gem to work with!!',
        canPurchase: true,
        images: [{
            full: "im/gem-01.gif",
            small: "im/gem-01.gif"
        }, {
            full: "im/gem-02.gif",
            small: "im/gem-01.gif"
        }, {
            full: "im/gem-03.gif",
            small: "im/gem-01.gif"
        }],
        reviews: [{
            stars: 5,
            body: "I love this product!",
            author: "joe@thomas.com"
        }, {
            stars: 1,
            body: "This product sucks",
            author: "tim@hater.com"
        }]
    }, {
        name: 'Hex',
        price: 4.95,
        description: 'Triangle is nice!!',
        canPurchase: true,
        reviews: []
    }, {
        name: 'TriangleHex',
        price: 3.95,
        description: 'TriangleHEx is like JF!!',
        canPurchase: true,
        images: [{
            full: "im/gem-03.gif",
            small: "im/gem-03.gif"
        }],
        reviews: []
    }, {
        name: 'Tri Tri',
        price: 4.95,
        description: 'Triangle is nice!!',
        canPurchase: true,
        images: [{
            full: "im/gem-04.gif",
            small: "im/gem-04.gif",
        }],
        reviews: []
    }, {
        name: 'Cube',
        price: 9.95,
        description: 'Triangle is nice!!',
        canPurchase: true,
        images: [{
            full: "im/gem-05.gif",
            small: "im/gem-05.gif",
        }],
        reviews: []
    }, {
        name: 'Star',
        price: 9.95,
        description: 'Triangle is nice!!',
        canPurchase: true,
        images: [{
            full: "im/gem-05.gif",
            small: "im/gem-05.gif",
        }],
        reviews: []
    }
];