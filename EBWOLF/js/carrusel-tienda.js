document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos cada contenedor de carrusel
  const containers = document.querySelectorAll(".container-carousel");

  // Recorremos cada contenedor
  containers.forEach(container => {
    const btnLeft = container.querySelector(".btn-left");
    const btnRight = container.querySelector(".btn-right");
    // Dentro de cada contenedor, seleccionamos el slider (en este ejemplo, la clase es .slider2)
    const slider = container.querySelector(".slider2");
    // Se asume que cada slider tiene elementos con la clase .slider-section
    const sliderSections = slider.querySelectorAll(".slider-section");
    const sliderSectionsCount = sliderSections.length;

    // Variables propias para cada slider
    let operacion = 0,
        counter = 0,
        // Usamos 40 (o el porcentaje deseado) dividido por el número de secciones
        widthImg = 40 / sliderSectionsCount;

    function moveToRight() {
      if (counter >= sliderSectionsCount - 1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
      }
      counter++;
      operacion += widthImg;
      slider.style.transform = `translate(-${operacion}%)`;
      slider.style.transition = "all ease .6s";
    }

    function moveToLeft() {
      counter--;
      if (counter < 0) {
        counter = sliderSectionsCount - 1;
        operacion = widthImg * (sliderSectionsCount - 1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
      }
      operacion -= widthImg;
      slider.style.transform = `translate(-${operacion}%)`;
      slider.style.transition = "all ease .6s";
    }

    // Asignamos los eventos a los botones de este contenedor
    btnLeft.addEventListener("click", moveToLeft);
    btnRight.addEventListener("click", moveToRight);

    // Mueve automáticamente cada 3 segundos
    setInterval(moveToRight, 3000);
  });
});

