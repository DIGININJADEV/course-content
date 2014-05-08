$(document).ready(function(){
	console.log('Changing text color in second p');
	$('.sandbox p:nth-child(2)').css('color','rgba(255,255,255,0.5');
	
	console.log('Changing background of first p');
	$('.sandbox p:nth-child(2)').css('color','rgba(255,255,255,0.5');
	
	console.log('Removing third p');
	$('.sandbox p:nth-child(3)').remove();
	
	console.log('Changing text color of fourth li');
	$('.sandbox li:nth-child(4)').css('color','rgba(255,255,255,0.5');
	
	console.log('Changing text of second li to "I did it!"');
	$('.sandbox li:nth-child(2)').text('I did it!');
});

