var main = function() {
  
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
  $('.sea_star a img').mouseenter(function() {
    $(this).animate({
      height: "250px",
	  width: "250px"
    }, 300);
  });

  
  $('.sea_star a img').mouseenter(function() {
    $(this).animate({
      height: "150px",
	  width: "150px"
    }, 300);
  });
  $('.sea_star').click(function() {
    $(this).animate({
       opacity: '0.5',
    }, 300);
  });

  
  $('.sea_star').click(function() {
    $(this).animate({
      opacity: '1.0',
    }, 300);
  });
};


$(document).ready(main);