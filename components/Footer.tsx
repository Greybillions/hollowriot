import React from 'react';

const Footer = () => {
  return (
    <footer className='flex relative justify-center items-center h-20 w-full my-5 text-[#fff]'>
      <div className='flex absolute top-0 left-0 w-full h-[1px] bg-gray-600' />

      <p>{new Date().getFullYear()} Hollow Riot. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
