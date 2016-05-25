(function() {
  var app = angular.module('hearth', ['ngSanitize']);

  app.controller('cardsController', ['$http', function($http) {
    controller = this;

    this.changeMyCardsEnter = function(event, amount) {
      if (event.keyCode == 13)
      ;
      //you pressed enter
    }
    $http({
      url: "https://raw.githubusercontent.com/pdyck/hearthstone-db/master/cards/all-cards.json",
      type: 'GET',
      dataType: 'json'
    }).success(function(data, status, headers, config) {
      console.log(data);
      // array splice...
    });
  }]);
})();
