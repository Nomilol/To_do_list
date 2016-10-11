

$(document).ready(function() {


	$('.add').on('click', function(){

		var ajouter = $('input[name=list]').val();
		console.log(ajouter);

		$( "ul" ).append('<li class="aDetacher">' + '<input type="checkbox" class="check">' + '<label class="barrer">' + ajouter +'</label>' + '</li>');

	});

	$('.btn1').on('click', function(){

		var verif = $('input[type=checkbox]:checked').is(':checked');

		console.log(verif);
		
		if (verif === true) { 

			$('input[type=checkbox]:checked').hide("slow");

			} else {

				$('').show("slow");
			}



	});

	$('.btn2').on('click', function(){


	});














	// var btn1; 
	// var btn2;
	
	
	// $('.btn1').on('click', function(){
	// 	if (btn1) {
	// 		btn1.appendTo("ul");
	// 		btn1 = null;

	// 	} else {

	// 		btn1 = $('.aDetacher').detach();
	// 	}
	// });


	// $('.btn2').on('click', function(){

	// 	if (btn2)	 {
	// 		btn2.appendTo("ul");
	// 		btn2 = null;

	// 	} else {

	// 		btn2 = $('.aDetacher').detach();
	// 	}
	// });

	// function verif(){
	// 	return $('input[type=checkbox]').is(':checked'); 
	// 	console.log(!verif());
	// }
});

