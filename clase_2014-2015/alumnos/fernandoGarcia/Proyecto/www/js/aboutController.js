var module = ons.bootstrap();
module.controller('AboutController', function($scope) {
  ons.createPopover('popover.html').then(function(popover) {
    $scope.popover = popover;
  });
  
  $scope.show = function(e) {
    $scope.popover.show(e);
  };
});