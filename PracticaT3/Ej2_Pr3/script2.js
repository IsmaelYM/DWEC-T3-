$(document).ready(function () {
    $("#boton").click(function () {
      $.ajax({
        url: "ajax.xml",
        type: "GET",
        dataType: "xml",
        success: function (xml) {
          let resultados1 = "";
          let resultados2 = "";
  
          $(xml).find("item").each(function () {
            let nombre = $(this).attr("nombre");
            let apellido = $(this).attr("apellido");
            resultados1 += nombre + "<br>";
            resultados2 += apellido + "<br>";
          });
  
          $("#contenedor1").html(resultados1);
          $("#contenedor2").html(resultados2);
        },
        error: function () {
          console.log("Error al cargar el archivo XML.");
        }
      });
    });
  });
  