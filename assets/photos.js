/**
 * Photos.js
 * Make masonry compatible with materializecss' material box and lazy load images.
 */

var msnry, openIMG, isGridOpen = true;

imagesLoaded(grid, function() {
	// init Isotope after all images have loaded
	var $container = $('#grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
	
	// allow image to open full size
	$container.on('click', '.grid-item', function() {
		// add open-img class and remove grid-item class
		$(this).addClass("open-img");
		$(this).removeClass("grid-item");
		openIMG = this;
		isGridOpen = false;
	});
	
	// return image back to grid on container click
	$container.on('click', '.open-img', function() {
		imgBackToGrid(openIMG);
	});
	
	// return image back to grid on click
	$("img").click(function(){
		if (!isGridOpen) {
			imgBackToGrid(openIMG);
			loadThumb($(this));
		} else {
			loadOriginal($(this));
		}
	});
	
	// return image back to grid on scroll
	$(window).scroll(function() {
		if ($("img").hasClass("materialboxed"))
		{
			imgBackToGrid(openIMG);
			loadThumb($(this));
		}
	});

	// return image back to grid on ESC
	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			if ($("img").hasClass("materialboxed")) {
				imgBackToGrid(openIMG);
				loadThumb($(this));
			}
		}
	});
});

// return image back to grid
function imgBackToGrid(openIMG) {
	// remove open-img class and add grid-item class back in
	$(openIMG).removeClass("open-img");
	$(openIMG).addClass("grid-item");
	isGridOpen = true;
}

// load in thumbnail
function loadThumb(img) {
	if (img.data("thumb") !== "") {
		img.attr("src", img.data("thumb"));
	}
}

// load in original
function loadOriginal(img) {
	if (img.data("original") !== "" & !isMobile.any){
		img.attr("src", img.data("original"));
	}
}
