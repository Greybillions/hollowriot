import React from 'react';
import { portfolioImgs2 } from '@/constants';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[90vw] mt-10'>
      {portfolioImgs2.map((img, index) => (
        <div
          key={index}
          className='relative w-full h-auto rounded-lg overflow-hidden'
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={500}
            height={700}
            objectFit='center'
          />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
