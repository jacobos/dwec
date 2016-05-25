var app = angular.module('main', ['ngTable']);
app.controller('DemoCtrl', function ($scope, $http, $filter, $q, ngTableParams) {
    var data = [{
        dni: "48690096Q",
        nombre: "Javier",
        apellidos: "Aparisi",
        usuario: "admin",
        password: "admin123",
        email: "javier_aparisi@hotmail.com",
        direccion: "Riu Vinalopo 4 iz 7",
        codigopostal: "46960",
        telefono: "687161691",
        imagen: "javi3.jpg",
    }, {
        dni: "24312986P",
        nombre: "Josefa",
        apellidos: "Calbuig Feo",
        usuario: "josefita",
        password: "javichu123",
        email: "josefa_calabuig@hotmail.com",
        direccion: "riu vinalopo 4 iz p7",
        codigopostal: "46960",
        telefono: "658414197",
        imagen: "IMG-20130615-WA0037.jpg"
    }];
    $http({
        method: 'JSONP',
        url: 'http://javieraparisi.es/proyectociclo/php/clientestabla.php?callback=JSON_CALLBACK'
    }).success(function (datap, status, headers, config) {
        //alert(datap);
        //alert(datap[0]);
        console.log(datap[1]);
        //$scope.data = datap;
    }).error(function (datap, status, headers, config) {

    });

    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 10 // count per page
    }, {
        total: $scope.data.length, // length of data
        getData: function ($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                $filter('orderBy')($scope.data, params.orderBy()) : $scope.data;
            orderedData = params.filter() ? $filter('filter')(orderedData, params.filter()) : orderedData;

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });



    $scope.checkboxes = {
        'checked': false,
        items: {}
    };

    // watch for check all checkbox
    $scope.$watch('checkboxes.checked', function (value) {
        angular.forEach($scope.users, function (item) {
            if (angular.isDefined(item.id)) {
                $scope.checkboxes.items[item.id] = value;
            }
        });
    });

    // watch for data checkboxes
    $scope.$watch('checkboxes.items', function (values) {
        if (!$scope.users) {
            return;
        }
        var checked = 0,
            unchecked = 0,
            total = $scope.users.length;
        angular.forEach($scope.users, function (item) {
            checked += ($scope.checkboxes.items[item.id]) || 0;
            unchecked += (!$scope.checkboxes.items[item.id]) || 0;
        });
        if ((unchecked == 0) || (checked == 0)) {
            $scope.checkboxes.checked = (checked == total);
        }
        // grayed checkbox
        angular.element(document.getElementById("select_all")).prop("indeterminate", (checked != 0 && unchecked != 0));
    }, true);
});