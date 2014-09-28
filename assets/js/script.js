$(document).ready(function(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
            if(this.hash.length > 3) {
             $('html,body').animate({
                 scrollTop: target.offset().top-70
            }, 900);
            return false;
          }
        }
    }
  });

  $('#nav1').click(function() {
    $('html,body').animate({
      scrollTop: '0px'
    }, 900);
  });

  $('#nav2').click(function() {
    $('html,body').animate({
      scrollTop: '2000px'
    }, 900);
  });

  $('#nav3').click(function() {
    $('html,body').animate({
      scrollTop: '3250px'
    }, 900);
  });

  $('#nav4').click(function() {
    $('html,body').animate({
      scrollTop: '4700px'
    }, 900);
  });

  $(function() {
    skrollr.init();
  });
});