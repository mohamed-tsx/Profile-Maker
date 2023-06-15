import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='font-semibold text-4xl w-6/12 text-center mb-4'>To make a profile for your self Please Register Your Self</h1>
        <Link to='/register' className='bg-sky-400 text-cyan-50 p-3 rounded-lg font-semibold'>REGISTER</Link>
    </div>
  )
}

export default LandingPage