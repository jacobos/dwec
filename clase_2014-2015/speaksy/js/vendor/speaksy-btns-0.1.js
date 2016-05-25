(function( $ ){


  $.fn.speaksyBtnProgress = function(options, f){
    var phrase;
    var word;
    var settings = $.extend({
    // These are the defaults.
      time: 1000,
      "easing": "linear"
    }, options );

    $(this).each(function (index) {
      var textContent = $.trim($(this).html());
          $(this).html("<span class='content'>"+textContent+"</span><span class='progress'><span class='progress-inner'></span></span>");

     });



    $(this).mouseover(function(){
      $(this).find(".progress-inner").stop().animate({"width" : "100%"}, settings.time,settings.easing,function(){
        f();
        var self = this;
        word = $(this).parent().parent().text();
        if(typeof phrase === "undefined"){
          phrase = word;
        } else {
          phrase += " "+word;
        }

        $("#phraseContainer").val(phrase);
      });
    }).mouseout(function(){
      $(this).find(".progress-inner").stop().animate({"width" : "0%"}, settings.time,settings.easing);
    });
  }

})( jQuery );
