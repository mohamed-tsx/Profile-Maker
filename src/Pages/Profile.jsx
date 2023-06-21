import React, { useContext } from 'react';
import Register from './Registering';
import { RegisterContext } from '../Context/RegisterContext';
// Register

function Profile() {

  
  const {name , image , selectedOption} = useContext(RegisterContext)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='text-center'>
          <h1 className='text-3xl text-center mb-9'>Profile</h1>
          {image && <img src={URL.createObjectURL(image)} 
                className='w-60 rounded-full' />}
          <p>{name}</p>
          <p className='text-xl'>{selectedOption}</p>
      </div>
    
    </div>
  );
}

export default Profile;