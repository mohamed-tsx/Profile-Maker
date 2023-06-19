import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Registering'
import LandingPage from './Components/LandingPage'
import Profile from './Pages/Profile'
// Users

function App() {

  return (
    <div className='font-poppins'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
    </div>
  )
}

export default App
