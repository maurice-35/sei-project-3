import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainModal from '../Popups/MainModal'
import ProductCard from '../Popups/ProductCard'
import { Link } from 'react-scroll'

const Dogs = () => {

  //* Smooth Scroll Properties

  //* Dog Products
  const [products, setProducts] = useState([])
  const [meal, setMeal] = useState([])
  const [treats, setTreats] = useState([])
  const [modalInfo, setModalInfo] = useState([])
  const [show, setShow] = useState(false)
  // const [localStorageItem, setLocalStorageItem] = useState([])
  const handleClose = () => setShow(false)


  //* Fetch Dog Products lol
  useEffect(() => {
    const getData = async () => {
      try {
        //* Fetching Data
        const { data } = await axios.get('/api/products')

        //* Grabbing all Dog products
        const dogProducts = data.filter(animal => animal.typeAnimal.toLowerCase() === 'dog')

        //* Filter to get treats and save to new array
        const dogTreats = dogProducts.filter(food => food.typeProduct.toLowerCase() === 'treat')

        //* Filter to get meals and save to new array
        const dogMeal = dogProducts.filter(food => food.typeProduct.toLowerCase() === 'meal')

        //* Set products to state
        setProducts(data)
        setTreats(dogTreats)
        setMeal(dogMeal)
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
          price={info.price}
          id={info._id}
        // localStorageItem={localStorageItem}
        // setLocalStorageItem={setLocalStorageItem}
        />)}

      <h1 id="top-page" className="dog-title">Dogs Stuff</h1>
      <div className="product-options">
        <Link
          activeClass="active"
          to="treatspage"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
        >
          <button>Treats <i className="fas fa-bone"></i></button>
        </Link>
        <Link
          activeClass="active"
          to="mealspage"
          spy={true}
          smooth={true}
          offset={0}
          duration={300}
        >
          <button>Meals <i className="fas fa-drumstick-bite"></i></button>
        </Link>
      </div>
      <div className="dog-wrapper">
        <div className="meals-hero">
          <div className="hero-text">
            <h3>Check out our curated selection of seasonal meals...</h3>
          </div>
          <img src="https://res.cloudinary.com/dlj1sbbtb/image/upload/v1625582635/dog-2210717_cnz3vo.jpg" alt="Dog Food" />
        </div>
        {/* <h2 className="dog-title">Meals</h2> */}
        <div id="mealspage" className="dog-meal">
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
            <h3>The best of the best treaties for your doggo!</h3>
          </div>
          <img id="img-two" src="https://res.cloudinary.com/dlj1sbbtb/image/upload/v1625580751/puppy-4484296_1920_tj3rqw.jpg" alt="Dog Treats" />
        </div>
        <div id="treatspage" className="toTop">
          <Link
            activeClass="active"
            to="top-page"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
          >
            <i className="fas fa-arrow-circle-up"></i>
          </Link>
        </div>
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

export default Dogs