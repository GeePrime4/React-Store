import React, { useState } from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import Preview from '../Components/Preview';
function Design() {
  // const [times, setTimes] = useState(0);

  return (
      <div>
        <Nav />
        <Outlet />
        <Footer />
      </div>
  )    
}

export default Design
