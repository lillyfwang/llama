$(document).ready(function(){
  $('#nav1').click(function() {
    $('html,body').animate({
      scrollTop: '0px'
    }, 1500);
  });

  $('#nav2').click(function() {
    $('html,body').animate({
      scrollTop: '2500px'
    }, 1500);
  });

  $('#nav3').click(function() {
    $('html,body').animate({
      scrollTop: '4600px'
    }, 1500);
  });

  $('#nav4').click(function() {
    $('html,body').animate({
      scrollTop: '9500px'
    }, 1500)
  });

  $(function() {
    skrollr.init();
  });
});