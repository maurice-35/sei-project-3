import React from 'react'
import { Carousel } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="." className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src=".." className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src=".." className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <div className="p-2 w-100 center">
          <h2 className="text-monospace text-center">FOOD DESIGNED FOR YOUR CAT OR DOG</h2>
          <p className="text-monospace text-center">
          Delivering fresh, tasty meals to your door.
          </p>
        </div>
        <div className="p-2 flex-shrink-1">
          <img src="https://www.rd.com/wp-content/uploads/2020/05/GettyImages-1147030350-e1589568998232.jpg" className="img-fluid rounded" alt="dog and cat images"/>
        </div>
      </div>

      <div className="mid-hero d-flex justify-content-around text-monospace">
        <div className="info-hero">
          <h5>No nasties</h5>
          <p>Just simple ingredients, without the mystery.
          </p>
        </div>
        <div className="info-hero">
          <h5>No grains</h5>
          <p>Good news for pups with allergies.
          </p>
        </div>
        <div className="info-hero">
          <h5>No harsh temperatures</h5>
          <p>We choose to gently cook.</p>
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <div className="d-flex carousel justify-content-md-between align-items-md-center">
            <img
              className="d-block w-50"
              src="https://www.fishguardvets.co.uk/wp-content/uploads/2019/02/medial-dental-health-dog-cat-brushing-teeth-011218.jpg"
              alt="First slide"
            />
            <p className="text-monospace">Tails & Whiskers is the best dog and cat food company in whole of UK! Couldnt recommend it more</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex carousel justify-content-md-between align-items-md-center">
            <img 
              className="d-block w-50"
              src="https://media.istockphoto.com/photos/happy-mixed-breed-dog-posing-with-a-kitten-on-his-head-picture-id1210341751?k=6&m=1210341751&s=612x612&w=0&h=G1ZkGiAxhW5PUVpu-NfDnNiKAbLgDTymAVWPyBEmyXk="
              alt="Second slide"
            />
            <p className="text-monospace">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex carousel justify-content-md-between align-items-md-center">
            <img
              className="d-block w-50"
              src="https://www.infocusvj.org/wp-content/uploads/2017/10/3_antimicrobial-use-pattern_dogs-and-cats_UK-1.jpg"
              alt="Third slide"
            />
            <p className="text-monospace">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home
