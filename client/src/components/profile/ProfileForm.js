import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../auth/helpers/auth'
import { useHistory } from 'react-router'
// import  ImageUploader  from 'react-images-upload'

const ProfileForm = () => {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory()
  const [petData, setPetData] = useState({
    name: '',
    image: '',
    gender: '',
    age: '',
    breed: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    history.push('/pet')
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
    <div className="background-color">
      <div className="form-container text-monospace">
        <Form  className="nimate__animatedanimate__zoomIn"onSubmit={handleSubmit}>
          <h3 className="pet-form">Create your Pet Profile</h3>
          <Form.Group className="form-row">
            <Col xs={7}>
              <Form.Label>Pet Name</Form.Label>
              <Form.Control onChange={handleChange} name="name" value={petData.name} placeholder="Your dog or cats name" required/>
            </Col>
            <Col xs={7}>
              <Form.Label>Breed</Form.Label>
              <Form.Control onChange={handleChange} name="breed" value={petData.breed}placeholder="Your dog or cat breed"  required/>
            </Col>
          </Form.Group>
          <Form.Group className="form-row" controlId="formGridGender">
            <Col xs={2}>
              <Form.Label>Gender</Form.Label>
              <Form.Control  onChange={handleChange} name="gender" value={petData.name} as="select" defaultValue="Gender" required>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Col>
            <Form.Group controlId="formGridAge">
              <Col xs={5}>
                <Form.Label>Age</Form.Label>
                <Form.Control onChange={handleChange} name="age" value={petData.age}/>
              </Col>
            </Form.Group>
            {/* <Form.File onChange={handleChange} name="image" value={petData.image} id="pet-form" label="Pet photo upload" /> */}
            {/* <ImageUploader /> */}
            <Form.Group controlId="formGridAbout">
            
            </Form.Group>
          </Form.Group>
          <Button className="submit-button"type="submit">Submit</Button>

        </Form>
      </div>
    </div>
   
  )
}

export default ProfileForm
