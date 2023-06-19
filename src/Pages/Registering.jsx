import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

  const [selectedOption, setSelectedOption] = useState('');
  
  const [techstack, setTechStack] = useState([]);
  

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  }

  const handleTechChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
  
    if (isChecked) {
      setTechStack([...techstack, value]);
    } else {
      setTechStack(techstack.filter((stack) => stack !== value));
    }
  };

  console.log(techstack , selectedOption)
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='font-bold text-4xl mb-10'>Register</h1>

      


      <h1 className='ml-[-266px] mt-4 text-blue-900'>—Tech Role</h1>

      
      <div className='ml-[-186px] mt-4'>
        <label>
          <input
            type="checkbox"
            value="fullstack"
            checked={selectedOption === 'fullstack'}
            onChange={handleOptionChange}
          />
          Full Stack Developer
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="frontend"
              checked={selectedOption === 'frontend'}
              onChange={handleOptionChange}
            />
            Front End Developer
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="ai"
              checked={selectedOption === 'ai'}
              onChange={handleOptionChange}
            />
            AI Engineer
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="devops"
              checked={selectedOption === 'devops'}
              onChange={handleOptionChange}
            />
            DevOps
          </label>
      </div>
      <h1 className='ml-[-248px] mt-4 text-blue-900'>—Tech Stacks</h1>
      <div className='ml-[-258px] mt-4 '>
        <label>
          <input type="checkbox" value='react' checked={techstack === 'react'} onChange={handleTechChange} />
          React
        </label>
        <br />

        <label>
          <input type="checkbox" value='html' checked={techstack === 'html'} onChange={handleTechChange} />
          Html
        </label>
        <br />

        <label>
          <input type="checkbox" value='css' checked={techstack === 'css'} onChange={handleTechChange} />
          Css
        </label>
        <br />

        <label>
          <input type="checkbox" value='java' checked={techstack === 'java'} onChange={handleTechChange} />
          Java
        </label>
        <br />

        <label>
          <input type="checkbox" value='JavaScript' checked={techstack === 'JavaScript'} onChange={handleTechChange} />
          JavaScript
        </label>
        <br />

        <label>
          <input type="checkbox" value='mern stack' checked={techstack === 'mern stack'} onChange={handleTechChange} />
          Mern Stack
        </label>
      </div>

      <Link to='/profile' className='bg-sky-400 text-cyan-50 p-[8px] rounded-lg '>SUBMIT</Link>

      
    </div>
  )
}

export default Register