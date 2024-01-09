$(document).ready(function() {
    $('#boton').on('click', function() {
      var nombre = "Isabel";
      var apellido = "Lopez";
  
      $.ajax({
        url: 'ajax.php',
        method: 'GET',
        data: { nombre: nombre, apellido: apellido },
        success: function(response) {
          
          $('#resultado').text(response);
        },
        error: function(xhr, status, error) {
          console.error("Error: " + error);
        }
      });
    });
  });