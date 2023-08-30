import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file
import { FiCopy } from 'react-icons/fi'; // Import the copied icon

const copyToClipboard = (text) => {
  const textField = document.createElement('textarea');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
};

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = 'contactmewithmichealraj@gmail.com';

  const handleCopyClick = () => {
    copyToClipboard(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/d20ff5f3-354c-4aa9-88fb-91646a8948e3" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4' style={{ whiteSpace: 'nowrap' }}>
            Submit the form below or shoot me an email -
            <span
              className={`email-on-mobile ${isCopied ? 'copied' : ''}`}
              onClick={handleCopyClick}
            >
              {email} {isCopied && <FiCopy className="ml-2" />} {isCopied && 'Copied!'}
            </span>
          </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
