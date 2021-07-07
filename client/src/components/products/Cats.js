import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Cats = () => {

  //* Cat Products 
  const [meal, setMeal] = useState([])
  const [treats, setTreats] = useState([])


  //* Fetch catProducts from DB.
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/products')
        const catsProducts = data.filter(cat => cat.typeAnimal.toLowerCase() === 'cat')
        console.log(catsProducts)
        // setCats(catsProducts)
        const catTreat = catsProducts.filter(food => food.typeProduct.toLowerCase() === 'treats')
        const catMeal = catsProducts.filter(food => food.typeProduct.toLowerCase() === 'meal')
        setTreats(catTreat)
        setMeal(catMeal)
        console.log(catTreat)
        console.log(catMeal)
      } catch (err) {
        console.log(err)

      }
    }
    getData()

  }, [])


  return (
    <>
      <h1 className="dog-title">Cats Stuff</h1>
      <div className="product-options">
        <button>Treats <i className="fas fa-bone"></i></button>
        <button>Meals <i className="fas fa-drumstick-bite"></i></button>
      </div>
      <div className="dog-wrapper">
        <div className="meals-hero">
          <div className="hero-text">
            <h3>Check out our curated selection of seasonal meals...</h3>
          </div>
          <img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1625585104/cats_nhqogf.jpg" alt="Cat Food" />
        </div>
        {/* <h2 className="cat-title">Meals</h2> */}
        <div className="dog-meal">
          {meal.map(food =>
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
        {/* Treats */}
        <div className="meals-hero">
          <div className="hero-text">
            <h3>The best of the best treaties for your cat!</h3>
          </div>
          <img id="img-two" src="https://res.cloudinary.com/doe5zwesw/image/upload/v1625261422/Best-Treats_cmfixd.jpg" alt="Cat Treats" />
        </div>
        {/* <h2 className="cat-title">Treats</h2> */}
        <div className="dog-meal">
          {treats.map(food =>
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
export default Cats