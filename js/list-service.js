<<<<<<< HEAD
/** *****************************funcionalidad *******************************/
$(document).ready(function() {
  $('.nav li').on('click', function() {
    $('.nav').find('.activa').removeClass('activa');
    $(this).addClass('activa');
  });
  /* ________________________ Main- Lista de Electricistas____________________*/
  /* var url = dataPeople[0,3];*/
  var url = dataPeople[0, 3];
=======
/* funcionalidad */
$( document ).ready(function() {
  $(".nav li").on("click", function(){
    $(".nav").find(".activa").removeClass("activa");
    $(this).addClass("activa");
  });
  var url = dataPeople[0,3];
>>>>>>> 0a88ad4640bb74d972c213a64ff709ab16d51883
  var $idName = $('#name');
  var $idResum = $('#resum');

  /* extraer data */
<<<<<<< HEAD
  $idName.text(dataPeople[0, 1]);
  $idResum.text(dataPeople[0, 5]);
  $('#imagen').attr('src', url);
  $('#imagen').attr('alt', 'Imagen no disponible');
  $('#imagen').attr('title', 'Imagen de carga');

  /* _________________________Sección Publicaciones__________________________*/
=======
  /*$idName.text( dataPeople[0,1] );
    $idResum.text( dataPeople[0,5]);
    $("#imagen").attr('src', url);*/
  $("#imagen").attr('alt', 'Imagen no disponible');
  $("#imagen").attr('title', 'Imagen de carga');

  /* Sección Publicaciones */
>>>>>>> 0a88ad4640bb74d972c213a64ff709ab16d51883
  var btn = $('#btn');
  // btn.prop("disabled", true);
  var textarea = $('#textarea');
	
  textarea.keyup(function(e) {
    validation();
  });
	
  function validation() {
    var long = textarea.val().length;
    var onlyText = textarea.val().replace(/\s/g, '');
    if (long === 0 || onlyText === 0) {
      // btn.removeAttr('disabled');
    } else {
      // btn.prop("disabled", true);
    }
  }
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
<<<<<<< HEAD
    // var check = $('<input>');
    var text = $(document.createTextNode(taskContent));
    var icon = $('<i>');

    newTask.addClass('new');
    // newTask.addClass('checkbox');
    
    containerToDo.append(newTask);
    
    // check.attr('type', 'checkbox');
    // label.append(check);
    newTask.append(label);
    label.append(text);
	
    icon.addClass('glyphicon glyphicon-trash icon');
    newTask.append(icon);
    
    textarea.val('');
=======
    var text = $(document.createTextNode(taskContent));
    var icon = $('<i>');

		newTask.addClass('new');
    newTask.addClass('checkbox');
    containerToDo.append(newTask);
  	newTask.append(label);
		label.append(text);
		icon.addClass('glyphicon glyphicon-trash icon');
		newTask.append(icon);
    textarea.val('')
>>>>>>> 0a88ad4640bb74d972c213a64ff709ab16d51883

    // check.click(function() {
    //   labeledTask();
    // });
    
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
	
  // codigo para la funcionalidad de las estrellas
  /* 1. Visualizing things on Hover - See next part for action on click */
//   $('#stars li').on('mouseover', function(){
//     var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
//     // Now highlight all the stars that's not after the current hovered star
//     $(this).parent().children('li.star').each(function(e){
//       if (e < onStar) {
//         $(this).addClass('hover');
//       }
//       else {
//         $(this).removeClass('hover');
//       }
//     });
    
//   }).on('mouseout', function(){
//     $(this).parent().children('li.star').each(function(e){
//       $(this).removeClass('hover');
//     });
//   });
  
  
//   /* 2. Action to perform on click */
//   $('#stars li').on('click', function(){
//     var onStar = parseInt($(this).data('value'), 10); // The star currently selected
//     var stars = $(this).parent().children('li.star');
    
//     for (i = 0; i < stars.length; i++) {
//       $(stars[i]).removeClass('selected');
//     }
    
//     for (i = 0; i < onStar; i++) {
//       $(stars[i]).addClass('selected');
//     }
    
//     // JUST RESPONSE (Not needed)
//     var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
//     var msg = "";
//     if (ratingValue > 1) {
//         msg = "Thanks! You rated this " + ratingValue + " stars.";
//     }
//     else {
//         msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
//     }
//     responseMessage(msg);
    
//   });
  
  
// });


// function responseMessage(msg) {
//   $('.success-box').fadeIn(200);  
//   $('.success-box div.text-message').html("<span>" + msg + "</span>");
// }
});

