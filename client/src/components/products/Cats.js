import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../Popups/ProductCard'
import MainModal from '../Popups/MainModal'



const Cats = () => {

  //* Cat Products 
  const [meal, setMeal] = useState([])
  const [treats, setTreats] = useState([])
  const [products, setProducts] = useState([])
  const [modalInfo, setModalInfo] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)


  //* Fetch catProducts from DB.
  useEffect(() => {
    const getData = async () => {
      try {
        //* Fetching data
        const { data } = await axios.get('/api/products')

        //* Grabbing all cat products
        const catsProducts = data.filter(cat => cat.typeAnimal.toLowerCase() === 'cat')
        const catTreat = catsProducts.filter(food => food.typeProduct.toLowerCase() === 'treat')
        const catMeal = catsProducts.filter(food => food.typeProduct.toLowerCase() === 'meal')
        
        //* Set products to state
        setTreats(catTreat)
        setMeal(catMeal)
        setProducts(catsProducts)
      } catch (err) {
        console.log(err)

      }
    }
    getData()

  }, [])

  //* Open Modal
  const openModal = e => {
    const userInput = e.target.id
    const filterArray = products.filter(prod => userInput === prod._id)
    setModalInfo(filterArray)
    setShow(true)
  }


  return (
    <>

      {/* Product Info Modal */}

      {modalInfo.map(info =>
        <MainModal
          show={show}
          handleClose={handleClose}
          key={info._id}
          name={info.name}
          image={info.image}
          shortDescription={info.shortDescription}
          description={info.description}
          ingredient={info.ingredient}
          storage={info.storage}
          id={info._id}
          price={info.price}
        // localStorageItem={localStorageItem}
        // setLocalStorageItem={setLocalStorageItem}
        />)}

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
            <ProductCard
              key={food._id}
              name={food.name}
              image={food.image}
              id={food._id}
              shortDescription={food.shortDescription}
              openModal={openModal}
            />
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

            <ProductCard
              key={food._id}
              name={food.name}
              image={food.image}
              id={food._id}
              shortDescription={food.shortDescription}
              openModal={openModal}
            />

          )}
        </div>
      </div>
    </>
  )

}
export default Cats