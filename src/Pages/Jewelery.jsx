import React from 'react'
import Brands from '../Components/Brands'
import FetchJewelery from '../Components/FetchJewelery'
import JeweleryList from '../Components/JeweleryList'

function Jewelery() {
  return (
    <div>
      <JeweleryList />
      <Brands/>
      <FetchJewelery />
    </div>
  )
}

export default Jewelery
