$(function () {
	'use strict';
	//slider height 
	var winH = $(window).height(),
		upperH = $('.upper-par').innerHeight(),
		navH = $('.navbar').innerHeight();
	$('.slider').height(winH - (upperH + navH));
	
	// feature work
	$(".feature-works ul li").on('click',function (){
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('class') === '.all')
			{
				$('.photo .col-md').css('opacity', 1);
			}
		else 
			{
				$('.photo .col-md').css('opacity', 0.08);
				$($(this).data('class')).parent().css('opacity', 1);
			}
	});
	/*************** scroll-top ******************/
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 700)
			$(".scrolled").show();
		     else 
			     $(".scrolled").hide();
	});
	$(".scrolled").click(function()
	{
		$("html,body").animate({scrollTop:0},600);
	});
});