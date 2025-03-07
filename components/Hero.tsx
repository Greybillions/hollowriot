import Image from 'next/image';
import React from 'react';
import heroImg from '@/public/heroImg.png';
import { bgNotes } from '@/constants';

const Hero = () => {
  return (
    <section className='w-full flex flex-col lg:flex-row-reverse justify-center lg:gap-20 gap-5  items-center max-w-[80%] mx-auto lg:h-screen relative h-full'>
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

      <div className='flex relative z-10 flex-col gap-5 text-center items-start'>
        <h1 className='md:text-7xl text-5xl font-bold text-white'>
          Digital Artist
        </h1>
        <p className='text-xl text-white'>
          Creating unique and captivating art.
        </p>
      </div>
      {/* Background Circle */}
      <div className='md:w-40 md:h-40 w-30 h-30 absolute bottom-0 right-45 rounded-full bg-gradient-to-r from-[#162f7a] to-[#f52b8f] opacity-50 blur-md' />
    </section>
  );
};

export default Hero;
