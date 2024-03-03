document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los botones de "ver más"
    const botonesVerMas = document.querySelectorAll(".ver-mas");

    // Iterar sobre cada botón de "ver más"
    botonesVerMas.forEach(function(boton) {
      // Configurar evento de clic para mostrar el contenido completo
      boton.addEventListener("click", function() {
        const parrafo = boton.previousElementSibling; // Obtener el párrafo hermano anterior
        parrafo.classList.toggle("show-more"); // Alternar la clase show-more para colapsar o expandir el párrafo
        if (parrafo.classList.contains("show-more")) {
          boton.textContent = "Ver menos"; // Cambiar el texto del botón a "Ver menos" cuando se expanda el párrafo
        } else {
          boton.textContent = "Ver más"; // Cambiar el texto del botón a "Ver más" cuando se colapse el párrafo
        }
      });
    });

    AOS.init();
});


  