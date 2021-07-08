import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from './auth/helpers/auth'

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
      {pet.map(myPet => {
        return   <div key={myPet.id}>
          <h1>{myPet.name}</h1>
          <p>{myPet.gender}</p>
          <p>{myPet.age}</p>
          <p>{myPet.breed}</p>
        </div>
      })}
      
    </div>
  )
}

export default Profile