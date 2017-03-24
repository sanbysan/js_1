var main = function() {
    
$('#icon-menu').click(function() {
    $("#menu").toggleClass("visible");
	$("#sand").toggleClass("menu-visible");
  });

  $('.main-btn img').on({
	   mouseenter: function(){
            $(this).stop(true).animate({
				  height: "75%",
				  width: "75%"
				}, 300);
		},
          
       mouseleave: function(){
            $(this).animate({
				  width: "50%"
				}, 300);
        }, 
        click: function(){
            $(this).stop(true).animate({
				   opacity: '0.5',
				}, 300).animate({
				  opacity: '1.0',
				}, 300);
        }  
    });
  
};

$(document).ready(main);