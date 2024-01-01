'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GreenEnergy() {
  const [slideToRight, setSlideToRight] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideClassName, setSlideClassName] = useState(
    'w-full h-full rounded-2xl flex shadow-2xl',
  );

  useEffect(() => {
    if (slideToRight === true) {
      setSlideClassName(
        'slideToRight w-full h-full rounded-2xl flex shadow-2xl',
      );
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setSlideToRight(false);
      }, 3000);
    }
  }, [slideToRight]);
  const router = useRouter();
  return (
    <div className='flex flex-col bg-grid w-screen h-screen bg-gray-100'>
      <div className='flex w-full'>
        <div className='w-full font-extrabold flex px-8 py-12 rounded-md bg-gradient-to-r from-green-500 to-green-700  text-center'>
          <div onClick={() => router.push('/')} className='w-fit h-fit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-10 h-10 text-white hover:text-gray-200 hover:cursor-pointer'
            >
              <path d='M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z' />
              <path
                fill-rule='evenodd'
                d='M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z'
                clip-rule='evenodd'
              />
            </svg>
          </div>
          <p className='text-5xl mx-auto text-gray-200 text-center'>
            What is green energy?
          </p>
        </div>
      </div>
      <div className='w-full h-full p-12'>
        <div className='w-full h-full rounded-2xl flex overflow-hidden'>
          {currentSlide === 1 && (
            <div className={slideClassName}>
              <img
                className='rounded-l-2xl w-1/2 h-full object-cover'
                src='https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
              <div className='flex p-8 relative w-full h-full bg-green-100 rounded-r-2xl'>
                <div className='mx-auto'>
                  <p className='text-4xl text-center font-extrabold'>
                    <span className='bg-gradient-to-r from-green-400 to-lime-500 text-transparent bg-clip-text'>
                      Green
                    </span>
                    <span className='bg-yellow-400 text-transparent bg-clip-text'>
                      {' '}
                      Energy
                    </span>
                  </p>
                </div>
                <div
                  onClick={() => setSlideToRight(true)}
                  className='bg-gray-700 absolute right-[2rem] top-[45%] bg-opacity-5 hover:bg-opacity-10 hover:cursor-pointer  w-fit h-fit rounded-full p-3'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='w-8 h-8 text-gray-400'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='m8.25 4.5 7.5 7.5-7.5 7.5'
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
