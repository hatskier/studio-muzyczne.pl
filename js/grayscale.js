
(function($) {
  "use strict"; // Start of use strict


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // for card flip
  $('.card-flip').hover(function(){
    $(this).toggleClass('flip');
      console.log($(this));
 });

  // card flip end

  // auto scrolling code
  // TODO alex
  // var lastScrollTop = 0;
  // $(window).scroll(function(event){
  //    var st = $(this).scrollTop();
  //    if (st > lastScrollTop){
         
  //    } else {
  //       // upscroll code
  //    }
  //    lastScrollTop = st;
  // });
  // auto scrolling end

})(jQuery); // End of use strict


// function for clicks on lesson images, arrows and teacher cards
function timeout() {
  setTimeout( function(){
    var lessonImages = document.querySelectorAll('.lesson-click');
    var lessonsTextMobile = document.querySelectorAll('.lesson-text-mobile');

    var lessonArrows = document.querySelectorAll('.lesson-arrow');
    var lessonQuotes = document.querySelectorAll('.lesson-quote');

    var teacherCards = document.querySelectorAll('.teacher-card');
    var teacherNames = document.querySelectorAll('.card-title');
    var cardsTextMobile = document.querySelectorAll('.card-text-mobile');
    
    for (var i = 0; i < lessonImages.length; i++) {
      lessonClick(lessonImages[i], lessonsTextMobile[i]);
    }

    for (var i = 0; i < lessonArrows.length; i++) {
      arrowClick(lessonArrows[i], lessonQuotes[i]);
    }
    
    for (var i = 0; i < teacherCards.length; i++) {
      teacherClick(teacherCards[i], teacherNames[i], cardsTextMobile[i]);
    }

    function lessonClick(lessonImage, lessonTextMobile) {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        lessonImage.addEventListener('click', function() {
          lessonTextMobile.classList.toggle('element-shown');
          lessonImage.classList.toggle('arrow-up');
        })
      } 
    }

    function arrowClick(lessonArrow, lessonQuote) {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        lessonArrow.addEventListener('click', function() {
          lessonQuote.classList.toggle('element-none');
        })
      } 
    }

    function teacherClick(teacherCard, teacherName, cardTextMobile) {
      if (window.matchMedia('(max-width: 991px)').matches) {
        teacherCard.addEventListener('click', function() {
          cardTextMobile.classList.toggle('element-shown');
          teacherName.classList.toggle('arrow-up');
        })
      } 
    }
  }, 100 );
}

timeout();
