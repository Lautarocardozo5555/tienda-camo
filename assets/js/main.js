function mostrarBuscador() {
document.getElementById("buscador").style.display = "flex";
}

function buscarProducto(event) {
event.preventDefault();
let query = document.getElementById("inputBusqueda").value;
alert("Buscaste: " + query);
  // window.location.href = "pages/busqueda.html?query=" + query;
}

let contador = 0;
function agregarAlCarrito() {
contador++;
document.getElementById("contadorCarrito").textContent = contador;
}