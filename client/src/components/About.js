import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <div className="background d-flex justify-content-between">
        <div className="about-info">
          <h1 className="font-monospace">About Us</h1>
          <p className="font-monospace">We decided to create a e-commerce website that sells dog and cat products such as food, treats and toys. </p>
        </div>
        <div className="">
          <h2 className="font-monospace center">Build using MERN Stack</h2>
          <h3>by AAIM</h3>
          <img variant="top" src="https://res.cloudinary.com/inetab/image/upload/v1625566544/mern-stack.png" />
          <div>
            <p>Arjun <i className="fas fa-hand-point-right"></i><Card.Link className="font-monospace" href="https://github.com/arjunDoel96"><i className="fab fa-github-square"></i></Card.Link></p>
            <p>Aya <i className="fas fa-hand-point-right"></i><Card.Link href="https://www.linkedin.com/in/aya-mallah/"><i className="fab fa-linkedin"></i></Card.Link></p>
            <p>Ineta <i className="fas fa-hand-point-right"></i><Card.Link href="https://github.com/inetabliu"><i className="fab fa-github-square"></i></Card.Link></p>
            <p>Maurice <i className="fas fa-hand-point-right"></i><Card.Link href="https://github.com/maurice-35"><i className="fab fa-github-square"></i></Card.Link></p>
          </div>
        </div>
      </div>


      {/* {Animal Image cards} */}
      <div className="">
        <h1>Website inspired by</h1>
      </div>

      <CardGroup>
        <Card className="">
          <img className="image-border" variant="top" src="https://res.cloudinary.com/inetab/image/upload/v1625571367/burtimage.jpg" />
          <Card.Title>Burt</Card.Title>
          <Card.Text>
            Something Something about burt hers a good sausage
          </Card.Text>
        </Card>

        <Card className="">
          <img className="image-border" variant="top" src="https://i.pinimg.com/originals/a9/fb/1d/a9fb1d9cfc3d1630bf7610f871728aeb.jpg" />
          <Card.Title>Luna</Card.Title>
          <p>
            Thinking of you... <span>LUNA</span> <br />
            Forever in our thoughs and hearts, rest in peace. <br />
            Loved and remembered by all 🤍
          </p>
        </Card>
      </CardGroup >
    </>


  )
}

export default About

