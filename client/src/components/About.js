import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <div className="background d-flex justify-content-between">
        <div className="about-info">
          <h1 className="font-monospace">🐾 About Us 🐾</h1>
          <p className="font-monospace para-1">A great team of 4, who love cats and dogs!</p>
          <p className="font-monospace para-2">We are a small e-commerce business that sells dog and cat products such as food, treats and toys. </p>
          <p className="font-monospace para-3"> Our products include human-quality meat and vegetables, gently cooked to create simple and tasty meals. All created with love and the right balance of vitamins and minerals for all ages.</p>

          <div className="store-info">
            <p className="font-monospace para-4">We’re online..... <br /> Monday to Friday: 9am - 8pm <br /> Weekends and bank holidays: 9am - 6pm.</p>
            <p className="font-monospace para-4">Store location: 123 High Street Kensington, London, W8 AAIM <br />
              Store number: 0208 1234 5678</p>
          </div>

        </div>
        <div className="code-team d-flex">
          <h2 className="font-monospace">Built using MERN Stack</h2>
          <h5 className="font-monospace">(Mongo, Express, React, Node)</h5>
          <img variant="top" src="https://res.cloudinary.com/inetab/image/upload/v1625566544/mern-stack.png" />
          <h3>Created by AAIM...</h3>

          <div className="team">
            <p className="font-monospace">Arjun <i className="fas fa-hand-point-right"></i><Card.Link className="font-monospace" href="https://github.com/arjunDoel96"><i className="fab fa-github-square icon"></i></Card.Link></p>
            <p className="font-monospace">Aya <i className="fas fa-hand-point-right"></i><Card.Link href="https://www.linkedin.com/in/aya-mallah/"><i className="fab fa-linkedin icon"></i></Card.Link></p>
            <p className="font-monospace">Ineta <i className="fas fa-hand-point-right"></i><Card.Link href="https://github.com/inetabliu"><i className="fab fa-github-square icon"></i></Card.Link></p>
            <p className="font-monospace">Maurice <i className="fas fa-hand-point-right"></i><Card.Link href="https://github.com/maurice-35"><i className="fab fa-github-square icon"></i></Card.Link></p>
          </div>
        </div>
      </div>


      <h1 className="font-monospace memorial-title">Website inspired by</h1>

      <CardGroup>
        <Card className="burt">
          <img className="image-border animate__animated animate__zoomIn" variant="top" src="https://res.cloudinary.com/inetab/image/upload/v1625571367/burtimage.jpg" />
          <h3>Burt</h3>
          <p>
            The lovely baby burt, he is such a good sausage!

            <div>
              - From Ineta
            </div>
          </p>
        </Card>

        <Card className="luna">
          <img className="image-border animate__animated animate__zoomIn luna-img" src="https://res.cloudinary.com/dhrxw6zhp/image/upload/c_scale,h_800,w_800/v1625828555/Image_3_vdbnxa.jpg" />
          <h3>Luna</h3>
          <p>
            Thinking of you... <span id="luna-name">Luna</span> <br />
            Forever in our thoughts and hearts, rest in peace. <br />
            Loved and remembered by all 🤍 <br />
            <div>
              - From Aya 💗
            </div>
          </p>
        </Card>
      </CardGroup >
    </>


  )
}

export default About

