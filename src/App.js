import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Navbar from './components/Navbar'
import ShopScreen from './screens/ShopScreen'
import ProductPage from './screens/ProductPage'
import Login from './screens/Login'
import Signup from './screens/Signup'
import AddProduct from './screens/AddProduct'
import CartScreen from './screens/CartScreen'
function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>} />
        <Route exact path="/shop" element={<ShopScreen/>} />
        <Route exact path="/productPage/:id" element={<ProductPage/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/addProduct" element={<AddProduct/>} />
        <Route exact path="/cart" element={<CartScreen/>} />
      </Routes>
    </Router>
  )
}

export default App