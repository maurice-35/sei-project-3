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

  const [errors, setErrors] = useState({
    username: {  },
    email: {  },
    password: {  },
    passwordConfirmation: {  },
  })

  //*Get userInput
  const handleUserData = e => {
    const getUserData = { ...formData, [e.target.name]: e.target.value }
    console.log('handleUsers->', getUserData)
    // const newErrors = { ...errors, [e.target.name]: '' }
    setFormData(getUserData)
    // setErrors(newErrors)
  }

  

  const submitForm = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/register', formData)
      history.push('/login')
    } catch (err) {
      console.log(err)
      const newErrors = err.response.data.errors
      // const errorsTwo = { ...errors, [newErrors.username]: newErrors.username.message  }
      console.log(newErrors.email)
      setErrors(newErrors)
      // console.log(err.response.data.errors.passwordConfirmation.message)
    }
  }

  console.log(errors)

  // console.log(formData)
  // console.log(errors.passwordConfirmation.messaage)


  return (
    <>
      <h1 className="text-center">Register With Us!</h1>
      <Container fluid="md" className="center-height">
        <Row className="justify-content-md-center">
          <Form onSubmit={submitForm}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control name="username" type="text" placeholder="Enter username" value={formData.username} onChange={handleUserData} />
              {/* {errors.username.message && <Form.Text className="text-muted">{errors.username.message}</Form.Text>} */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleUserData} />
              {/* {errors.email.message && <Form.Text className="text-muted">{errors.username.message}</Form.Text>} */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" value={formData.password} onChange={handleUserData} />
              {/* {errors.password.message && <Form.Text className="text-muted">{errors.username.message}</Form.Text>} */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Please confirm your password</Form.Label>
              <Form.Control name="passwordConfirmation" type="password" placeholder="Password Confirmation" value={formData.passwordConfirmation} onChange={handleUserData} />
              {/* { errors.passwordConfirmation.message ? <Form.Text className="text-muted">{errors.username.message}</Form.Text> : false } */}
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    </>
  )
}

export default Register
