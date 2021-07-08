import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [pet, setPet] = useState({
    name: '',
    image: '',
    gender: '',
    age: '',
    breed: '',
  })


  return (
    <Form>
      <Form.Group as={Col}>
        <Col xs={4}>
          <Form.Label>Pet Name</Form.Label>
          <Form.Control placeholder="Your dog or cats name" />
        </Col>
        <Form.Group as={Col} controlId="formGridGender">
          <Col xs={4}>
            <Form.Label column sm={2}>Gender</Form.Label>
            <Form.Control as="select" defaultValue="Gender">
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Col>
          <Form.Group as={Col} controlId="formGridAge">
            <Col xs={4}>
              <Form.Label>Age</Form.Label>
              <Form.Control />
            </Col>
          </Form.Group>
          <Form.File id="pet-form" label="Pet photo upload" />
          <Form.Group controlId="formGridAbout">
            <Col xs={4}>
              <Form.Label>Breed</Form.Label>
              <Form.Control placeholder="Your dog or cat breed" />
            </Col>
          </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form.Group>
    </Form>
  )
}

export default Profile
