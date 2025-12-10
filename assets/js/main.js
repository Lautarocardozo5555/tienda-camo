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
// Mostrar/Ocultar caption al tocar en mobile
document.querySelectorAll('.carousel-item').forEach(item => {
  item.addEventListener('click', () => {
    const caption = item.querySelector('.carousel-caption');
    if (!caption) return;
    caption.classList.toggle('visible');
  });
});
window.addEventListener('scroll', () => {
  const header = document.querySelector('.menu-navegacion');
  if (window.scrollY > 50) { // cuando bajás más de 50px
    header.classList.add('shrink'); // ojo: corregí el typo
  } else {
    header.classList.remove('shrink');
  }
});
