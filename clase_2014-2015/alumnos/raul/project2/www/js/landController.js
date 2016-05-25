module.controller('landController', ['$scope', '$http',
    function ($scope, $http) {
        
        $scope.lista = [];
        
        var doSomething = function (d) {
           /* console.log("doing Something");*/

            $scope.lista.push(d);
            //$scope.$apply();
        }
        $scope.newFil = function (param, param2) {
            
           var controltitulo = $scope.parametro;
           var controlautor = $scope.parametro2;
            
            console.log("titulo" + controltitulo);
            console.log("autor" + controlautor);
            if((controltitulo === undefined || controltitulo === "") && (controlautor === undefined || controlautor === "")){
                alert("any data set");
            }
            else{
             $scope.lista = [];
            $http({
                method: 'JSONP',
                url: 'http://raullavarias.tk/angular/ex4_json.php?info=' + param + '&info2=' + param2 + '&callback=JSON_CALLBACK'
            }).success(function (data , status, headers, config) {
              $scope.lista = $scope.lista.concat(data);
                console.log(data);
            }).error(function (data, status, headers, config) {
                console.log(data);
                console.log("Some  ocurred");
            });
            }
        };

        $scope.del = function () {
            $scope.lista.pop();
        };
        $scope.delAll = function () {
            $scope.lista = [];
        };
}]);
