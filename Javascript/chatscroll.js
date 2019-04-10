(function($) {
  var $animation_elements = [
    $("#question1"),
    $("#question2"),
    $("#question3"),
    $("#question4"),
    $("#question5"),
    $("#question6"),
    $("#question7"),
    $("#question8"),
    $("#question9"),
    $("#question10"),
    $(".goal h1"),
    $(".goal #stronger"),
    $(".goal #weight"),
    $(".goal #muscle"),
    $(".goal #loseweight"),
    $(".goal #fat"),
    $(".goal #healthy")
  ];
  //var $animation_elements = $("#tips");
  var $window = $(".advice");
  var i = 0;

  function check_if_in_view() {
    var window_height = $window.outerHeight();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $animation_elements.map(element => {
      var element_height = element.height();
      var element_top_position = element.offset().top;
      var element_bottom_position = element_top_position + element_height;

      //check to see if this element is within viewport
      if (
        element_bottom_position <= window_top_position
      ) {
        element.addClass("animate");
        element.css("opacity", "1");
        i++;
        console.log(i);
      } else {
        element.removeClass("animate");
        element.css("opacity", "0");
      }
    });
  }
  $window.on("scroll resize", check_if_in_view);
})(jQuery);
