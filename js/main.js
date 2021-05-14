document.addEventListener('DOMContentLoaded', () => 
{
    const elementosCarousel = document.querySelectorAll('.carousel'); //Manda llamar todos los elementos del carrusel
    M.Carousel.init(elementosCarousel,{
      duration: 450,    //Controla el tiempo de la animacion
      dist: -80, //Controla la perspectiva de arrastre
      shift: 5, //Establece la distancia entre las imagenes a los costados
      padding: 5, //Espaciado que se tiene dentro
      numVisible: 5,//Cuantas imagenes queremos visibles en la pagina
      indicators: true, //Aparecen puntitos que indican que numero de imagen es
      noWrap: false//Indica si queremos que inicia con la primer imagen o no 
    }); //Metodo para que inicie el carrusel
});