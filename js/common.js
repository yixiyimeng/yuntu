$('.menubtn').click(function(e) {
	 e.stopPropagation();
	$('#navbar').toggleClass('open');
});
// $('#navbar .close').click(function() {
// 	$('#navbar').fadeOut();
// });
$(document).click(function() {
	$('#navbar').removeClass('open');
})
$('.hassub').click(function() {
	$(this).closest('li').toggleClass('open').siblings().removeClass('open')
})
