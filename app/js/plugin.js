;(function($) {
	var header = $("header");
	$(window).on("scroll", function() {
		if ($(window).scrollTop() > 20) {
			header.addClass("on-scroll");
		} else {
			header.removeClass("on-scroll");
		}
	});
	
	$(".navbar-toggle").on("click", function() {
		$(".navbar-header").toggleClass("is-open");
	});
})(jQuery);