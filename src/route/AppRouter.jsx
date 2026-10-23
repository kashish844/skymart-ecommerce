import React from 'react'
import { Route, Routes } from 'react-router'
import FrontPage from '../Components/FrontPage'
import Register from '../Components/Register'
import Home from '../pages/Home'
import About from '../pages/About' 
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetail from '../pages/ProductDetail'


const Approuter = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<FrontPage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/products' element={<Shop/>} />
            {/* <Route path='/cart' element={<Cart/>} /> */}
            <Route path='/details/:id' element={<ProductDetail/>} />
        </Routes>
    </div>
  )
}

export default Approuter