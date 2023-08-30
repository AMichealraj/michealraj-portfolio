import React from 'react';
import project1 from '../assets/projects/object_detection.jpg';
import project2 from '../assets/projects/customer-care-registry.jpg';
import project3 from '../assets/projects/Student_Management_System.jpg';
import project4 from '../assets/projects/RPS/thumbnail464x348.gif';
import project5 from '../assets/projects/Weather-App.jpg';


const Project = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f] py-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
          Projects</p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Grid Item */}
          
          
          {/* project1 */}
          <div style={{ backgroundImage: `url(${project1})` }} 
      className='shadow-lg shadow-[#040c16] group container rounded-md 
      flex justify-center text-center items-center mx-auto content-div'>
      {/* Hover effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <span className="text-2xl font bold text-white tracking-wider">
          Product identification and text recognition for blind people
        </span>
        <div className='pt-8 text-center'>
          <a href="https://github.com/AMichealraj/product-identification-and-text-recognition.git" target="_blank" rel="noopener noreferrer">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
          </a>
          
        </div>
      </div>
    </div>


            {/* project2 */}
            <div style={{
            backgroundImage: `url(${project2})`
          }} 
          className='shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div'>
           
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                  Customer Care Registry
              </span>
              <div className='pt-8 text-center'> 
              <a href="https://github.com/AMichealraj/customer-care-registry.git" target="_blank" rel="noopener noreferrer">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
            </a>
              </div>
            </div>
          </div>

          {/* project3 */}
          <div style={{
            backgroundImage: `url(${project3})`
          }} 
          className='shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div'>
           
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                  Student Management and Information System
              </span>
              <div className='pt-8 text-center'>        
              <a href="https://github.com/AMichealraj/Student-Information-Management-Information-System.git" target="_blank" rel="noopener noreferrer">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
            </a>
              </div>
            </div>
          </div>

            {/* project4 */}

            <div style={{
            backgroundImage: `url(${project4})`
          }} 
          className='shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div'>
           
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                  Rock-paper-Scissors Game
              </span>
              <div className='pt-8 text-center'>
                
              <a href="https://github.com/AMichealraj/Rock-Paper-Scissor.git" target="_blank" rel="noopener noreferrer">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
            </a>
            <a href="https://stone-paper-scissors-game-mine.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
          </a>
              </div>
            </div>
          </div>

          {/* project5 */}
          <div style={{
            backgroundImage: `url(${project5})`
          }} 
          className='shadow-lg shadow-[#040c16] group container rounded-md 
          flex justify-center text-center items-center mx-auto content-div'>
           
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font bold text-white tracking-wider">
                  Weather App
              </span>
              <div className='pt-8 text-center'>
                
              <a href="https://github.com/AMichealraj/weather-app.git" target="_blank" rel="noopener noreferrer">
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
            </a>
            <a href="https://check-climate.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
          </a>
              </div>
            </div>
          </div>

         
          
        </div>
      </div>
    </div>
  );
};

export default Project;
