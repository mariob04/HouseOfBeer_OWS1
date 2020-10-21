$(document).ready(function(){

	$('.col-lg-4').hover(

			function(){
				$(this).animate({
					marginTop: "-=2%",
				},200);
			},
			function(){
				$(this).animate({
					marginTop: "0%"
				},200)	;
			}
		);
});

$(function () {
            $(document).scroll(function () {
                var $nav = $("#mainNavbar");
                $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
            });
        });