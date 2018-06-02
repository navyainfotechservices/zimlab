$(document).ready(function () {
	
	(function($) {
	  "use strict"; // Start of use strict

	  // Smooth scrolling using jQuery easing
	  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: (target.offset().top - 48)
			}, 1000, "easeInOutExpo");
			return false;
		  }
		}
	  });

	  // Closes responsive menu when a scroll trigger link is clicked
	  $('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	  });

	  // Activate scrollspy to add active class to navbar items on scroll
	  $('body').scrollspy({
		target: '#mainNav',
		offset: 54
	  });

	  // Collapse Navbar
	  var navbarCollapse = function() {
		if ($("#mainNav").offset().top > 100) {
		  $("#mainNav").addClass("navbar-shrink");
		} else {
		  $("#mainNav").removeClass("navbar-shrink");
		}
	  };
	  // Collapse now if page is not at top
	  navbarCollapse();
	  // Collapse the navbar when page is scrolled
	  $(window).scroll(navbarCollapse);

	})(jQuery); // End of use strict
	function ResCarouselOnInit() {
		ResCarouselSize();
		$(document).on('click', '.leftRs, .rightRs', function() {
			ResCarousel(this);
		});
		$(document).on("mouseenter", ".ResHover", function() {
			$(this).addClass("ResHovered");
		});

		$(document).on("mouseleave", ".ResHover", function() {
			$(this).removeClass("ResHovered");
		});
	}
	/**Corporate**/
	$('#corp-business-focus').click(function() {
		$('.business-bg-change').css('background-image', 'url(images/business-focus.jpg)');
	});
	$('#corp-rnd-focus').click(function() {
		$('.business-bg-change').css('background-image', 'url(images/r-d-focus.jpg)');
	});
	$('#corp-marketing-focus').click(function() {
		$('.business-bg-change').css('background-image', 'url(images/marketing-focus.jpg)');
	});
	$('#corp-operating-focus').click(function() {
		$('.business-bg-change').css('background-image', 'url(images/operations-focus.jpg)');
	});
	//// Accordian
	$(".toggle-accordion").on("click", function() {
		var accordionId = $(this).attr("accordion-id"),
		  numPanelOpen = $(accordionId + ' .collapse.in').length;

		$(this).toggleClass("active");

		if (numPanelOpen == 0) {
		  openAllPanels(accordionId);
		} else {
		  closeAllPanels(accordionId);
		}
	  });

	  openAllPanels = function(aId) {
		console.log("setAllPanelOpen");
		$(aId + ' .panel-collapse:not(".in")').collapse('show');
	  };
	  closeAllPanels = function(aId) {
		console.log("setAllPanelclose");
		$(aId + ' .panel-collapse.in').collapse('hide');
	  };
	///Tabs
	$(".tab_content").hide();
	$(".tab_content:first").show();

  /* if in tab mode */
	$("ul.tabs li").click(function() {

	  $(".tab_content").hide();
	  var activeTab = $(this).attr("rel"); 
	  $("#"+activeTab).fadeIn();		

	  $("ul.tabs li").removeClass("active");
	  $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");

	/*$(".tabs").css("margin-top", function(){ 
	   return ($(".tab_container").outerHeight() - $(".tabs").outerHeight() ) / 2;
	});*/
	});
	$(".tab_container").css("min-height", function(){ 
	  return $(".tabs").outerHeight() + 50;
	});
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {

	  $(".tab_content").hide();
	  var d_activeTab = $(this).attr("rel"); 
	  $("#"+d_activeTab).fadeIn();

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(this).addClass("d_active");

	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
	});
	/////TEAM/////
	$('.team-block').each(function( index, element ) {
		$(element).click(function(){
		  $(element).toggleClass( "team-block-selected");
		});
	});
	$('table').DataTable({
        responsive: true
    });
});
(function(){
   //Show Modal
  $('.modals').on('show.bs.modal', function (e) {
    console.log('show');
    $('.firstBlur').addClass('modalBlur');
  })
  
  //Remove modal
  $('.modals').on('hide.bs.modal', function (e) {
     console.log('hide');
    $('.firstBlur').removeClass('modalBlur');
  })
})();

$(document).ready(function(){
			
			$("#business .flexbox .columns").hover(function () {
				$(this).onclick("active");
				$(this).siblings("div").removeClass("active");

			});

			$("#product-dev .flexbox .columns").click(function () {
				$(this).addClass("active");
				$(this).siblings("div").removeClass("active");
			});
			$(".first_tab").champ();

			$(".accordion_example").champ({
                plugin_type :  "accordion",
                side : "left",
                active_tab : "3",
                controllers : "true"
			});

			$(".second_tab").champ({
                plugin_type :  "tab",
                side : "right",
                active_tab : "1",
                controllers : "false"
			});
		});
