document.addEventListener("DOMContentLoaded", function() {

    const carruseles = document.querySelectorAll(".carrusel");

    carruseles.forEach(carrusel => {
        const carruselContenedor = carrusel.querySelector(".carrusel-contenedor");
        
        const cards = carruselContenedor.querySelectorAll(".card");

        const carruselSiguiente = carrusel.querySelector(".carrusel-siguiente");
        
        const carruselAnterior = carrusel.querySelector(".carrusel-anterior");

        const cardAncho = cards[0].offsetWidth;
        
        const carruselContenedorAncho = cardAncho * cards.length;

        carruselContenedor.style.width = carruselContenedorAncho + "px";

        let posicion = 0;

        carruselSiguiente.addEventListener("click", function() {
            if (posicion < cards.length - 5) {
                posicion += 5;
                carruselContenedor.style.transform = `translateX(-${posicion * cardAncho}px)`;
            }
        });

        carruselAnterior.addEventListener("click", function() {
            if (posicion > 0) {
                posicion -= 5;
                if (posicion < 0) {
                posicion = 0;
                }
                carruselContenedor.style.transform = `translateX(-${posicion * cardAncho}px)`;
            }
        });
    });
});
