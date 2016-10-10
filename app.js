

$(document).ready(function() {


	$('button').on('click', function(){

		var ajouter = $('input[name=list]').val();

		$( "ul" ).append('<li>' + '<input type="checkbox" id="check">' + '<label class="strikethrough">' + ajouter +'</label>' + '</li>');



	});


	// var test = function () {
	// 	return $('#check').is(':checked');
	//  } 
	
 //  	if () {

 //  		$('li').css('text-decoration', 'line-through')
  		

 //  	} else {

 //  		$('li').css('text-decoration', 'none')
 //  	}

 

  	//$("input[type=checkbox]").on("click", test);

});


