import {React, Fragment }from "react";


export default function Carousel({galleryImage, galleryHeader, galleryInfo}){
return(
  <section className="carousel_wrapper">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
             <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          </ol>
       <div className="carousel-inner">
  {galleryImage.map((image, index) => {
        return  <div className={ "carousel-item " + (index === 0 ? "active" : " ") } key={index}>
                   <img className="d-block w-100" src={image} alt="First slide"/>
                      <div className="carousel-caption d-none d-md-block">
                          <h5>{galleryHeader[index]}</h5>
                          <p>{galleryInfo[index]}</p>
                      </div>
                </div>
    })}
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
