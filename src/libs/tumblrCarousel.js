(function($) {
	$.getJSON(
		'http://api.tumblr.com/v2/blog/runningbyrdteaco.tumblr.com/posts/photo?callback=?',
		{
			api_key:'20TJIj0qWBhrlKIHxGUGouuoJJIaRdi2sDJsyQguI6lnycpLKl',
			limit: -1
		}
	).then(function (json) {
		_.each(json.response.posts, function(post){
			var $li = $('<li></li>');

			var $link = $('<a></a>', {
				href: post.post_url,
				target: "_blank"
			});

			$('<img></img>', {
				src: post.photos[0].alt_sizes[1].url
			}).appendTo($link);

			$link.appendTo($li);

			// caption comes with html in text
			$(post.caption).appendTo($li);

			$li.appendTo($('#pictures ul'));
		});

	    $('.jcarousel').jcarousel({
            	wrap: 'circular'
        	})
	    	.jcarouselAutoscroll({
            	interval: 2500,
            	target: '+=1'
        	});
	});
})(jQuery);