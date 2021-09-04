$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      $target = $(target);

      $('html, body').stop().animate({
          'scrollTop':  parseInt($target.offset().top,10)
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
  $('.search-icon').on('click', function(){
      $(this).children('.searchInput').toggleClass('active');
  })
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 20) {
      $("#main-header").addClass("fixed");
  } else {
      $("#main-header").removeClass("fixed");
  }
});

