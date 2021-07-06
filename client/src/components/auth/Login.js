/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


const Login = () => {
  const history = useHistory()
  const [errors, setError] = useState(false)
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newLoginData = { ...loginData, [event.target.name]: event.target.value }
    setloginData(newLoginData)
  }
  // console.log('newLoginData', newLoginData)
  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
    console.log('TOKEN', token)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', loginData)
      console.log(data)
      console.log(loginData)
      setTokenToLocalStorage(data.token)
      history.push('/products')
    } catch (err) {
      setError(true)
    }
  }

  // const handleFocus = () => {
  //   setError(false)
  // }



  // <section>
  //   <div className="container">
  //     <div className="columns">
  //       <form className="box column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
  //         <div className="field">
  //           <label className="label">Email</label>
  //           <div className="control">
  //             <input
  //               className={`input ${error ? 'is-danger' : ''}`}
  //               placeholder="Email"
  //               onChange={handleChange}
  //               name="email"
  //              value={loginData.email}
  //               onFocus={handleFocus}
  //             />
  //           </div>
  //         </div>
  //         <div className="field">
  //           <label className="label">Password</label>
  //           <div className="control">
  //             <input
  //               type="password"
  //               className={`input ${error ? 'is-danger' : ''}`}
  //               placeholder="Password"
  //               onChange={handleChange}
  //               name="password"
  //               value={loginData.password}
  //               onFocus={handleFocus}
  //             />
  //           </div>
  //           {error && <p className="help is-danger">Sorry, username or password not correct!</p>}
  //         </div>
  //         <div className="field"><br></br>
  //           <button type="submit" className="button is-fullwidth is-warning">LogIn!</button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // </section>

  return (
    <section>

      <h1 className="login">Login To See More!</h1>
      <Container fluid="md" className="center-height animate__slideOutDown">
        <Row className="justify-content-md-center">
          <Col >
            <Form onSubmit={handleSubmit} className='login-form'>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value={loginData.email} onChange={handleChange} />
                {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" value={loginData.password} onChange={handleChange} />
                {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
              </Form.Group>
              <button type="submit" className="button is-fullwidth is-warning">LogIn!</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login