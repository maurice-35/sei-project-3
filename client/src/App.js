import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About.js'
import Login from './components/auth/Login.js'
import Register from './components/auth/Register.js'
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import ProductLogin from './components/products/ProductLogin.js'
import ProductNoLogin from './components/products/ProductNoLogin.js'
import Profile from './components/Profile.js'


const App = () => {

  

  
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/products/nologin" component={ProductNoLogin}/>
        <Route path="/products/login" component={ProductLogin}/>
        <Route path="/profile" component={Profile} /> 
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

