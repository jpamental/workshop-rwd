/**
 * @file
 * Global JavaScript file for the site.
 */// This script modified from Josh Brewer's excellent article on fallback fonts on Typekit's blog: 
// http://blog.typekit.com/2011/03/24/type-study-choosing-fallback-fonts/
$(document).ready(function(){$(".toggle-fallback").click(function(){$("html").toggleClass("wf-loading");$("html").toggleClass("wf-active");$("body").removeClass("font-correct-inactive");$("#loading-message").addClass("stay-hidden")});$(".toggle-fallback-correct").click(function(){$("body").toggleClass("font-correct-inactive")})});(function(e){function o(){s.content="width=device-width,minimum-scale="+i[0]+",maximum-scale="+i[1];e.removeEventListener(n,o,!0)}var t="addEventListener",n="gesturestart",r="querySelectorAll",i=[1,1],s=r in e?e[r]("meta[name=viewport]"):[];if((s=s[s.length-1])&&t in e){o();i=[.25,1.6];e[t](n,o,!0)}})(document);