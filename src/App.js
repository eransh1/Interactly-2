import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App