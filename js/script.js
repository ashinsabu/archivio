$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('#signup').addClass('show')
    } else {
      $('#signup').removeClass('show')
    }
  });