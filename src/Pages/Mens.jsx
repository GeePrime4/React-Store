import React from 'react'
import Brands from '../Components/Brands'
import FetchMensClothes from '../Components/FetchMensClothes'
import MensList from '../Components/MensList'

function Mens() {
  return (
    <div>
      <MensList />
      <Brands />
      <FetchMensClothes />
    </div>
  )
}

export default Mens
