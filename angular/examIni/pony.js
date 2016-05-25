(function() {
  var app = angular.module('pony', []);

  app.controller('ponyController', ['$http', function($http) {
    controller = this;
    this.changeThemeEnter = function(event, xxxyyy){
      if(event.keyCode == 13)
        ;//  controller....(xxxyyy);
    }
    $http({
      url: "https://derpibooru.org/search.json?q=oc", //oc is the term you search
      type: 'GET',
      dataType: 'json'
    }).success(function(data, status, headers, config) {
      controller.ponies = data.search;

      // fields you are going to need
      // image
      // uploader
      // tags
      // score
    });
  }]);

  app.controller("CommentController", function() {
  });

})();
