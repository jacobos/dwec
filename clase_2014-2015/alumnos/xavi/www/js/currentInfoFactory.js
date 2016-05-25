module.factory('currentInfoFactory', function () {
    var currentInfo = {};
    var miServicio = {};
    miServicio.set = function (poner) {
        currentInfo = poner;
    };
    miServicio.get = function () {
        return currentInfo;
    };

    return miServicio;
});
