module.controller("ReviewController", function () {
    this.review = {};
    this.addReview = function (product, products) {
        product.reviews.push(this.review);
        localStorage.setItem("gemas", JSON.stringify(products));
        this.review = {};
    };
});
