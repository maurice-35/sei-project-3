import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../auth/helpers/auth'


const Profile = () => {
  const [pet, setPet] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/profile/pets', {
        headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
      })
      setPet(data) 
    }
    getData()
  }, [])
  console.log('my pet', pet)
 
  return (
    <div>
      <h1>Your personal pet profile</h1>
      {pet.map(myPet => {
        return <div key={myPet._id}>
          <h1 className="animate__animated animate__flipInX" >Pet name - <span>{myPet.name}</span></h1>
          <p>Gender - <span>{myPet.gender}</span></p>
          <p>age - <span>{myPet.age}</span></p>
          <p>Breed - <span>{myPet.breed}</span></p>
        </div>
      })}
      
    </div>
  )
}

export default Profile