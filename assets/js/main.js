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
function activarCaptionMobile() {
  if (window.innerWidth <= 576) { // solo mobile
    document.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('click', () => {
    const caption = item.querySelector('.carousel-caption');
    if (!caption) return;
    caption.classList.toggle('visible');
    });
    });
  }
}

// Ejecutar al cargar
activarCaptionMobile();

// Re-ejecutar si cambia el tamaño de pantalla
window.addEventListener('resize', activarCaptionMobile);
window.addEventListener('scroll', () => {
  const header = document.querySelector('.menu-navegacion');
  if (window.scrollY > 20) { // cuando bajás más de 20px
    header.classList.add('shrink'); // ojo: corregí el typo
  } else {
    header.classList.remove('shrink');
  }
});
