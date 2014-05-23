/**
 * @file
 * Global JavaScript file for the site.
 */

			// This script modified from Josh Brewer's excellent article on fallback fonts on Typekit's blog: 
			// http://blog.typekit.com/2011/03/24/type-study-choosing-fallback-fonts/
			$(document).ready(function() {
			  // Fallback toggle button
			  $(".toggle-fallback").click(function(){
			    $("html").toggleClass("wf-loading");
			    $("html").toggleClass("wf-active");
			    $("body").removeClass("font-correct-inactive");
			    $("#loading-message").addClass("stay-hidden");
			  });
			  // Font correct toggle button
			  $(".toggle-fallback-correct").click(function(){
			    $("body").toggleClass("font-correct-inactive");
			  });
			});

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