// JavaScript Document
$(document).ready(function () {

	// Menu Start
	$(".navbar-toggler").click(function () {
		$(this).toggleClass("open");
		$("html").toggleClass("overflow-hidden");
	});
	// Menu End

	// filter menu
	$('.close-icon').click(function(){
        $('#navbarSupportedContent2').collapse('hide');
    });

	// Filter Hide Show Start
	$(".filter-icon").click(function() {
		$(".filter-main").addClass("show");
		$("html").addClass("overflow-hidden");
	});

	$(".filter-list li a").click(function() {
		$(this).parents("li").find(".dropdown-menu1").addClass("show");
	});

	$(".filter-close-icon").click(function() {
		$(".filter-main").collapse("hide");
		$("html").removeClass("overflow-hidden");
	});

	$(".back-arrow").click(function() {
		$(this).parents("li").find(".dropdown-menu1").removeClass("show");
	});
	// Filter Hide Show End

	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.header').outerHeight();

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	// All Page
	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta)
			return;

		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			$('.header').removeClass('nav-down').addClass('nav-up');
		}
		else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('.header').removeClass('nav-up').addClass('nav-down');
			}
		}
		lastScrollTop = st;
	}

	// Banner Slider Start
	$(".banner-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	// Banner Slider End

	// Discover Categories Start
	$(".discover-categories-slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
		// speed: 3500,
		prevArrow: '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" fill="#fff"></path></svg></button>',
		nextArrow: '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" fill="#fff"></path></svg></button>',
	});
	// Discover Categories End

	// Payment Methods Slider Start
	$(".payment-methods-slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3,
					centerMode: true,
					centerPadding: '100px',
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					centerPadding: '100px',
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '100px',
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '40px',
				}
			},
		]
	});
	// Payment Methods Slider End

	// Graph Slider Start
	$(".graph-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: false,
	});
	// Graph Slider End

	// Payment Installation Start
	$(".payment-installment-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		arrows: true,
		prevArrow: '<button class="slick-prev slick-arrow"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L0.860087 7.24742C0.40476 7.64584 0.404761 8.35417 0.860088 8.75258L8 15" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  		nextArrow: '<button class="slick-next slick-arrow"><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L0.860087 7.24742C0.40476 7.64584 0.404761 8.35417 0.860088 8.75258L8 15" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		  responsive: [
			{
			  breakpoint: 992,
			  settings: {
					slidesToShow: 2,
				}
			},
			{
			  breakpoint: 576,
			  settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	// Payment Installation End

	// Match Height Start
	// $(".payment-methods-item .small-section-title").matchHeight();
	// Match Height End

	$('.js-example-basic-single').select2({
		closeOnSelect: false,
		minimumResultsForSearch: -1
	});

	$('.js-example-basic-single1').select2({
		closeOnSelect: false,
		placeholder: "Select a state",
		minimumResultsForSearch: -1
	});

	//   dropdown checkbox
	function checkboxDropdown(el) {
		var $el = $(el);

		function updateStatus(label, result) {
			if (!result.length) {
				label.html('<span>' + 'Toate departamentele' + '<span>');
			}
		};

		$el.each(function () {
			var $list = $(this).find('.dropdown-list'),
				$label = $(this).find('.dropdown-label'),
				$checkAll = $(this).find('.check-all'),
				$inputs = $(this).find('.check'),
				defaultChecked = $(this).find('input[type=checkbox]:checked'),
				result = [];

			updateStatus($label, result);
			if (defaultChecked.length) {
				defaultChecked.each(function () {
					result.push($(this).next().text());
				});
				var labelText = result.join(", ");
				$label.html('<span>' + labelText + '</span>');
			}

			$label.on('click', () => {
				$(this).toggleClass('open');
			});

			$checkAll.on('change', function () {
				var checked = $(this).is(':checked');
				var checkedText = $(this).next().text();
				result = [];
				if (checked) {
					result.push(checkedText);
					var labelText = result.join(", ");
					$label.html('<span>' + labelText + '</span>');
					$inputs.prop('checked', false);
				} else {
					$label.html('');
				}
				updateStatus($label, result);
			});

			$inputs.on('change', function () {
				var checked = $(this).is(':checked');
				var checkedText = $(this).next().text();
				if ($checkAll.is(':checked')) {
					result = [];
				}
				if (checked) {
					result.push(checkedText);
					var labelText = result.join(", ");
					$label.html('<span>' + labelText + '</span>');
					$checkAll.prop('checked', false);
				} else {
					let index = result.indexOf(checkedText);
					if (index >= 0) {
						result.splice(index, 1);
					}
					var labelText = result.join(", ");
					$label.html('<span>' + labelText + '</span>');
				}
				updateStatus($label, result);
			});

			$(document).on('click touchstart', e => {
				if (!$(e.target).closest($(this)).length) {
					$(this).removeClass('open');
				}
			});
		});
	};

	checkboxDropdown('.dropdown');

	//   dropdown checkbox

	// scroolbar
	$("#content-1").mCustomScrollbar({
		// theme:"minimal"
	});
	// scroolbar

	// radio dropdown
	$('.checked').on('change', function () {
		var checkedText = $(this).next().text();
		var labelText = '<span>' + checkedText + '</span>';
		$('.label-dropdown').html(labelText);
	});

	$('.checkedradio').on('change', function () {
		var checkedText = $(this).next().text();
		var labelText = '<span>' + checkedText + '</span>';
		$('.label-dropdown2').html(labelText);
	});

	function updateStatus(label, labelText, result) {
		if (!result) {
			label.html('<span class="custom-span">' + labelText + '</span>');
		}
	};
	
	function radioDropdown(el, className, labelText) {
		var $el = $(el);
	
		$el.each(function () {
			if ($(this).hasClass(className)) {
				var $list = $(this).find('.dropdown-list'),
					$label = $(this).find('.dropdown-label'),
					$inputs = $(this).find('.checked'),
					result = false;
	
				updateStatus($label, labelText, result);
	
				$inputs.on('change', function () {
					var checkedText = $(this).next().text();
					result = true;
					var labelText = checkedText;
					$label.html('<span class="custom-span">' + labelText + '</span>');
					updateStatus($label, labelText, result);
				});
			}
		});
	};
	
	radioDropdown('.dropdown.radio-dropdown', 'radio-dropdown', 'Judete');
	radioDropdown('.dropdown.radio-dropdown-2', 'radio-dropdown-2', 'all');
	
	// radio dropdown




	// OFI Browser
	objectFitImages();
});
