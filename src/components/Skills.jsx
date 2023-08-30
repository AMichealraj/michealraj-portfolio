import React from 'react';
import HTMl from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactJs from '../assets/react.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/java.png';
import Bootstrap from '../assets/bootstrap.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300 py-16'> {/* Add padding top and bottom */}
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>// These are the technologies I've worked</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                      <img className='w-20 mx-auto' src={HTMl} alt="HTML icon" />  
                      <p className='my-4'>HTML</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                      <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />  
                      <p className='my-4'>CSS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                      <img className='w-20 mx-auto' src={JavaScript} alt="Js icon" />  
                      <p className='my-4'>JAVASCRIPT</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                      <img className='w-20 mx-auto' src={ReactJs} alt="Reactjs icon" />  
                      <p className='my-4'>REACT</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                      <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />  
                      <p className='my-4'>BOOTSTRAP</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                      <img className='w-20 mx-auto' src={Java} alt="Java icon" />  
                      <p className='my-4'>JAVA</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                      <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />  
                      <p className='my-4'>TAILWIND</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                      <img className='w-20 mx-auto' src={Github} alt="GITHUB icon" />  
                      <p className='my-4'>GITHUB</p>
                  </div>
            </div>
      </div>
      
      </div>
      
  )
}

export default Skills