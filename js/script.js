var main = function() {
    
	$('#icon-menu').click(function() {
		$("#menu").toggleClass("visible");
		$("#sand").toggleClass("menu-visible");
	});
	
	$('#main-btn-container').on({
		mouseover: function(event) {
			var target = event.target;
			if ( target.tagName === 'IMG') {
				$(target).stop(true).animate({
					height: "75%",
					width: "75%"
				}, 300);
			}
		},
		mouseout: function(event) {
			var target = event.target;
			if ( target.tagName === 'IMG') {
				$(target).stop(true).animate({
					width: "50%"
				}, 300);
			}
		},
		click: function(event) {
			var target = event.target;
			if ( target.tagName === 'IMG') {
				$(target).stop(true).animate({
					opacity: '0.5',
				}, 300).animate({
				    opacity: '1.0',
				}, 300);
			}
		},
		
	});
  
};

$(document).ready(main);