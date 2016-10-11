

// $(document).ready(function() {

		var compteur = -1;
		var tab = [];
		
		

	$('.add').on('click', function(){
		var obj = {
			value: $('#input').val(),
			status: false,

		}

		compteur++
		
		tab.push(obj);
		console.log(tab);

		// $(this).attr('id', newId);

		// });

		$( "ul" ).append('<li class="aDetacher" > <input type="checkbox" data-number="'+compteur+'" id="checking'+compteur+'" class="check"> <label name="label" class="barrer">' + obj.value +'</label></li>');
		

		$('.check').on('click', function(){

			var data = $(this).data('number');
			
			if (checked() === true) {

				console.log(data)

				tab[data].status = true;

			}
		});

	});

	function checked(){
	 return $('.check').is(':checked')
	}


	// $('.buttonToDo').on('click', function(){


	// 	if (verif1 === true){
	// 		$('input[type=checkbox]').toggle('fast');
	// 		$($('input[type=checkbox]').next('label')).toggle('fast');
	// 	}else{

	// 	}
	// });


	// $('.buttonDone').on('click', function(){

	// 	var verif2 = $('input[type=checkbox]').is(':checked');
	// 	console.log(verif2);
		
	// 	if (verif2 === true) { 

	// 		$('input[type=checkbox]:checked').toggle("slow");
	// 		$($('input[type=checkbox]:checked').next("label")).toggle("slow");
	// 	}




	// });









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
// });

