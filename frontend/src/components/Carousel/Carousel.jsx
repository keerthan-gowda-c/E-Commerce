import './Carousel.css';


export default function Carousel(){
    return(
        <>
        <div id="carouselExample" className="carousel slide custom_carousel h-100">
  <div className="carousel-inner h-100">
    <div className="carousel-item active">
      <img src="images/carousel/Camaro.jpg" className="d-block w-100 h-100 object-fit-cover" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/carousel/Lamborgini.jpg" className="d-block w-100 object-fit-cover" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/carousel/MP4.jpg" className="d-block w-100 object-fit-cover" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </>
    )
}