var main = function() {
    
$('#icon-menu').click(function() {
    if ($('#menu').css('left') !== '0px') {
		$('#menu').animate({
		  left: "0px"
		}, 200);

		$('#sand').animate({
		  left: "150px"
		}, 200);
	} else {
		$('#menu').animate({
		  left: "-150px"
		}, 200);

		$('#sand').animate({
		  left: "0px"
		}, 200);
	}
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