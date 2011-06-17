/* Simple slideshow class based on http://www.switchonthecode.com/tutorials/jquery-creating-a-slideshow */
window.Slideshow = (function (holderId, scrollerId, contentClass) {

    var s = {};
    s.totalSlides = 0;
    s.currentSlide = 1;
    s.contentSlides = "";
    s.scrollerId = scrollerId;
    s.totalWidth = 0;
    s.contentSlides = $("." + contentClass);
    s.contentSlides.each(function(i){
        s.totalWidth += this.clientWidth;
        s.totalSlides++;
    });

    $("#" + holderId).width(s.totalWidth);
    $("#" + scrollerId).attr({scrollLeft: 0});

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
      $("#" + s.scrollerId).animate({scrollLeft: scrollAmount}, 500);
    };

    return s;
});
