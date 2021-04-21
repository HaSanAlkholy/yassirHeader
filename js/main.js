
// parallaxInstance.friction(0.2, 0.2);
$(document).ready(function () {
  $(".menu").click(function () {
    $(".menu .menu-icon").removeClass("open-menu");
    $(".menu .menu-icon").addClass("close-menu");
    // $(".mo-nav").slideDown(500);
    $(".mo-nav").addClass("menu-down");
    $("body").addClass("overflow");
  });
  $(".close,.nav-li .nav-link").click(function () {
    $(".menu .menu-icon").addClass("open-menu");
    $(".menu .menu-icon").removeClass("close-menu");
    // $(".mo-nav").slideUp(500);
    $(".mo-nav").removeClass("menu-down");
    $("body").removeClass("overflow");
  });
});
