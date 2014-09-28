$(document).foundation();

$(document).ready(function() {
  var btmButtons = function() {

   $(".with-btm").css('height', 'auto');

    var windowHeight = $(window).height();
    var tabBarHeight = $(".tab-bar").outerHeight(true);
    var mainSectionHeight = $(".with-btm").outerHeight();
    var contentHeight = tabBarHeight + mainSectionHeight;
    //var btmHeight = $(".btm").outerHeight();

    if (windowHeight > contentHeight) {
      $(".with-btm").outerHeight(windowHeight-tabBarHeight);
    }

  };

  var addPhoto = function() {

   $(".frame-in").css('height', 'auto');
    $(".frame-overlay").css('margin-left', '0');
    $(".frame-overlay").css('margin-top', '0');

    var frameWidth = $(".frame-in").width();
    var frameHeight = $(".frame-in").height();
    var overlayWidth = -($(".frame-overlay").outerWidth(true) / 2);
    var overlayHeight = -($(".frame-overlay").outerHeight(true) / 2);

    if (frameWidth > frameHeight) {
      $(".frame-in").height(frameWidth);
    }

    $(".frame-overlay").css('margin-left', overlayWidth);
    $(".frame-overlay").css('margin-top', overlayHeight);

  };

  addPhoto();
  $(window).resize(addPhoto);

  btmButtons();
  $(window).resize(btmButtons);

});