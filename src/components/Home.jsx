import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ProfilePicture from '../assets/profile/my_img.jpg'; // Replace with the actual path to your profile picture

const Home = () => {
  return (
    <div name='home' className='w-full bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-screen-xl mx-auto px-4 sm:px-8 py-20 sm:py-32 flex flex-col justify-center'>
        <div className='text-center mb-4'>
          <img src={ProfilePicture} alt='Profile' className='w-40 h-40 rounded-full mx-auto' />
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>A.Micheal Raj</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
        </div>
        <p className='text-[#8892b0] py-4 max-w-[800px] mx-auto text-justify'>
          As a Full Stack Developer, I bring enthusiasm for both front-end and back-end development, along with a strong foundation in programming languages and frameworks. Eager to contribute to dynamic projects, I'm dedicated to learning and leveraging technology to create user-friendly and efficient web applications. My adaptable mindset and commitment to growth make me a valuable asset to any development team.
        </p>
        <div className='text-center'>
          <button className='text-white group border-2 px-6 py-3 my-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work 
            <span className='group-hover:rotate-90 ml-3'>
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
