$(document).ready(function(){
	$('.sandbox button:first').attr('disabled', 'disabled').next().click(function(){
		$('.sandbox button:first').removeAttr('disabled');
	});
	
});