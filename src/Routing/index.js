import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../components/Products/Products'
import Product from '../components/Products/Product'
import Cart from '../components/Cart'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}

export default Routing