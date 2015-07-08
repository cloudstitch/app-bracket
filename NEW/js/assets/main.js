$(document).ready(function(){
	changeTheme();
	changeBracket();
})


function changeTheme(){
	$('#select_theme').change(function(){
		var theme = $(this).val();
		$('#main_container').attr('class', 'container '+ theme +'');
	});
}

function changeBracket(){
	$('#select_bracket').change(function(){
		var bracket = $(this).val();
		$('#main_wrapper').attr('class', 'wrapper '+ bracket +'');
	});
}
