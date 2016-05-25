module.factory('factoria', function () {
    var array=[];
    var miServicio2 = {};
    
    miServicio2.set = function (poner) {
        array = poner;
    };
    miServicio2.get = function () {
        return array;
    };
    
    return miServicio2;
});
