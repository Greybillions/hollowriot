import BackButton from '@/components/BackBtn';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
      <div
        className={`lg:h-[35vh] md:h-[30vh] h-[20vh] w-full flex flex-col justify-center items-center bg-[url('/bgImg.jpg')] bg-cover bg-center bg-no-repeat`}
      >
        <h2 className='lg:text-6xl md:text-5xl text-center text-3xl font-bold text-[#fff]'>
          #My Work
        </h2>
      </div>
      <div className='flex flex-col justify-center items-start w-full max-w-[80vw] md:my-10 my-5'>
        <BackButton className='mt-5' />
      </div>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default page;
