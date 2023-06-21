import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Registering'
import LandingPage from './Components/LandingPage'
import Profile from './Pages/Profile'
import { RegisterContext } from './Context/RegisterContext'
// Users

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [image , setImage] = useState(null)
  const [name, setName] = useState('')

  return (
    <div className='font-poppins'>
      <RegisterContext.Provider value={{image , selectedOption , name , setImage , setName , setSelectedOption}}>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </RegisterContext.Provider>
    </div>
  )
}

export default App
