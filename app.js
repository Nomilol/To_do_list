

$(document).ready(function() {


	// $( ".container" ).delegate( "button", "click", function() {
	// 	$(this).after('<input type="text" id="input" placeholder="Ajouter une tâche">');
	// });
	// var test = $('#input').val();
	// var resultat = 	$('li').html(test)

	$('button').on('click', function(){

		var ajouter = $('input[name=list]').val();

		$( "ul" ).append('<li>' + ajouter + '</li>');


	});
});

