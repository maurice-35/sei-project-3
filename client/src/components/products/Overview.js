import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Overview = () => {
  //* Cat and Dog State
  const [catProducts, setCatProducts] = useState([])
  const [dogProducts, setDogProducts] = useState([])


  //* Fetch Products from DB.
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products')
        console.log('DATA ->', data)

        // displayed data 
        const onDisplay = data.filter(item => item.onDisplay)
        console.log(onDisplay)
        // cat data
        const catItems = onDisplay.filter(animal => animal.typeAnimal.toLowerCase() === 'cat')
        setCatProducts(catItems)

        // dog data
        const dogItems = onDisplay.filter(animal => animal.typeAnimal.toLowerCase() === 'dog')
        setDogProducts(dogItems)

      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('CAT ->', catProducts)
  console.log('DOG ->', dogProducts)


  return (
    <>
      <h1 className="title text-monospace">Our Products</h1>

      <div className="dog-wrapper">
        <div className="meals-hero">
          <div className="hero-overview">
            <h3>FOOD DESIGNED FOR YOUR CAT</h3>
            <p className="text-monospace text-center">
              For the love of cats 🐱
            </p>
          </div>
          <img src="https://www.webbox.co.uk/wp-content/uploads/2021/01/shutterstock_600977711.jpg" alt="Dog Food" />
        </div>
      </div>

      <h3 className="overview-title text-monospace">CATS</h3>

      <div className="dog-wrapper">
        <div className="dog-meal">
          {catProducts.map(food =>
            <div key={food._id} className="dog-card">
              <img src={food.image} alt={food.name} />
              <div className="dog-card-body">
                <div className="dog-card-header">
                  <h3>{food.name}</h3>
                </div>
                <hr />
                <div className="dog-card-description">
                  <p>{food.shortDescription}</p>
                </div>
              </div>
              <footer className="dog-card-footer">
                <i className="fas fa-paw" id={food._id}></i>
              </footer>
            </div>
          )}
        </div>
      </div>


      <div className="dog-wrapper">
        <div className="meals-hero">
          <div className="hero-overview">
            <h3>FOOD DESIGNED FOR YOUR DOG</h3>
            <p className="text-monospace text-center">
              For the love of dogs 🐶
            </p>
          </div>
          <img src="https://canna-pet.com/wp-content/uploads/2019/02/dog-eating-1.jpg" alt="Dog Food" />
        </div>
      </div>

      <h3 className="overview-title text-monospace">DOGS</h3>


      <div className="dog-wrapper">
        <div className="dog-meal">
          {dogProducts.map(food =>
            <div key={food._id} className="dog-card">
              <img src={food.image} alt={food.name} />
              <div className="dog-card-body">
                <div className="dog-card-header">
                  <h3>{food.name}</h3>
                </div>
                <hr />
                <div className="dog-card-description">
                  <p>{food.shortDescription}</p>
                </div>
              </div>
              <footer className="dog-card-footer">
                <i className="fas fa-paw" id={food._id}></i>
              </footer>
            </div>
          )}
        </div>
      </div>


    </>
  )
}

export default Overview
