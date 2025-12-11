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
<<<<<<< HEAD

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
=======
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
>>>>>>> b17aa25040fc0c460c501cc09d4f4b08d06ef06c
});
