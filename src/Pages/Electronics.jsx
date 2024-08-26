import React from 'react'
import Brands from '../Components/Brands'
import {FetchElectronics} from '../Components/FetchElectronics'
import Banner from '../Components/Banner'
import ElectronicsList from '../Components/ElectronicsList'

function Electronics() {
  return (
    
    <div>         
      <ElectronicsList />
      <Brands />
      <FetchElectronics/>
    </div>
  )
}

export default Electronics
