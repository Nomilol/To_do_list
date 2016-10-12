

$(document).ready(function() {


	var compteur = 0;

	$('.add').on('click', function(){
		var ajouter = $('input[name=list]').val();		

		compteur++

		$( "ul" ).append('<li class="aDetacher">' + '<input id="toDo'+compteur+'" type="checkbox" class="check">' + '<label name="label" class="barrer">' + ajouter +'</label>' + '</li>');		

	});


	// $('.buttonToDo').on('click', function(){

	// 	function checked(){
	// 		var check = $('input[type=checkbox]').is(':checked') 
	// 		return check;

	// 	}

	// 	for(var i = 0; i <= compteur; i++){


	// 		if (!checked() === false) {

	// 		$('#toDo'+i).removeClass("check").addClass('unchecked');

	// 			$('.unchecked').toggle('fast');
	// 			$($('.unchecked').next('label')).toggle('fast')


	// 			if (!checked() === false){

	// 				$('#input').removeClass("check").addClass('checked');
	// 			}

	// 		} 
	// 	}

	// });


	$('.buttonDone').on('click', function(){

		
		var verif2 = $('input[type=checkbox]').is(':checked');
		console.log(verif2);

		if (verif2 === true) { 

			$('input[type=checkbox]:checked').toggle("slow");
			$($('input[type=checkbox]:checked').next("label")).toggle("slow");
		}

		checked();


	});

});
