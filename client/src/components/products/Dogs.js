import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Dogs = () => {

  //* Dog Products 
  const [meal, setMeal] = useState([])
  const [treats, setTreats] = useState([])

  //* Fetch Dog Products lol
  useEffect(() => {
    const getData = async () => {
      try {
        //* Fetching Data
        const { data } = await axios.get('/api/products')

        //* Grabbing all Dog products
        const dogProducts = data.filter(animal => animal.typeAnimal === 'dog')

        //* Filter to get treats and save to new array
        const dogTreats = dogProducts.filter(food => food.typeProduct === 'treat')

        //* Filter to get meals and save to new array
        const dogMeal = dogProducts.filter(food => food.typeProduct === 'meal')

        setTreats(dogTreats)
        setMeal(dogMeal)
      } catch (err) {
        console.log(err)
      }
    }
    getData()

  }, [])

  console.log(meal)
  console.log(treats)

  return (
    <>
      <h1 className="dog-title">Dogs Stuff</h1>
      
      <div className="dog-wrapper">
        <div className="dog-meal">
          {meal.map(food =>
            <div key={food._id} className="dog-card">
              <img src={food.image} alt={food.name} />
              <div className="dog-card-body">
                <div className="dog-card-header">
                  <h3>{food.name}</h3>
                </div>
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

export default Dogs


{/* <>
      <h1>Dogs Stuff</h1>
      <div className="dog-wrapper">
        <div className="main-dog">
          {meal.map(food =>
            <Card key={food._id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={food.image} />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>
                  {food.shortDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </> */}

// <Container >
//     <Row className="justify-content-center">
//       {meal.map(food =>
//         <Card key={food._id} style={{ width: '18rem' }} className="m-3">
//           <Card.Img variant="top" src={food.image} />
//           <Card.Body>
//             <Card.Title>{food.name}</Card.Title>
//             <Card.Text>
//               {food.shortDescription}
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>
//       )}
//     </Row>
//   </Container>