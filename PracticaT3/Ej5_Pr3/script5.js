document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton").addEventListener("click", function() {
      var xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);

            document.getElementById("autor").textContent = data.nombre + " " + data.apellido;
            document.getElementById("titulo").textContent = data.libros[0].titulo;
            document.getElementById("subtitulo").textContent = data.libros[0].subTitulo;
          } else {
            console.error("Error: " + xhr.status);
          }
        }
      };
  
      xhr.open("GET", "ajax.json", true);
      xhr.send();
    });
  });
  
  