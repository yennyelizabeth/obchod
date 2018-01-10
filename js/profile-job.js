$(document).ready(function() {
  $('#login').click(function() {
    console.log('estas logeado');
    $('#number').removeClass('hide');
    $('#call').addClass('hide');
  });
  /* seccion para subir las fotos*/
  $('#preview').hover(function() {
    /* aparece el btn de subir foto*/
    $(this).find('a').fadeIn();
  }, function() {
    /* desaparece el btn de subir foto*/
    $(this).find('a').fadeOut();
  });
  $('#file-select').on('click', function(event) {
    event.preventDefault();
    $('#file').click();
  });
  $('input[type=file]').change(function() {
  /* se utiliza en firefox, si se usa en chrome el resultado es C:\fakepath\descarga.png*/
  /*  var file = $(this).val();*/
  /* se utiliza en chrome*/
    var file = (this.files[0].name).toString();
    console.log(file);
    var reader = new FileReader();
    $('#file-info').text('');
    $('#file-info').text(file);
    reader.onload = function(event) {
      var newim = $('#preview img').attr('src', event.target.result);
      $('#imagen').append("<img src= '"+ event.target.result +"' />");
      console.log(newim);
    };
    /* muestra la imagen*/
    reader.readAsDataURL(this.files[0]);
  });
  $('#file-save').click(function(event) {

    alert(event.target.result);

    /* var newImagen =localStorage.getItem("imagen");
   $('#imagen').append(newImagen)*/
  });
});
