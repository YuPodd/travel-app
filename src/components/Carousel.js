import {React, Fragment }from "react";
import Country from "./Country";

export default function Carousel({galleryImage, galleryHeader, galleryInfo}){
return(
  <section className="carousel_wrapper">
   
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={galleryImage[0]} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>{galleryHeader[0]}</h5>
    <p>{galleryInfo[0]}</p>
    </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={galleryImage[1]} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>{galleryHeader[1]}</h5>
    <p>{galleryInfo[1]}</p>
    </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={galleryImage[2]} alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>{galleryHeader[2]}</h5>
    <p>{galleryInfo[2]}</p>
    </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</section>
)
}