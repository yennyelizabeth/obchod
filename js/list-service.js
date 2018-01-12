/* funcionalidad */
$(document).ready(function() {
  $('.nav li').on('click', function() {
    $('nav').find('.activa').removeClass('activa') ;
    $(this).addClass('activa');
  });
  /*
  var url = dataPeople[0,3];

  var $idName = $('#name');
  var $idResum = $('#resum');

  /* extraer data */
  /*
  $idName.text(dataPeople[0, 1]);
  $idResum.text(dataPeople[0, 5]);
  $('#imagen').attr('src', url);
  $('#imagen').attr('alt', 'Imagen no disponible');
  $('#imagen').attr('title', 'Imagen de carga');
*/

  /* Funcionalidad - Sección Publicaciones */
  var btn = $('#btn');
  var textarea = $('#textarea');

  btn.prop('disabled', true);
	 textarea.keyup(function(event) {
	    validation();
	 });
  /* función valida publicación */
	 function validation() {
	 	var long = textarea.val().length;
	 	var onlyText = textarea.val().replace(/\s/g, '');
		 if (long === 0 || onlyText === 0) {
       		 btn.prop('disabled', true) ;
	   } else {
	  	 btn.removeAttr('disabled', false);
	   }
  }
  /* evento click */
	 btn.click(function() {
	  addPublication();
	 	textarea.val('');
	  btn.prop('disabled', true);
	 });
  /* función publicar */
	 function addPublication() {
    /* declaración de variables */
	 	var publicationContent = textarea.val();
	 	var $containerToDo = $('#container-to-do');
    var $newPublication = $('<div>');
    var $label = $('<label>');
    var $text = $(document.createTextNode(publicationContent));
    var $icon = $('<i>');
    /* adición de clases y asignación de padres e hijos*/
		 $newPublication.addClass('new');
		 $newPublication.addClass('checkbox');
	   $containerToDo.append($newPublication);
    $newPublication.append($label);
		 $label.append($text);
	 	$icon.addClass('glyphicon glyphicon-point icon');
	 	$newPublication.append($icon);
    textarea.val('');
    btn.prop('disabled', true);

    /* función publicar */
	 	function labeledTask() {
			 label.toggleClass('labeled');
		 }

	 	icon.click(function() {
		 	deleteTask();
    });

		 function deleteTask() {
		 	$newPublication.remove();
		 }
	 }
});
