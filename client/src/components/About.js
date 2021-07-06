import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <div className="background d-flex justify-content-between">
        <div>
          <h1 className="font-monospace color">About Us</h1>
          <p className="font-monospace color">All information about us you need to know</p>
        </div>
        <Card className="background w-25 p-3 color" style={{ width: '15rem' }}>
          <Card.Title className="font-monospace center">Build using MERN Stack</Card.Title>
          <Card.Text>by AAIM</Card.Text>
          <Card.Img variant="top" src="https://res.cloudinary.com/inetab/image/upload/v1625566544/mern-stack.png"/>
          <Card.Body>
            <Card.Text>Arjun <i className="fas fa-hand-point-right"></i><Card.Link className="font-monospace" href="https://github.com/arjunDoel96"><i className="fab fa-github-square"></i></Card.Link></Card.Text>
            <Card.Text>Aya <i className="fas fa-hand-point-right"></i><Card.Link href="https://github.com/Ayamallahx"><i className="fab fa-github-square"></i></Card.Link></Card.Text>
            <Card.Text>Ineta <i className="fas fa-hand-point-right"></i><Card.Link href="https://github.com/inetabliu"><i className="fab fa-github-square"></i></Card.Link></Card.Text>
            <Card.Text>Maurice <i className="fas fa-hand-point-right"></i><Card.Link href="https://github.com/maurice-35"><i className="fab fa-github-square"></i></Card.Link></Card.Text>
          </Card.Body>
        </Card>
      </div>
    

      {/* {Animal Image cards} */}
      <div  className="card-title-background">
        <h1>Website inspired by</h1>
      </div>
  
      <CardGroup>
        <Card className="background">
          <Card.Img className="image-border" variant="top" src="https://res.cloudinary.com/inetab/image/upload/v1625571367/burtimage.jpg"/>
          <Card.Title>Burt</Card.Title>
          <Card.Text>
    Something Something about burt hers a good sausage
          </Card.Text>
        </Card>

        <Card className="background">
          <Card.Img className="image-border" variant="top" src="https://i.pinimg.com/originals/a9/fb/1d/a9fb1d9cfc3d1630bf7610f871728aeb.jpg" />
          <Card.Title>Luna</Card.Title>
          <Card.Text>
      Something something about Luna
          </Card.Text>
        </Card>
      </CardGroup>
    </>
    
 
  )
}

export default About

