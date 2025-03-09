import React from 'react';
import { portfolioImgs } from '@/constants';
import Image from 'next/image';
import Button from './Button';

const ShortPortfolio = () => {
  return (
    <section
      id='#portfolio'
      className='relative w-full flex flex-col justify-center lg:gap-20 gap-5  items-center mx-auto mt-6 pb-10'
    >
      <div className='flex absolute top-0 left-0 w-full h-[1px] bg-gray-600' />
      <div className='w-full relative z-10 h-full flex md:mt-30 mt-20 flex-col justify-center max-w-[80%] lg:h-full'>
        <h2 className='lg:text-6xl md:text-5xl md:mb-10 mb-5 text-3xl font-bold text-[#fff] md:text-left text-center w-full'>
          My Work
        </h2>
        <p className='lg:text-xl md:text-lg text-[#fff] text-left text-base w-full'>
          Explore a collection of my projects, where creativity meets
          functionality. From stunning digital art to interactive web
          applications, each piece showcases my passion for design, development,
          and innovation.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {portfolioImgs.map((img, index) => (
            <div
              key={index}
              className='relative w-full h-[300px] rounded-lg overflow-hidden'
            >
              <Image
                src={img.src}
                alt={img.alt}
                layout='fill'
                objectFit='cover'
              />
            </div>
          ))}
        </div>
        <div
          className='flex mx-auto gap-5 justify-center p-[3px] rounded-xl items-center
    bg-gradient-to-r from-[#1f3e9d] to-[#f52b8f] text-white uppercase text-sm
    bg-[length:200%_200%] animate-[bg-move_3s_infinite_linear] mt-10'
        >
          <Button
            text='View More'
            url='/portfolio'
            className='md:px-8 md:py-3'
          />
        </div>
      </div>
    </section>
  );
};

export default ShortPortfolio;
