/* Simple slideshow to scroll content of divs sideways
* class based on http://www.switchonthecode.com/tutorials/jquery-creating-a-slideshow */
window.Slideshow = (function (params, complete) {

    // var holderId = params.holderId;
    // var scrollerId = params.scrollerId;
    // var contentClass = params.contentClass;


    var s = {};
    s.duration = params.duration;
    if(s.duration === undefined){
        s.duration = 500;
    }
    s.totalSlides = 0;
    s.currentSlide = 1;
    s.contentSlides = "";
    s.scrollerId = params.scrollerId;
    s.totalWidth = 0;
    s.contentSlides = $("." + params.contentClass);
    s.contentSlides.each(function(i){
        s.totalWidth += this.clientWidth;
        s.totalSlides++;
    });

    $("#" + params.holderId).width(s.totalWidth);
    $("#" + s.scrollerId).attr({scrollLeft: 0});

    s.showPreviousSlide = function(){
      s.currentSlide--;
      s.updateContentHolder();
    };

    s.showNextSlide = function(){
      s.currentSlide++;
      s.updateContentHolder();
    };

    s.updateContentHolder = function(){
      var scrollAmount = 0;
      s.contentSlides.each(function(i){
        if(s.currentSlide - 1 > i) {
          scrollAmount += this.clientWidth;
        }
      });
        $("#" + s.scrollerId).animate({scrollLeft: scrollAmount}, s.duration, complete);

    };

    return s;
});
