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
			transitionStyle : 'faded',
    	mouseDrag:false,
    	touchDrag:false,
    	autoPlay : 4000
	});

	/* ==== Team Carousel ==== */
	$('#carousel-team').owlCarousel({
    	singleItem : true,
    	animateOut : 'fadeOutLeft',
			animateIn : 'fadeInRight',
    	mouseDrag:false,
    	touchDrag:false,
    	autoPlay : 4000,
			pagination:true,
			rewind:false
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
