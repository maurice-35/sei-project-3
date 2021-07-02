import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products')
        setProducts(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
    console.log('my products', products)

  }, [])
  return (
    <div>
      <h1>Arjun got the tricks</h1>
    </div>
  )
}

export default App

