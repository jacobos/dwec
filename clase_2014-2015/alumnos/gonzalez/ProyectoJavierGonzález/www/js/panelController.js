module.controller('panelController', function () {
    this.tab = 1;

    this.selectTab = function (setTab) {
        this.tab = setTab;
    };
    this.isSelected = function (sTab) {
        return this.tab === sTab;
    };

});
