import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = () => {
  const history = useHistory()

  //* Form object state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  //*Get userInput
  const handleUserData = e => {
    const getUserData = { ...formData, [e.target.name]: e.target.value }
    setFormData(getUserData)
  }

  const submitForm = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/register', formData)
      history.push('/login')
    } catch (err) {
      console.log(err)
      // setErrors(err.response.data.errors)
    }
  }


  console.log(formData)


  return (
    <>
      <h1 className="text-center">Register With Us!</h1>
      <Container fluid="md" className="center-height">
        <Row className="justify-content-md-center">
          <Form onSubmit={submitForm}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" type="text" placeholder="Enter username" value={formData.username} onChange={handleUserData} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleUserData}/>
              <Form.Text className="text-muted">
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" value={formData.password} onChange={handleUserData} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Please confirm your password</Form.Label>
              <Form.Control name="passwordConfirmation" type="password" placeholder="Password Confirmation" value={formData.passwordConfirmation} onChange={handleUserData}/>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    </>
  )
}

export default Register
