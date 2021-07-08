import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { getTokenFromLocalStorage } from './auth/helpers/auth'

const ProfileForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [petData, setPetData] = useState({
    name: '',
    image: '',
    gender: '',
    age: '',
    breed: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('submiting')
    console.log('form data', petData)
    try {
      await axios.post('/api/profile', petData, {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
    
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = (event) => {
    const newPet = { ...petData, [event.target.name]: event.target.value }
    setPetData(newPet)
    console.log(newPet)
  }

  
  return (
  
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Col}>
        <Col xs={4}>
          <Form.Label>Pet Name</Form.Label>
          <Form.Control onChange={handleChange} name="name" value={petData.name} placeholder="Your dog or cats name" />
        </Col>
        <Form.Group as={Col} controlId="formGridGender">
          <Col xs={4}>
            <Form.Label column sm={2}>Gender</Form.Label>
            <Form.Control  onChange={handleChange} name="gender" value={petData.name} as="select" defaultValue="Gender">
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Col>
          <Form.Group as={Col} controlId="formGridAge">
            <Col xs={4}>
              <Form.Label>Age</Form.Label>
              <Form.Control onChange={handleChange} name="age" value={petData.age}/>
            </Col>
          </Form.Group>
          <Form.File onChange={handleChange} name="image" value={petData.image} id="pet-form" label="Pet photo upload" />
          <Form.Group controlId="formGridAbout">
            <Col xs={4}>
              <Form.Label>Breed</Form.Label>
              <Form.Control onChange={handleChange} name="breed" value={petData.breed}placeholder="Your dog or cat breed" />
            </Col>
          </Form.Group>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  )
}

export default ProfileForm
