import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { RegisterContext } from '../Context/RegisterContext';

const Register = () => {

  const {setImage , setSelectedOption , setName} = useContext(RegisterContext)

  

  const handleNameChange = (e) => {
    const trimmedValue = e.target.value.trim();
    setName(trimmedValue);
    console.log(trimmedValue);
  }

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  

  
  

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='font-bold text-4xl mb-10'>Register</h1>

          <input type='text' placeholder='name...' className='border-cyan-400 border-2 w-[290px] pl-2 rounded-md mb-2' onChange={handleNameChange}></input>
          <input type='file' onChange={handleImageChange}></input>

          


          <h1 className='mt-4 text-blue-900'>—Tech Role</h1>

          
          <div className='mt-4'>
            <label>
              <input
                type="checkbox"
                value="fullstack"
                onChange={handleOptionChange}
              />
              Full Stack Developer
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  value="frontend"
                  onChange={handleOptionChange}
                />
                Front End Developer
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  value="ai"
                  onChange={handleOptionChange}
                />
                AI Engineer
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  value="devops"
                  onChange={handleOptionChange}
                />
                DevOps
              </label>
          </div>
      <Link to='/profile' className='bg-sky-400 text-cyan-50 p-[8px] rounded-lg mt-10'>SUBMIT</Link>

      
    </div>
  )
}

export default Register