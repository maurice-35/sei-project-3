import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainModal from '../Popups/MainModal'
<<<<<<< HEAD
import ProductCard from '../Popups/ProductCard'
=======
import { Link } from 'react-scroll'
>>>>>>> development



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
<<<<<<< HEAD
        const catProducts = data.filter(animal => animal.typeAnimal.toLowerCase() === 'cat')
        const catTreats = catProducts.filter(food => food.typeProduct.toLowerCase() === 'treat')
        const catMeal = catProducts.filter(food => food.typeProduct.toLowerCase() === 'meal')
        
=======
        const catsProducts = data.filter(cat => cat.typeAnimal.toLowerCase() === 'cat')
        const catTreat = catsProducts.filter(food => food.typeProduct.toLowerCase() === 'treat')
        const catMeal = catsProducts.filter(food => food.typeProduct.toLowerCase() === 'meal')

>>>>>>> development
        //* Set products to state
        setProducts(data)
        setTreats(catTreats)
        setMeal(catMeal)
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
        />)}

      <h1 id="top-page" className="dog-title">Cats Stuff</h1>
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
          <img src="https://res.cloudinary.com/doe5zwesw/image/upload/v1625585104/cats_nhqogf.jpg" alt="Cat Food" />
        </div>
<<<<<<< HEAD

        <div className="dog-meal">
=======
        {/* <h2 className="cat-title">Meals</h2> */}
        <div id="mealspage" className="dog-meal">
>>>>>>> development
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
        <div id="treatspage" className="dog-meal">
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