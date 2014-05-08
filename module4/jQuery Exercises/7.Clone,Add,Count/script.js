$(document).ready(function(){
	$('.add-item').click(function(){
		$selectedValue = $('#numberToAdd').val();
		$('.template li').clone().text('This is a test').appendTo('.sample-list');
		$('.count').text($('.sample-list li').length + ' items total');
	});
});

