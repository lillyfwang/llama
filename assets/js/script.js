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


  (function($) {
    $window = $(window);
    $body = $('body');
    adjustWindow();

    
    function adjustWindow(){
        winH = $window.height();
        winW = $window.width();

        if(winH <= 550) {
            winH = 550;
        }

        if( winW >= 768) {
            var s = skrollr.init();
        } else {
            var s = skrollr.init();
            s.destroy();
        }
    
        if(Modernizr.touch) {
          var s = skrollr.init();
          s.destroy();
        }
    }
    
    function initAdjustWindow() {
        return {
            match : function() {
                adjustWindow();
            },
            unmatch : function() {
                adjustWindow();
            }
        };
    }

    enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false).listen(100);
 })(jQuery);

 $(function () {
  $("#temple-container").css("height", $("#temple").height());
  $("#gallery-container").css("height", $("#gallery-container").width()*4/3);
  $("#field-container").css("height", $("#field").height());
  $(window).on('resize', function () {
    $("#temple-container").css("height", $("#temple").height());
    $("#gallery-container").css("height", $("#gallery-container").width()*4/3);
    $("#field-container").css("height", $("#field").height());
  });
});

 
});


