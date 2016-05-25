module.controller('PaginaSeleccionadaController', function ($scope, currentInfoFactory) {
    $scope.actual = currentInfoFactory.get();
});
