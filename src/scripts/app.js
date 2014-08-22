(function(){
	$(document).ready(function(){
		//set up scroll-to on top nav
		$('.big-nav').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash,
		    $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top
		    }, 800, 'swing', function () {
		        window.location.hash = target;
		    });
		});
		
		//set up flavor carousel
		$('#ca-container').contentcarousel({scroll: 0});
		
		//set up event handlers on statements
		$('.toggle-statement').on('click', function(){
			$(this).parent().toggleClass('closed');
		});
		//set up parallax elements
		$.stellar({ positionProperty: 'transform' });
	});
})();