import React from 'react';
import Button from './Button';
import { BsChatLeftText } from 'react-icons/bs';
import { contactData } from '@/constants';

const Contact = () => {
  return (
    <section
      id='contact'
      className='w-full flex flex-col mt-10 max-w-[80%] mx-auto pb-10 xl:h-[50vh] relative h-full'
    >
      {/* Background Circle */}
      <div className='w-15 h-15 absolute top-0 left-45 rounded-full bg-gradient-to-r from-[#162f7a] to-[#f52b8f] bg-[length:150%_150%] animate-[bg-move_10s_infinite_linear] opacity-50 blur-md' />
      {/* Background Circle */}
      <div className='w-20 h-20 absolute bottom-0 md:left-85 left-0 rounded-full bg-gradient-to-r from-[#162f7a] to-[#f52b8f] bg-[length:150%_150%] animate-[bg-move_6s_infinite_linear] opacity-50 blur-md' />
      {/* Background Circle */}
      <div className='w-20 h-20 absolute top-70 right-30 rounded-full bg-gradient-to-r from-[#162f7a] to-[#f52b8f] bg-[length:150%_150%] animate-[bg-move_4s_infinite_linear] opacity-50 blur-md' />
      {/* Background Circle */}
      <div className='w-25 h-25 absolute bottom-80 md:right-150 right-10  rounded-full bg-gradient-to-r from-[#162f7a] to-[#f52b8f] bg-[length:150%_150%] animate-[bg-move_7s_infinite_linear] opacity-50 blur-md' />
      <h2 className='lg:text-6xl md:text-5xl relative text-3xl md:text-left mt-10 text-center w-full font-bold mb-10 z-10 text-white'>
        Contact Me
      </h2>
      <div className='flex relative z-10 md:flex-row flex-col justify-start h-full lg:gap-10 md:text-left text-center items-center text-wrap md:text-xl text-base'>
        <p>
          Do you have a project to discuss? Get in touch!{' '}
          <BsChatLeftText className='inline-flex ml-2 self-center' />
        </p>
        <Button url='hurtmanriot@gmail.com' text='hurtmanriot@gmail.com' />
      </div>
      <div className='flex justify-center flex-col lg:flex-row items-center gap-10 mt-10'>
        <p className='text-xl'>Reach out to me:</p>
        <div className='flex gap-5'>
          {contactData.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                url={item.url}
                target='_blank'
                rel='noopener noreferrer' //for security reasons
                className='text-white flex items-center mt-2 relative transition-all duration-600 ease-in-out hover:rotate-360'
              >
                <Icon className='text-3xl relative' />
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
