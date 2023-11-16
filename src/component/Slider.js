import React from 'react'
import img1 from '../img/img2-1.png' 
import img2 from '../img/img3.png' 
import img3 from '../img/img4.jpg' 
import img4 from '../img/img1webp.webp' 

const Slider = () => {
  return (
    <>
    <div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 hight" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100 hight" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 hight" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100 hight" alt="..." />
    </div>

  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Slider