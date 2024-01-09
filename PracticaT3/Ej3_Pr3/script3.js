document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("boton").addEventListener("click", function() {
    var nombre = "Juan";
    var apellido = "Pérez";

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "ajax.php?nombre=" + nombre + "&apellido=" + apellido, true);

    xhr.onload = function() {
      if (xhr.status === 200) {
        var resultado = document.getElementById("resultado");
        resultado.textContent = xhr.responseText;
      } else {
        console.error("Error: " + xhr.status);
      }
    };

    xhr.send();
  });
});


