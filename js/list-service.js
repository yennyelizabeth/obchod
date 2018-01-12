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
<<<<<<< HEAD

  textarea.keyup(function(e) {
    validation();
  });

  function validation() {
    var long = textarea.val().length;
    var onlyText = textarea.val().replace(/\s/g, '');
    if (long == 0 || onlyText == 0) {
      // btn.removeAttr('disabled');
    } else {
      // btn.prop("disabled", true);
    }
=======
  /* inicializa con botón publicar desactivado */
  btn.prop('disabled', true);
  /* evento de ingreso en textarea */
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
	  	 btn.prop('disabled', false);
	   }
>>>>>>> 066169647cabc6c2260f8996474fa05328bfc486
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

<<<<<<< HEAD
  btn.click(function() {
    addTask();
    textarea.val('');
    //  btn.prop("disabled", true);
  });
  function addTask() {
    var taskContent = textarea.val();
    var containerToDo = $('#container-to-do');
    var newTask = $('<div>');
    var label = $('<label>');
    /* var check = $('<input>');*/
    var text = $(document.createTextNode(taskContent));
    var icon = $('<i>');

    newTask.addClass('new');
    newTask.addClass('checkbox');
    containerToDo.append(newTask);
    /*	check.attr('type','checkbox');*/
    /*		label.append(check);*/
    newTask.append(label);
    label.append(text);
    icon.addClass('glyphicon glyphicon-point icon');
    newTask.append(icon);
    textarea.val('');

    /* check.click(function() {
			labeledTask();
		});*/
    function labeledTask() {
      label.toggleClass('labeled');
    }
    icon.click(function() {
      deleteTask();
    });

    function deleteTask() {
      newTask.remove();
    }
  }
=======
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
>>>>>>> 066169647cabc6c2260f8996474fa05328bfc486
});
