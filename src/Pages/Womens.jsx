import React from 'react'
import Brands from '../Components/Brands'
import FetchWomensClothes from '../Components/FetchWomensClothes'
import WomensList from '../Components/WomensList'

function Womens() {
  return (
    <div>
      <WomensList />
      <Brands />
      <FetchWomensClothes />
    </div>
  )
}

export default Womens
