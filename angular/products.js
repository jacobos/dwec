(function() {
  var app = angular.module('product-controller', []);
  
    app.controller("ReviewController", function() {
      this.review = {};
      this.review.stars = 4;
      this.addReview = function(product) {
        console.log("HI");
        product.reviews.push(this.review);
        //localStorage.setItem("gemas", JSON.stringify(products));
        this.review = {};
      };
    });

    app.directive('productTitle', function() {
      return {
        restrict: 'E',
        templateUrl: 'product-title.html'
      };
    });
    app.directive('productPanels', function() {
      return {
        restrict: 'E',
        templateUrl: 'product-panels.html',
        controller: function() {
          this.tab = 1;

          this.selectTab = function(setTab) {
            this.tab = setTab;
          };

          this.isSelected = function(checkTab) {
            return this.tab === checkTab;
          };
        },
        controllerAs: 'panel'
      };
    });
})();
