import Image from 'next/image';
import React from 'react';
import heroImg from '@/public/heroImg.png';
import { bgNotes } from '@/constants';
import Button from './Button';

const Hero = () => {
  return (
    <section className='w-full flex flex-col lg:flex-row-reverse justify-center lg:gap-20 gap-5  items-center max-w-[80%] mx-auto pb-10 lg:h-[90vh] relative h-full'>
      <div className='flex relative'>
        <Image
          width={600}
          height={500}
          src={heroImg}
          alt='Hero Image'
          className='mx-auto z-10 relative'
        />

        {/* Background Text */}
        <div className='absolute top-0 left-0 w-full h-full flex flex-wrap gap-1 justify-center items-center opacity-10 text-xl font-bold text-white select-none pointer-events-none'>
          {bgNotes.map((note) => (
            <span
              key={note.id}
              className='relative md:text-xl text-sm w-auto max-w-full text-center px-1'
            >
              {note.text}
            </span>
          ))}
        </div>
      </div>

      <div className='flex relative z-10 flex-col justify-center h-full lg:gap-18 md:gap-15 gap-5 text-center items-start'>
        <h1 className='lg:text-7xl md:text-5xl text-4xl text-center w-full font-bold text-white'>
          Digital Artist
        </h1>
        <p className='text-xl text-white'>
          Creating unique and captivating art.
        </p>
        <div
          className='flex mx-auto gap-5 justify-center p-[3px] rounded-xl items-center
    bg-gradient-to-r from-[#1f3e9d] to-[#f52b8f] text-white uppercase text-sm
    bg-[length:200%_200%] animate-[bg-move_5s_infinite_linear]'
        >
          <Button
            text='View My Work'
            url='/portfolio'
            className='md:px-8 md:py-3 '
          />
        </div>
      </div>

      {/* Background Circle */}
      <div className='md:w-40 md:h-40 w-30 h-30 absolute bottom-0 right-45 rounded-full bg-gradient-to-r from-[#162f7a]  bg-[length:150%_150%] animate-[bg-move_15s_infinite_linear] to-[#f52b8f] opacity-50 blur-md' />
    </section>
  );
};

export default Hero;
