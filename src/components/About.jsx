import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full pb-8'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-4 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hii. I'm Micheal Raj, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <div className='text-2xl md:text-2xl mt-4'>
              <h2 className='text-xl font-semibold mb-2'>As a Passionate Full Stack Web Developer,</h2>
              <p>
                I combine creativity, problem-solving, and technical expertise to craft dynamic web applications.
              </p>
              <p>
                With a strong foundation in both front-end and back-end development, I thrive on transforming ideas into functional and user-centric digital experiences.
              </p>
              <p>
                I can help you ensure that your web applications work smoothly across different browsers and devices by suggesting techniques for handling compatibility issues.
              </p>
              <p>
                What would you do if you had a software expert available at your fingertips?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
