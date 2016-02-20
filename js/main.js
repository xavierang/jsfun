var newTotal=0;

function changeTotal(points){
	newTotal = newTotal+points;
	if(points==0){
		newTotal=0;
	}
	return newTotal;
}


$(document).ready(function(){

	var counter=0;
	$('.add1').click(function(){
		counter=changeTotal(1);
		$('.score').html(counter);
	});

	$('.add2').click(function(){
		counter=changeTotal(2);
		$('.score').html(counter);
	});

	$('.add3').click(function(){
		counter=changeTotal(3);
		$('.score').html(counter);
	})

	$('.sub1').click(function(){
		counter=changeTotal(-1);
		$('.score').html(counter);
	})

	$('.reset').click(function(){
		counter=changeTotal(0);
		$('.score').html(counter);
	});


	$('.compare').click(function(){
		var result;
		var value1 = $('#value1').val();
		var value2 = $('#value2').val();
		if(value1==value2){
			result='=';
		}else if (value1>value2){
			result='>';
		}else if (value1<value2){
			result='<';
		}else {
			result='N/A';
		}

		$('#comparison').text(result);
	});

	var lights = "on";
	$('#light-switch').click(function(){
		if(lights=="on"){
			$('.light-switch').addClass('dark');
			lights="off";
		} else {
			$('.light-switch').removeClass('dark');
			lights="on";
		}
	});

	$('header ul li a').hover(function(){
		$('.mega-menu').slideDown();
	}, function(){
		$('.mega-menu').slideUp();
	});
	
});