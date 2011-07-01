Slideshow.js
============

Simple javascript class for doing sideways animated scrolling in javascript using jQuery.
<a href="http://thomasfl.github.com/slideshow.html">Demo</a>.

## Installation ##

```html
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="slideshow.js"></script>
```

## Usage ##

The javascript API is simple, the hard thing is to get the CSS right. Look at the inline CSS.

```html
<div id="slideshow-area">
  <div id="slideshow-scroller">
    <div id="slideshow-holder">
      <div class="slideshow-content">
             <p>1. Lorem ipsum dolor. <a href="#" onclick="slideshow.showNextSlide();">Next</a></p>
      </div>
      <div class="slideshow-content">
             <p>2. Lorem ipsum dolor. <a href="#" onclick="slideshow.showNextSlide();">Next</a></p>
      </div>
    </div>
  </div>
</div>
```

Initiate it with the id's of the div's:

```javascript
  slideshow = new Slideshow({
              holderId: 'slideshow-holder',
              scrollerId: 'slideshow-scroller',
              contentClass: 'slideshow-content'});
  $("#next_link".click(function(){slideshow.showNextSlide();});
  $("#prev_link".click(function(){slideshow.showPreviousSlide();});
```

Use slideshow.showPreviousSlide() or slideshow.showNextSlide() to switch between slides. To slow down the animation
add the parameter 'duration':

```javascript
  slideshow = new Slideshow({
              holderId: 'slideshow-holder',
              scrollerId: 'slideshow-scroller',
              contentClass: 'slideshow-content',
              duration: 1000});
```

A callback function will be triggered when animation is completed:

```javascript
  slideshow = new Slideshow({
                  holderId: 'slideshow-holder',
                  scrollerId: 'slideshow-scroller',
                  contentClass: 'slideshow-content'
                },
                function(){
                  alert("Slide " + slideshow.currentSlide + " of " + slideshow.totalSlides );
                });
```


Credits
=======
Based on the tutorial http://www.switchonthecode.com/tutorials/jquery-creating-a-slideshow
I fixed a bug in the tutorial, simplified it and wrapped the code in to a javascript class to
avoid polluting the namespace.

