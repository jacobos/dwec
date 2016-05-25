(function() {
  var app = angular.module('pony', []);

  app.controller('ponyController', ['$http', function($http) {
    controller = this;
    this.products = [];

    this.upvote = function(pon) {
      pon.score++;
      controller.votes++;
    }
    this.changeThemeEnter = function(event, info){
      if(event.keyCode == 13)
        controller.changeTheme(info);
    }
    this.changeTheme = function(info) {
      console.log(info);
      $http({
        url: "https://derpibooru.org/search.json?q=" + info,
        type: 'GET',
        dataType: 'json'
      }).success(function(data, status, headers, config) {
        controller.ponies = data.search;
        controller.votes = 0;
        $.each(controller.ponies, function(i, v){
          controller.votes += v.score;
        })
      });console.log("HI");
    }

    this.changeTheme("oc");

  }]);

  app.controller("ReviewController", function() {
    this.comments = [];
  });
})();

