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

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".menu-navegacion");
  if (!header) return;

  const toggleShrink = () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  };

  // Ejecutar al cargar (por si ya hay scroll inicial)
  toggleShrink();

  // Escuchar el scroll
  window.addEventListener("scroll", toggleShrink, { passive: true });
});


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
