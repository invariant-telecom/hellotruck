(function($) {
  "use strict";

  



  $(window).on('load', function() {
    var pre_loader = $('#preloader');
    pre_loader.fadeOut('slow', function() {
      $(this).remove();
    });
  });




  var s = $("#sticker");
  var pos = s.position();
  $(window).on('scroll', function() {
    var windowpos = $(window).scrollTop() > 300;
    if (windowpos > pos.top) {
      s.addClass("stick");
    } else {
      s.removeClass("stick");
    }
  });

  



  var main_menu = $(".main-menu ul.navbar-nav li ");
  main_menu.on('click', function() {
    main_menu.removeClass("active");
    $(this).addClass("active");
  });



  
  var Body = $('body');
  Body.scrollspy({
    target: '.navbar-collapse',
    offset: 80
  });

 

  

  var page_scroll = $('a.page-scroll');
  page_scroll.on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 55
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });






  if( $('#google-map').length) {
    var get_latitude = $('#google-map').data('latitude');
    var get_longitude = $('#google-map').data('longitude');

    function initialize_google_map() {
      var myLatlng = new google.maps.LatLng(get_latitude, get_longitude);
      var mapOptions = {
        zoom: 14,
        scrollwheel: false,
        center: myLatlng
      };
      var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize_google_map);
  }

})(jQuery);
