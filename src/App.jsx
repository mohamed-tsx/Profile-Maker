import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Registering'
import LandingPage from './Components/LandingPage'
// Users

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </>
  )
}

export default App
