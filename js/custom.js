/*
Template Name: Admin Press Admin
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
    "use strict";
    // ============================================================== 
    //Tooltip
    // ============================================================== 
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    // ============================================================== 
    //Popover
    // ============================================================== 
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
    
    // ============================================================== 
    // Resize all elements
    // ============================================================== 
    $("body").trigger("resize");

	// Scrolling
	$('#top a').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 90
            }, 1000);
            event.preventDefault();
            // code 
            
        });
	
	// Transition effect for navbar 
	$(window).scroll(function() {
	  var firstBlock = $('.page-wrapper .static-slider-head').height()*0.8; 
		
	  // checks if window is scrolled more than 500px, adds/removes solid class
	  if($(this).scrollTop() > firstBlock) { 
		  $('#top').css({			  
			  "position":"fixed",
			  "background-color":"rgba(0, 51, 95, 0.81)",			  
			  "transition":"background-color 1s ease 0s"
			});
	  } else {
		  $('#top').css({			  
			  "position":"absolute",
			  "background-color":"transparent"			  			  
			});
	  }
	});        
});
