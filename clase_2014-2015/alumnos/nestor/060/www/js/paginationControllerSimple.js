module.controller('PaginationControllerSimple', function ($scope) {
    $scope.itemsPerPage = 4;
    $scope.items = ['unos', 'dos', true, 4, 5, 6, 7, 8, 9, 10, 11];
    $scope.currentPage = 0;

    $scope.getCurrentPage = function () {
        return $scope.items.slice($scope.currentPage * $scope.itemsPerPage,
            $scope.currentPage * $scope.itemsPerPage + $scope.itemsPerPage);
    };

    $scope.nextPage = function () {
        $scope.currentPage = Math.min(parseInt(($scope.items.length - 1) / $scope.itemsPerPage),
            $scope.currentPage + 1);
    }

    $scope.prevPage = function () {
        $scope.currentPage = Math.max(0, $scope.currentPage - 1);
    }
});
