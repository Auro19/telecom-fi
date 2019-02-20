$(document).ready(function () {
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura )
		{
			$('.menu').addClass('menu-fixed')
			document.getElementById("barra").style.borderWidth = "0px 0px 2px 0px";

		} 
		else 
		{
			$('.menu').removeClass('menu-fixed')
			document.getElementById("barra").style.borderWidth = "2px 0px 2px 0px";
		}
	});
});