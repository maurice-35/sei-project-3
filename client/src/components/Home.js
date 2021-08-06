import React from 'react'
import { Carousel } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'

const Home = () => {
  return (
    <>
      <Marquee className="banner">
        <div>🐾 Free Worldwide delivery 🐾</div>
        <div className="middle-banner">🐾 NEW Perky Jerky Dog Treats available! 🐾</div>
        <div>🐾 Use promocode: TW2021 for 15% off your first order🐾</div>
      </Marquee>

      <div className=" top-hero d-flex">
        <div className="p-2 w-100 center">
          <h2 className="text-monospace text-center fs-1">Food designed with <i className="fas fa-heart"></i> for your <span className="fw-bold"><br />CAT</span>&<span className="fw-bold">DOG</span>!</h2>
          <p className="text-monospace text-center">
            Delivering fresh, tasty meals to your door.
          </p>
        </div>
        <div className="flex-shrink-1">
          <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_706,w_1256,x_0,y_64/f_auto,q_auto,w_1100/v1554995050/shape/mentalfloss/516438-istock-637689912.jpg" className="img-fluid" alt="dog and cat images" />
        </div>
      </div>

      <div className="mid-hero d-flex justify-content-around text-monospace">
        <div className="info-hero">
          <img src="https://res.cloudinary.com/inetab/image/upload/v1625679954/SEI-Project-3/no-grains-744f7b8cf78a3fd49b31f81c7e1e146bbf240e0b0dc6028a303e004f0900072b_ctm30p.svg" />
          <p className="fw-bold lh-sm text-decoration-underline" >No nasties</p>
          <p>Just simple ingredients, without the mystery.
          </p>
        </div>
        <div className="info-hero">
          <img src="https://res.cloudinary.com/inetab/image/upload/v1625679903/SEI-Project-3/no-nasties-ef3442ff60c5432eeb626d0f3e4eba240de5bd1340cb199922493c5082b39dcd_jgbr2y.svg" />
          <p className="fw-bold lh-sm text-decoration-underline">No Grains</p>
          <p>Good news for pups with allergies.
          </p>
        </div>
        <div className="info-hero">
          <img src="https://res.cloudinary.com/inetab/image/upload/v1625679982/SEI-Project-3/no-high-temperatures-73e067d8c651e4a4a0af15d65251fd499229af8fd5c4ce4b92e5dc32e8597c84_ms4gqx.svg" />
          <p className="fw-bold lh-sm text-decoration-underline">No harsh temperatures</p>
          <p>We choose to gently cook.</p>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <div className="d-flex carousel justify-content-md-between align-items-md-center">
            <img
              className="d-block w-50 img-fluid"
              src="https://res.cloudinary.com/inetab/image/upload/v1625677526/SEI-Project-3/dog%20carousel%201.jpg"
              alt="First slide"
            />
            <p className="text-monospace"><q>Tails & Whiskers is the best dog and cat food company in whole of UK! Couldnt recommend it more</q> - Sarah Jay</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex carousel justify-content-md-between align-items-md-center">
            <img
              className="d-block w-50 img-fluid"
              src="https://res.cloudinary.com/inetab/image/upload/v1625750523/SEI-Project-3/0003_35_u9ozus.jpg"
              alt="Second slide"
            />
            <p className="text-monospace"><q>Woof Woof! Tasty dog food indeed!</q> - Burt</p>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex carousel justify-content-md-between align-items-md-center">
            <img
              className="d-block w-50 img-fluid"
              src="https://res.cloudinary.com/inetab/image/upload/v1625677849/SEI-Project-3/carousel%202.jpg"
              alt="Third slide"
            />
            <p className="text-monospace"><q>Great customer service and my cat loves the Cosmic Catnip!</q> - AJ</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home
