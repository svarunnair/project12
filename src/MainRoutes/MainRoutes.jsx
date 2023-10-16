import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Cart from '../components/Cart'
import Payment from '../components/Payment'

function MainRoutes() {
  return (
    <div>
      <Routes>

        <Route path='/'element={<Home/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>





      </Routes>

     
    
    </div>
  )
}

export default MainRoutes