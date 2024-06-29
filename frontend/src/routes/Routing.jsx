import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import Landing from "../components/Landing"
import Home from "../components/Home"

const Routing = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/signin" exact element={<Signin />}/>
        <Route path="/signup" exact element={<Signup />}/>
        <Route path="/home" exact element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing