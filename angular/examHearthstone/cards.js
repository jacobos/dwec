(function() {
  var app = angular.module('hearth', ['ngSanitize']);

  app.controller('cardsController', ['$http', function($http) {
    controller = this;

    this.upvote = function(pon) {
      pon.health++;
      controller.totalHealth++;
    }
    this.modifyMe = function(card){
      card.web = "web";
    }
    this.changeMyCardsEnter = function(event, amount){
      if(event.keyCode == 13)
        controller.getMyCards(amount);
    }
    this.getMyCards = function(amount) {
      $http({
        url: "https://raw.githubusercontent.com/pdyck/hearthstone-db/master/cards/all-cards.json",
        type: 'GET',
        dataType: 'json'
      }).success(function(data, status, headers, config) {
        controller.cards = data.cards.splice(0, amount);
        console.log(controller.cards);
        controller.totalHealth = 0;
        $.each(controller.cards, function(i, v){
          controller.totalHealth += v.health;
        })
      });
    }

    this.getMyCards(12);

  }]);

  app.controller("ReviewController", function() {
    this.comments = [];
  });
})();
