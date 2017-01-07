// function: determine height of dropdown menu
function chromeDropdownHeight() {
    'use strict';
    var visibleDropdownCount = 'count' + ($('header .dropdown-menu > a:visible').length).toString();
    $('header .dropdown-menu-wrapper').addClass(visibleDropdownCount);
}

$(document).ready(function() {
    'use strict';
	
	// determine height of header
	var space = $(".header-items").height();
	$(".header-space").height(space);
	
	$(window).resize(function() {
		var space = $(".header-items").height();
		$(".header-space").height(space);
	});
	
    // determine height of dropdown menu
    $(window).on('load', function() {
        chromeDropdownHeight();
    });
    chromeDropdownHeight();
	
    // chrome: hamburger
    $('body').click(function() {
        if ($('header .hamburger').hasClass('open')) {
            $('header .hamburger').removeClass('open');
            $('header .dropdown-menu-wrapper').removeClass('open');
        }
    });
    $('header .dropdown-menu > a').click(function(e) {
        e.stopPropagation();
    });
    $('.hamburger').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('open');
        $('header .dropdown-menu-wrapper').toggleClass('open');
    });
});
