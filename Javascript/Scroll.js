(function ($) {
  var $animation_elements = [
    $('.letter'),
    $('.muscle'),
    $('.healthy'),
  ];
  //var $animation_elements = $("#tips");
  var $window = $(".container");

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $animation_elements.map(element => {
      var element_height = element.height();
      var element_top_position = element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this element is within viewport
      if ((element_bottom_position <= window_top_position) || (element_top_position >= window_bottom_position)) {
        element.addClass('animate');
        element.css("opacity", "1");
      } else {
        element.removeClass('animate');
        element.css("opacity", "0");
      }
    });
  }
  $window.on('scroll resize', check_if_in_view);
  var $img_elements = [
    $('#wheat'),
    $('#proteins'),
    $('#fat'),
    $('#salt'),
    $('#vitamin'),
    $('#spinage')
  ];

  function check_if_img_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $img_elements.map(element => {
      var element_height = element.height();
      var element_top_position = element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this element is within viewport
      if ((element_bottom_position <= window_top_position) || (element_top_position >= window_bottom_position)) {
        element.addClass('animate');
        element.css("opacity", "1");
      } else {
        element.removeClass('animate');
        element.css("opacity", "0");
      }
    });
  }
  $window.on("scroll resize", check_if_img_in_view);
})(jQuery);