import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products')
        setProduct(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
    console.log('my products', product)

  }, [])
  return (
    <div>
      <h1>Arjun got the tricks</h1>
    </div>
  )
}

export default App

