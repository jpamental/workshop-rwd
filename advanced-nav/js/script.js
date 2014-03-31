/*global jQuery */


// Basic FitVids Test
$(".container").fitVids();

function checkMq() {
	$('body').removeClass('mq-l-desk');
	$('body').removeClass('mq-desk');
	$('body').removeClass('mq-l-tab');
	$('body').removeClass('mq-s-tab');
	$('body').removeClass('mq-phone');
	if(Modernizr.mq('only all and (min-width: 80.0625em)')) {
		$('body').addClass('mq-l-desk');
		resetMenu();
	} else if(Modernizr.mq('only all and (min-width: 58em)')) {
		$('body').addClass('mq-desk');
		resetMenu();
	} else if(Modernizr.mq('only all and (min-width: 44em)')) {
		$('body').addClass('mq-l-tab');
	} else if(Modernizr.mq('only all and (min-width: 25em)')) {
		$('body').addClass('mq-s-tab');
	} else {
		$('body').addClass('mq-phone');
	}
};

$(function() {
    // the call to checkMq here will execute after the document has loaded
    checkMq();

    $(window).resize(function() {
        // the call to checkMq here will execute every time the window is resized
        checkMq();
    });

    // you can add other listeners here click, hover, etc.  
});


$(function() {

	// Only add the toggle class if there are child pages
	$('#nav .menu > li > a + ul').after('<span class="js-toggle-dropdown"><span class="fa fa-large fa-plus-circle"></span></span>');
	$('.js-toggle-dropdown').click(function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('nav-dropdown-expanded');
		$(this).find('span').toggleClass('fa-plus-circle fa-times-circle');
	});

	$('#nav-toggle').click(function(e) {
		e.preventDefault();
		$('#nav .menu').toggleClass('open');
		$('body').toggleClass('nav-open');
		$(this).find('span').toggleClass('fa-bars fa-times-circle');

	});


});

function resetMenu() {
	$('body').removeClass('nav-open');
	$('#nav .menu').removeClass('open');
	$('#nav-toggle span').removeClass('fa-times-circle');
	$('#nav-toggle span').addClass('fa-bars');
}

// Rewritten version for correcting a screen-zoom issue on rotation in iOS
// By @mathias, @cheeaun and @jdalton

(function(doc) {

	var addEvent = 'addEventListener',
		type = 'gesturestart',
		qsa = 'querySelectorAll',
		scales = [1, 1],
		meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [0.25, 1.6];
		doc[addEvent](type, fix, true);
	}

}(document));