window.addEventListener("load", function () {
    document.getElementById("boton").addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let xmlDoc = this.responseXML;
                let items = xmlDoc.getElementsByTagName("item");

                let nombres = "";
                for (let i = 0; i < items.length; i++) {
                    let nombre = items[i].getAttribute("nombre");
                    let apellido = items[i].getAttribute("apellido");
                    nombres += nombre + " " + apellido + "<br>";
                }

                document.getElementById("nombre").innerHTML = nombres;
            }
        }
        xhr.open("GET", "ajax.xml", true);
        xhr.send();
    });
});
