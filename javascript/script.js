$(document).ready(function() {
	/* Globalne skrypty/strona index */

	$('.left-c').hide().slideDown(2000);

	$('#navlist').lavalamp({
    	easing: 'easeOutBack'
	});

	$("#top-menu a.bookmark").hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});

	$('.right-c').hide().slideDown(2000);

	$('.additional-content').hide().fadeIn(2500);

	$('.welcome').hide().slideDown(2000);

	$("#nav-down a.bookmark").hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});

	$(".right-c").hover(function(){
		$(this).animate({"backgroundColor": "#2B2929"}, 900);
	},
	function(){
		$(this).animate({"backgroundColor": "#5F5C5C"}, 900);
	}
	);

	$("#logo").hover(function(){
		$(this).animate({"width": "157px"}, 600);
	},
	function(){
		$(this).animate({"width": "127px"}, 600);
	}
	);

	$("#logo2").hover(function(){
		$(this).animate({"width": "180px"}, 600);
	},
	function(){
		$(this).animate({"width": "150px"}, 600);
	}
	);

	$("#agra").hover(function(){
		$(this).animate({"width": "180px"}, 600);
	},
	function(){
		$(this).animate({"width": "150px"}, 600);
	}
	);

	$("#logo3").hover(function(){
		$(this).animate({"width": "83px"}, 600);
	},
	function(){
		$(this).animate({"width": "63px"}, 600);
	}
	);

	/* podstrona about */
	$('.about-content').hide().slideDown(2000);

	/* podstrona acitivity */
	$('.activity-content').hide().slideDown(2000);

	/* podstrona contact */
	$('.contact-content').hide().slideDown(2000);

	/* podstrona photos */
	$('.photos-content').hide().slideDown(2000);

	$("#page").hover(function() {
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
	});

	$("#page").hover(function(){
		$(this).animate({"color": "#FFFFFF"}, 300);
	},
	function(){
		$(this).animate({"color": "#000000"}, 300);
	}
	);
	
	$('#gal').lavalamp({
		margins:true
	});

	$('#gal a').colorbox();
});