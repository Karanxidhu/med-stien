import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>} />
      </Routes>
    </Router>
  )
}

export default App