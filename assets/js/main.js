//buscador
function mostrarBuscador() {
document.getElementById("buscador").style.display = "flex";
}

function buscarProducto(event) {
event.preventDefault();
let query = document.getElementById("inputBusqueda").value;
alert("Buscaste: " + query);
  // window.location.href = "pages/busqueda.html?query=" + query;
}
//carrito
let contador = 0;
function agregarAlCarrito() {
contador++;
document.getElementById("contadorCarrito").textContent = contador;
}
//banner
document.addEventListener("DOMContentLoaded", () => {
  const banners = document.querySelectorAll(".banner");

  banners.forEach(banner => {
    const captions = banner.querySelectorAll(".carousel-caption");

    captions.forEach(caption => {
    banner.addEventListener("click", () => {
    caption.classList.toggle("visible");
    });
    });
  });
});
//scroll
document.addEventListener('scroll', () => {
  const header = document.querySelector('.menu-navegacion');
  if (!header) return;

  window.requestAnimationFrame(() => {
    if (window.scrollY > 0) {
    header.classList.add('shrink');
    } else {
    header.classList.remove('shrink');
    }
  });
}, { passive: true });


