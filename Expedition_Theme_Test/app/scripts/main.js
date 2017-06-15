$('.menu-btn').on('click', (el) => {
	$('.menu-btn').toggleClass('open');
	$('.side-menu').toggleClass('open');
	$('.hamburger').toggleClass('is-active');
});

