import React from 'react';

function Carousel(){
  return(
        <div id="carouselExampleControls" class="container-fluid gx-0 mt-0 mb-5 d-sm-none d-md-block" data-bs-ride="carousel">
     <div class="carousel-inner text-center">
    <div class="carousel-item active position-relative">
    <h1 id="hero_text" class="display-1">EXPLORE</h1>
      <img src="https://picsum.photos/id/450/1680/768" class="img-fluid " alt="..." />
    </div>
    </div>
   </div>
  )
}

export default Carousel;