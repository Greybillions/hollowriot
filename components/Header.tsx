'use client';

import { headerData } from '@/constants';
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import Button from './Button';
import { BsTwitterX } from 'react-icons/bs';
import { x } from '@/constants';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex md:px-4 px-2 md:py-8 py-4 justify-between items-center w-full border border-solid border-gray-600 rounded-3xl md:mt-10 mt-5 max-w-[80%] mx-auto relative'>
      {/* Logo */}
      <Button
        text='Hollow Riot'
        className='lg:w-full bg-transparent z-10 uppercase w-full'
        url='/'
        target='_self'
      />

      {/* Background Circle */}
      <div className='w-40 h-40 absolute top-0 left-45 rounded-full bg-gradient-to-r from-[#162f7a] to-[#f52b8f] bg-[length:150%_150%] animate-[bg-move_4s_infinite_linear] opacity-50 blur-md' />

      {/* Desktop Navigation */}
      <div className='lg:flex hidden relative z-10 justify-center w-full items-center'>
        {headerData.map((header) => (
          <Button
            text={header.head}
            key={header.id}
            className='uppercase bg-transparent hover:text-[#7c80d8]'
            url={header.url}
          />
        ))}
      </div>

      {/* Discord Button */}
      <div className='lg:flex hidden justify-end w-full items-center'>
        <motion.div whileHover={{ rotate: 360, transition: { duration: 0.7 } }}>
          <BsTwitterX className='text-2xl text-white' />
        </motion.div>
        <Button
          text='Twitter'
          target='_blank'
          className='uppercase bg-transparent hover:text-[#7c80d8]'
          url={x}
        ></Button>
      </div>

      {/* Mobile Menu Button */}
      <Button
        onClick={() => setMenuOpen(!menuOpen)}
        className='bg-transparent relative p-2 z-30'
      >
        {menuOpen ? (
          <CgClose className='text-2xl block lg:hidden text-white' />
        ) : (
          <CgMenuRightAlt className='text-2xl block lg:hidden text-white' />
        )}
      </Button>

      {/* Sliding Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='fixed top-0 right-0 h-screen w-3/4 bg-gray-900 text-white shadow-lg flex flex-col items-center justify-center gap-6 z-20'
          >
            {headerData.map((header) => (
              <Button
                text={header.head}
                key={header.id}
                className='uppercase bg-transparent hover:text-[#7c80d8] '
                url={header.url}
                onClick={() => setMenuOpen(false)}
              />
            ))}
            {/* Discord Button */}
            <div className='lg:hidden flex justify-center w-full items-center'>
              <motion.div
                whileHover={{ rotate: 360, transition: { duration: 0.7 } }}
              >
                <BsTwitterX className='text-2xl text-white' />
              </motion.div>
              <Button
                text='Twitter'
                className='uppercase bg-transparent hover:text-[#7c80d8]'
                url={x}
                target='_blank'
              ></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
