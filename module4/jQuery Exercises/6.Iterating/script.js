$(document).ready(function(){
	$('.sandbox li').each(function(index){
	if(oddOrEven(index) === 'even'){
		$(this).css('color','black');	
	}else{
		$(this).css('color','gray');	
	}
	});
	
	function oddOrEven(x) {
  	return ( x & 1 ) ? "odd" : "even";
	}
});



