document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los botones de "ver más"
    const botonesVerMas = document.querySelectorAll(".ver-mas");

    botonesVerMas.forEach(function(boton) {
      boton.addEventListener("click", function() {
        const parrafo = boton.previousElementSibling; // Obtener el párrafo hermano anterior
        parrafo.classList.toggle("show-more"); 
        if (parrafo.classList.contains("show-more")) {
          boton.textContent = "Ver menos"; 
        } else {
          boton.textContent = "Ver más"; 
        }
      });
    });

    AOS.init();
});


  