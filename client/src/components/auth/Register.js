/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { Nav } from 'react-bootstrap'
// import { userConstants } from '../_constants'
// import { toast } from 'react-toastify'
// import { toast } from 'react-toastify'

const Register = () => {
  const history = useHistory()

  //* Form object state
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  // const [newSubmitForm, setNewSubmitForm] = useState([])

  //*Get userInput
  const handleUserData = e => {
    const getUserData = { ...formData, [e.target.name]: e.target.value }
    const newErrors = { ...errors, [e.target.name]: '' }
    setFormData(getUserData)
    setErrors(newErrors)
  }


  //* Submit form as post request to backend
  const submitForm = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/register', formData)
      history.push('/login')
    } catch (err) {
      console.log(err)
      setErrors(err.response.data.errors)
    }

  }



  return (
    <div className="container">
      <section className="registerPage">
        <h1 className="register">Register With Us!</h1>
        <Container fluid="md" className="center-height animate__slideOutDown">
          <Row className="justify-content-md-center">
            <Col >
              <Form onSubmit={submitForm} className='register-form'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control name="username" type="text" placeholder="Enter username" value={formData.username} onChange={handleUserData} />
                  {errors.username && <Form.Text className="text-danger">{errors.username.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleUserData} />
                  {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" value={formData.password} onChange={handleUserData} />
                  {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Please confirm your password</Form.Label>
                  <Form.Control name="passwordConfirmation" type="password" placeholder="Password Confirmation" value={formData.passwordConfirmation} onChange={handleUserData} />
                  {errors.passwordConfirmation && <Form.Text className="text-danger">{errors.passwordConfirmation.message}</Form.Text>}
                </Form.Group>

                <button onClick='My function()' type="submit">Submit</button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Container fluid="md" className="center-height animate__slideOutDown">
          <div className="option">
            <h1 id="option">Or</h1>
          </div>
        </Container>
        <Container fluid="md" className="center-height animate__slideOutDown">
          <div className="login">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Please login instead!</Form.Label>
              <Nav.Link className="text-style-color" eventKey={2} href="/login"> <button className="Log">Login</button></Nav.Link>
            </Form.Group>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Register
