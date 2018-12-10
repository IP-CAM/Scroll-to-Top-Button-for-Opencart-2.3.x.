$(document).ready(function() {
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 500) {
			$("#scroll-to-top").addClass("show");
		} else {
			$("#scroll-to-top").removeClass("show");
		}
	});
	$("#scroll-to-top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
});