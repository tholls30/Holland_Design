$(document).ready(function() {

	'use strict';

	/* ==== Preloader ==== */
	$('.spinner').fadeOut('slow');
	$('.preloader').delay(350).fadeOut();

	/* ==== Half Height ==== */
	$(function(){
		$('.half-height').css({'height':($(window).height()/2)+'px'});
		$(window).resize(function(){
		$('.half-height').css({'height':($(window).height()/2)+'px'});
		});
	});

	/* ==== Home Carousel ==== */
	$('#carousel-home').owlCarousel({
    	singleItem : true,
			animateOut : 'fadeInRight',
			animateIn : 'fadeInRight',
    	mouseDrag:false,
    	touchDrag:false,
    	autoPlay : 5000
	});

	/* ==== Team Carousel ==== */
	$('#carousel-team').owlCarousel({
    	singleItem : true,
    	animateOut : 'slideOutLeft',
			animateIn : 'slideInRight',
    	mouseDrag:false,
    	touchDrag:false,
    	autoPlay : 4000,
			pagination:true
	});

	/* ==== Boxer ==== */
	$('.boxer').boxer();

	/* ==== Contact Form ==== */
	var options = {
		target: '.message .alert',
		beforeSubmit: showRequest,
		success: showResponse
	};

	$('#contactForm').ajaxForm(options);
	function showRequest(formData, jqForm, options) {
		var queryString = $.param(formData);
			return true;
		}
	function showResponse(responseText, statusText) {}
});
