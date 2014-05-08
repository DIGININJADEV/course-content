$(document).ready(function(){
	$('#run1').click(function(){
		$('.target').animate({
    opacity: 0.25,
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
	});
	$('#run2').click(function(){
		$('.target2').animate({
    opacity: 0.25,
		left:  '200'
  }, 5000, function() {
    // Animation complete.
  });
	});
});