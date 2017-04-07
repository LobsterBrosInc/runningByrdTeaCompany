(function(){
	$(document).ready(function(){
		//set up scroll-to on top nav
		$('.big-nav').on('vclick',function (e) {
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
		$('.statement.left, .statement.right').on('vclick', function(){
			$(this).toggleClass('closed');
		});

		var ua = navigator.userAgent,
			isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

		if (isMobileWebkit) {
			$('html').addClass('mobile');
		}

	  	var iScrollInstance;

		if (isMobileWebkit) {
			// iScrollInstance = new IScroll('#wrapper');

			// $('#scroller').stellar({
			// 	scrollProperty: 'transform',
			// 	positionProperty: 'transform',
			// 	horizontalScrolling: false
			// });
		} else {
			// $.stellar({
			// 	horizontalScrolling: false
			// });
		}
	});
})();