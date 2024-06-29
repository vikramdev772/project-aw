import React from 'react'

import Auth from '../components/Auth'
import Navbar from '../components/Navbar'

const Signin = () => {
  return (
    <div>
       <Navbar />
      <div>
        <Auth type="signin"/>
      </div>
    </div>
  )
}

export default Signin
