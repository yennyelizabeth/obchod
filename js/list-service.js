/* funcionalidad */
$( document ).ready(function() {
    $(".nav li").on("click", function(){
      $(".nav").find(".activa").removeClass("activa");
      $(this).addClass("activa");
    });

    /* declaración de variables */
    /*var url = dataPeople[0,3];*/
    var url = dataPeople[0,3];
   
    var $idName = $('#name');
    var $idResum = $('#resum');

    /* extraer data */
    $idName.text( dataPeople[0,1] );
    $idResum.text( dataPeople[0,5] );
      $("#imagen").attr('src', url);
      $("#imagen").attr('alt', 'Imagen no disponible');
      $("#imagen").attr('title', 'Imagen de carga');




  });

