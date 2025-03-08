import React from 'react';
import { servicesData } from '@/constants';

const Services = () => {
  return (
    <section className='relative w-full flex flex-col justify-center lg:gap-20 gap-5  items-center mx-auto mt-6 pb-10'>
      <div className='flex absolute top-0 left-0 w-full h-[1px] bg-gray-600' />
      <div className='w-full h-full flex md:mt-30 mt-20 flex-col justify-center max-w-[80%] lg:h-full'>
        <h2 className='lg:text-6xl md:text-5xl text-3xl text-center w-full font-semibold text-white'>
          My Services
        </h2>
        <div className='flex flex-col justify-center h-full lg:gap-18 md:gap-15 gap-8 text-center items-start md:mt-20 mt-10 '>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className='flex md:flex-row flex-col justify-center h-full lg:gap-18 md:gap-15 gap-5 text-center items-center border border-gray-600 p-5 rounded-xl'
            >
              {service.icon && (
                <div className='text-5xl text-white text-center'>
                  {service.icon}
                </div>
              )}
              <div className='flex flex-col md:text-left justify-center h-full  gap-5 text-center items-start'>
                <h3 className='md:text-4xl text-2xl text-center md:text-left w-full font-semibold text-white'>
                  {service.title}
                </h3>
                <p className='text-lg text-white'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
