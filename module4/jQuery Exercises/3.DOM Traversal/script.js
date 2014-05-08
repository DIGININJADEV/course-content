$(document).ready(function(){
	$('.sample span:first-child()').next().text($('.sample span:first-child()').text());
	$('.emptyText').text($('.targetText').text());
});
