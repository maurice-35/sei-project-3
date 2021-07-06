import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'




const Cats = () => {
  const [cat, setCats] = useState([])
  // const [hasError, setHasError] = useState(false)
  // const [show, setShow] = useState(false)


  //* Fetch catProducts from DB.
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products')
        const catsProducts = data.filter(cat => cat.typeAnimal === 'cat')
        console.log(catsProducts)
        setCats(catsProducts)
      } catch (err) {
        // setHasError(true)
        console.log(err)

      }
    }
    getData()
  }, [])

  console.log(cat)

  // //? Select cat
  // const handleChange = e => {
  //   const userInput = e.target.value
  //   const filteredArray = catsProducts.filter(prod => userInput === prod.typeAnimal)
  //   if (userInput === 'all') {
  //     setAnimalType(catsProducts)
  //   } else {
  //     setAnimalType(filteredArray)
  //   }


  return (

    <section className="section">
      <div className="container">
        {cat.map(food =>
          <div key={food._id} className="cat-card">
            <img src={food.image} alt={food.name} />
            <div className="cat-card-body">
              <div className="cat-card-header">
                <h3>{food.name}</h3>
              </div>
              <hr />
              <div className="cat-card-description">
                <p>{food.shortDescription}</p>
                <p>{food.decsription}</p>
                <p>{food.age}</p>
              </div>
            </div>
            <footer className="cat-card-footer">
              <i className="fas fa-paw" id={food._id}></i>
            </footer>
          </div>
        )}
      </div>
    </section>
  )
}
export default Cats