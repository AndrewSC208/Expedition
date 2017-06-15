// figure out how to import this class
//import * from './sideMenu';

// not sure I like this, but I will look into how I can turn this into a class or something, maybe even drop the dependency on jquery
$(".menu-btn").on('click', (el) => {
	$('.menu-btn').toggleClass('open');
	$('.side-menu').toggleClass('open');
	$('.hamburger').toggleClass('is-active');
});
