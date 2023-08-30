import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaSortUp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiUpArrowAlt } from "react-icons/bi";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import Logo from '../assets/global.gif';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const navBarHeight = 80; // Height of your navigation bar
  const scrollOffset = -navBarHeight;

  const handleClick = () => setNav(!nav);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full h-${navBarHeight}px md:h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300`}>
      <div>
        <img src={Logo} alt='Logo image' style={{ width: '50px' }} />
      </div>

      <ul className='hidden md:flex'>
        <li>
          <Link
            to='home'
            smooth={true}
            offset={scrollOffset}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            offset={scrollOffset}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='skills'
            smooth={true}
            offset={scrollOffset}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to='project'
            smooth={true}
            offset={scrollOffset}
            duration={500}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            offset={scrollOffset}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
     

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>    
      <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} offset={scrollOffset} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} offset={scrollOffset} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} offset={scrollOffset} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="project" smooth={true} offset={scrollOffset} duration={500}>
            Project
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} offset={scrollOffset} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href='https://linkedin.com/in/micheal-raj-7ab596282'
            target='_blank'
            rel='noopener noreferrer'>
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/AMichealraj'
            target='_blank'
            rel='noopener noreferrer'>
            Github <FaGithub size={30} />
                  </a>
            </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4285F4]'>
            <a
            className='flex justify-between items-center w-full text-gray-300'
            href='mailto:contactmewithmichealraj@gmail.com'>
            Mail <HiOutlineMail size={30} />
            </a>
            </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                  <a className='flex justify-between items-center w-full text-gray-300'
                  href={require('../assets/Resume/Micheal Raj.pdf')}
                        download='Resume-Micheal Raj.pdf'>
                  Resume <BsFillPersonLinesFill size={30} />
                  </a>
            </li>
        </ul>
      </div>
      {showScrollToTop && (
        <div className='cursor-pointer fixed bottom-10 right-10 z-50' onClick={handleScrollToTop}>
          <HiOutlineArrowSmUp size={30} />
        </div>
      )}
    </div>
  );
};
export default Navbar;