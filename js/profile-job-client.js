$(document).ready(function() {
  /* funcion para mostrar el numero*/
/*  $('#login').click(function() {
    console.log('estas logeado');
    $('#number').removeClass('hide');
    $('#call').addClass('hide');
  });*/

  $('#first-name, #last-name').keyup(function() {
  /* obteniendo el valor*/
  var $inputName = $(this).val();
  /* expresion para numeros*/
  var $expresion1 = /[1-9]/;
  /*  se valida para que solo se ingrese letras y no numeros*/
  if ($inputName.match($expresion1)) {

    alert('Solo se ingresa letras');
    $(this).val('');
  }
});
$('#email').blur(function() {
  var $inputEmail = $(this).val();
  /* expresión para validar el @ del correo*/
  var $expresion2 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  /* si es incorrecto, se manda un mensaje de alerta*/
  if ($expresion2.test($inputEmail) === false) {
    alert('Ingresar un correo válido');
    /* vaciando la entrada*/
    $(this).val('');
  }
});

$('#login').click(function() {
    /* var $name = $('#first-name').val();
    var $lastName = $('#last-name').val() ;
    var mail =  $('#email').val();*/
    /* se ejecuta si se cumple todos los campos*/
    if ( $('#first-name').val() && $('#last-name').val() && $('#email').val()) {
      event.preventDefault();
      /* se dirige a la vista end*/
      $('#number').removeClass('hide');
      $('#call').addClass('hide');
    } else {
      /* alerta para rellenar todos los campos*/
      alert('Todos los campos son obligatorios');
      event.preventDefault();
    }
  });
  var $idName = $('#dates');

  var name =$idName.append('<div id="name">Nombre:</div>')
    $('#name').append('<span></span>')
      $('#name span').text( dataPeople[0,1] );
      var email =$idName.append('<div id="email">Email:</div>')
        $('#dates #email').append('<span></span>')
          $('#email span ').text(  dataPeople[0,4] );
          var experience =$idName.append('<div id="email">Email:</div>')
            $('#dates #email').append('<span></span>')
              $('#email span ').text(  dataPeople[0,4] );


/*para las estrellas*/
$('#stars li').on('mouseover', function(){
   var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

   // Now highlight all the stars that's not after the current hovered star
   $(this).parent().children('li.star').each(function(e){
     if (e < onStar) {
       $(this).addClass('hover');
     }
     else {
       $(this).removeClass('hover');
     }
   });

 }).on('mouseout', function(){
   $(this).parent().children('li.star').each(function(e){
     $(this).removeClass('hover');
   });
 });


 /* 2. Action to perform on click */
 $('#stars li').on('click', function(){
   var onStar = parseInt($(this).data('value'), 10); // The star currently selected
   var stars = $(this).parent().children('li.star');

   for (i = 0; i < stars.length; i++) {
     $(stars[i]).removeClass('selected');
   }

   for (i = 0; i < onStar; i++) {
     $(stars[i]).addClass('selected');
   }

   // JUST RESPONSE (Not needed)
   var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
   var msg = "";
   if (ratingValue > 1) {
       msg = "Thanks! You rated this " + ratingValue + " stars.";
   }
   else {
       msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
   }
   responseMessage(msg);

 });


});
function responseMessage(msg) {
  $('.success-box').fadeIn(200);
  $('.success-box div.text-message').html("<span>" + msg + "</span>");
}
