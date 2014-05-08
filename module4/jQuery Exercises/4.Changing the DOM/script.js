$(document).ready(function(){
	console.log('Removing text from .removeMe p');
	$('.removeMe p').text('');
	
	console.log('Removing p from .removeMe');
	$('.removeMe').remove();
	
	console.log('Removing div of class .removeMe');
	$('.removeMe').remove();
	
	console.log("Adding div of class .target into div of class .sandbox");
	$('.sandbox').html('<div class="target"></div>');
	
	console.log("Adding text to p in .target ");
	$('.target').html('<p></p>');
	$('.target p').text('Hello World!');
});

