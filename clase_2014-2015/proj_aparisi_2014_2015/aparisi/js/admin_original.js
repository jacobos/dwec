var app = angular.module('main', ['ngTable']);
app.controller('DemoCtrl', function($scope, $http, $filter, $q, ngTableParams) {
    var data = [];
     $http({
            method: 'JSONP',
            url: 'http://javieraparisi.es/proyectociclo/php/clientestabla.php?callback=JSON_CALLBACK'
            }).success(function (datap, status, headers, config) {
         alert(datap);
                data=datap;
            }).error(function (data, status, headers, config) {
                
            });
 
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;
            orderedData = params.filter() ?
                    $filter('filter')(orderedData, params.filter()) :
                    orderedData;

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    

    $scope.checkboxes = { 'checked': false, items: {} };

    // watch for check all checkbox
    $scope.$watch('checkboxes.checked', function(value) {
        angular.forEach($scope.users, function(item) {
            if (angular.isDefined(item.id)) {
                $scope.checkboxes.items[item.id] = value;
            }
        });
    });

    // watch for data checkboxes
    $scope.$watch('checkboxes.items', function(values) {
        if (!$scope.users) {
            return;
        }
        var checked = 0, unchecked = 0,
            total = $scope.users.length;
        angular.forEach($scope.users, function(item) {
            checked   +=  ($scope.checkboxes.items[item.id]) || 0;
            unchecked += (!$scope.checkboxes.items[item.id]) || 0;
        });
        if ((unchecked == 0) || (checked == 0)) {
            $scope.checkboxes.checked = (checked == total);
        }
        // grayed checkbox
        angular.element(document.getElementById("select_all")).prop("indeterminate", (checked != 0 && unchecked != 0));
    }, true);
});