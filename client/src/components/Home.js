import React from 'react'
import { Carousel } from 'react-bootstrap'

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="d-flex justify-content-md-between align-items-md-center">
          <img
            className="d-block w-50"
            src="https://www.fishguardvets.co.uk/wp-content/uploads/2019/02/medial-dental-health-dog-cat-brushing-teeth-011218.jpg"
            alt="First slide"
          />
          <p className="text-monospace">Tails & Whiskers is the best dog and cat food company in whole of UK! Couldnt recommend it more</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-md-between align-items-md-center">
          <img 
            className="d-block w-50"
            src="https://media.istockphoto.com/photos/happy-mixed-breed-dog-posing-with-a-kitten-on-his-head-picture-id1210341751?k=6&m=1210341751&s=612x612&w=0&h=G1ZkGiAxhW5PUVpu-NfDnNiKAbLgDTymAVWPyBEmyXk="
            alt="Second slide"
          />
          <p className="text-monospace">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex d-flex justify-content-md-between align-items-md-center">
          <img
            className="d-block w-50"
            src="https://www.infocusvj.org/wp-content/uploads/2017/10/3_antimicrobial-use-pattern_dogs-and-cats_UK-1.jpg"
            alt="Third slide"
          />
          <p className="text-monospace">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home
