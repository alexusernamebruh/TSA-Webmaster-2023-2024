'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
//PLEASE WORK
export default function WindPower() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideClassName, setSlideClassName] = useState(
    'w-full h-full rounded-2xl flex shadow-2xl',
  );
  if (typeof document !== 'undefined') {
    // code that relies on the document object
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
  }
  let xDown: any = null;
  let yDown: any = null;

  function handleTouchStart(evt: any) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  }

  function handleTouchMove(evt: any) {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        if (currentSlide !== 5) {
          setSlideClassName(
            'slideToLeft w-full h-full rounded-2xl flex shadow-2xl',
          );
          setTimeout(() => {
            setSlideClassName(
              'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
            );
            setCurrentSlide(currentSlide + 1);
          }, 1600);
        } else {
          setSlideClassName(
            'slideToLeft w-full h-full rounded-2xl flex shadow-2xl',
          );
          setTimeout(() => {
            setSlideClassName(
              'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
            );
            setCurrentSlide(1);
          }, 1600);
        }
      } else {
        /* right swipe */
        if (currentSlide !== 1) {
          setSlideClassName(
            'slideToRight w-full h-full rounded-2xl flex shadow-2xl',
          );
          setTimeout(() => {
            setSlideClassName(
              'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
            );
            setCurrentSlide(currentSlide + 1);
          }, 1600);
        } else {
          setSlideClassName(
            'slideToRight w-full h-full rounded-2xl flex shadow-2xl',
          );
          setTimeout(() => {
            setSlideClassName(
              'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
            );
            setCurrentSlide(5);
          }, 1600);
        }
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  }

  const router = useRouter();
  return (
    <div className='bg-grid h-full w-full bg-gray-100 overflow-auto'>
      <div className='flex flex-col md:hidden w-screen h-screen bg-sky-400 bg-grid'>
        <div onClick={() => router.push('/')} className='w-full pt-4 pl-4 flex'>
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
          <p className='font-extrabold'></p>
        </div>
        <div className='w-full h-full flex overflow-auto mb-4'>
          {currentSlide === 1 && (
            <div className={slideClassName}>
              <div className='flex overflow-auto p-8 relative w-full h-full bg-sky-400'>
                <div className='mx-auto flex flex-col w-full'>
                  <p className='text-4xl text-center font-extrabold'>
                    <span className='bg-gray-100 text-transparent bg-clip-text'>
                      What is Wind Power?
                    </span>
                  </p>
                  <div className='my-auto pl-6 pr-12'>
                    <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                      <ul className='list-disc space-y-2'>
                        <li>
                          A form of renewable energy that harvests the power of
                          the wind to generate electricity
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentSlide === 2 && (
            <div className={slideClassName}>
              <div className='flex p-8 relative w-full h-full bg-sky-400 overflow-auto'>
                <div className='mx-auto flex flex-col'>
                  <p className='text-4xl text-center font-extrabold'>
                    <span className='bg-gray-100 text-transparent bg-clip-text'>
                      What are the benefits of wind power for you?
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                      <li>Provides electricity</li>
                      <li>
                        A 6kW turbine can generate around 9000kWh a year which
                        can save you $619 a year on electricity bills
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentSlide === 3 && (
            <div className={slideClassName}>
              <div className='flex p-8 relative w-full h-full bg-sky-400 overflow-auto'>
                <div className='mx-auto flex flex-col'>
                  <p className='text-4xl text-center font-extrabold'>
                    <span className='bg-gray-100 text-transparent bg-clip-text'>
                      What are the benefits of wind power for everyone
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc lg:text-xl md:text-md sm:text-sm'>
                      <li>Creates good-paying jobs</li>
                      <li>
                        Is a domestic resource that enables US economic growth
                      </li>
                      <li>
                        Helps avoid 336 million metric tons of carbon dioxide
                        emissions annually
                      </li>
                      <li>Work well in different settings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentSlide === 4 && (
            <div className={slideClassName}>
              <div className='flex p-8 relative w-full h-full bg-sky-400 overflow-auto'>
                <div className='mx-auto flex flex-col'>
                  <p className='text-4xl text-center font-extrabold'>
                    <span className='bg-gray-100 text-transparent bg-clip-text'>
                      Cost
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                      <li>
                        Wind turbines under 100 kilowatts cost roughly $3,000 to
                        $8,000 per kilowatt of capacity. A 10 kilowatt machine
                        (the size needed to power a large home) might have an
                        installed cost of $50,000-$80,000 (or more). (to power
                        your home)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentSlide === 5 && (
            <div className={slideClassName}>
              <div className='flex p-8 relative w-full h-full bg-sky-400 overflow-auto'>
                <div className='mx-auto flex flex-col'>
                  <p className='text-4xl text-center font-extrabold'>
                    <span className='bg-gray-100 text-transparent bg-clip-text'>
                      Tax rebate info
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                      <li>
                        30 % for property placed in service after December 31,
                        2016, and before January 1, 2020
                      </li>
                      <li>
                        26% for property placed in service after December 31,
                        2019, and before January 1, 2022
                      </li>
                      <li>
                        30% for property placed in service after December 31,
                        2021, and before January 1, 2033
                      </li>
                      <li>
                        26% for property placed in service after December 31,
                        2032, and before January 1, 2034
                      </li>
                      <li>
                        22% for property placed in service after December 31,
                        2033, and before January 1, 2035
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='hidden md:flex flex-col bg-grid w-screen h-screen  bg-gray-100'>
        <div className='flex w-full'>
          <div className='w-full font-extrabold flex px-8 py-12 rounded-md bg-gradient-to-r from-sky-500 to-sky-300  text-center'>
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
              All about wind power
            </p>
          </div>
        </div>
        <div className='w-full h-full p-12'>
          <div className='w-full h-full rounded-2xl flex overflow-hidden'>
            {currentSlide === 1 && (
              <div className={slideClassName}>
                <img
                  className='rounded-l-2xl w-1/2 h-full object-cover'
                  src='https://cdn.pixabay.com/photo/2015/11/18/11/24/windmills-1048981_1280.jpg'
                />
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col w-full'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        What is wind power
                      </span>
                    </p>
                    <div className='my-auto pl-6 pr-12'>
                      <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                        <ul className='list-disc space-y-2'>
                          <li>
                            A form of renewable energy that harvests the power
                            of the wind to generate electricity
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setSlideClassName(
                        'slideToLeft w-full h-full rounded-2xl flex shadow-2xl',
                      );
                      setTimeout(() => {
                        setSlideClassName(
                          'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
                        );
                        setCurrentSlide(currentSlide + 1);
                      }, 1600);
                    }}
                    className='bg-gray-700 absolute right-[2rem] top-[45%] bg-opacity-5 hover:bg-opacity-10 hover:cursor-pointer  w-fit h-fit rounded-full p-3'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-8 h-8 text-white'
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
            {currentSlide === 2 && (
              <div className={slideClassName}>
                <div className='relative'>
                  <div
                    onClick={() => {
                      setSlideClassName(
                        'slideToRight w-full h-full rounded-2xl flex shadow-2xl',
                      );
                      setTimeout(() => {
                        setSlideClassName(
                          'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
                        );
                        setCurrentSlide(currentSlide - 1);
                      }, 1600);
                    }}
                    className='bg-gray-700 border-2 absolute left-[2rem] top-[45%] bg-opacity-5 hover:bg-opacity-10 hover:cursor-pointer  w-fit h-fit rounded-full p-3'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-8 h-8 text-white'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M15.75 19.5 8.25 12l7.5-7.5'
                      />
                    </svg>
                  </div>
                  <img
                    className='rounded-l-2xl h-full object-cover'
                    src='https://cdn.pixabay.com/photo/2020/10/10/14/31/windmills-5643293_1280.jpg'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        What are the benefits of wind power?
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                        <li>Creates good paying jobs</li>
                        <li>
                          Is a domestic resource that enables US economic growth
                        </li>
                        <li>
                          Helps avoid 336 million metric tons of caron dioxide
                          emissions annually
                        </li>
                        <li>Works well in different settings</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setSlideClassName(
                        'slideToLeft w-full h-full rounded-2xl flex shadow-2xl',
                      );
                      setTimeout(() => {
                        setSlideClassName(
                          'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
                        );
                        setCurrentSlide(currentSlide + 1);
                      }, 1500);
                    }}
                    className='bg-gray-700 absolute right-[2rem] top-[45%] bg-opacity-5 hover:bg-opacity-10 hover:cursor-pointer  w-fit h-fit rounded-full p-3'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-8 h-8 text-white'
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
            {currentSlide === 3 && (
              <div className={slideClassName}>
                <div className='relative w-full'>
                  <div
                    onClick={() => {
                      setSlideClassName(
                        'slideToRight w-full h-full rounded-2xl flex shadow-2xl',
                      );
                      setTimeout(() => {
                        setSlideClassName(
                          'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
                        );
                        setCurrentSlide(currentSlide - 1);
                      }, 1600);
                    }}
                    className='bg-gray-700 border-2 absolute left-[2rem] top-[45%] bg-opacity-5 hover:bg-opacity-10 hover:cursor-pointer  w-fit h-fit rounded-full p-3'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-8 h-8 text-white'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M15.75 19.5 8.25 12l7.5-7.5'
                      />
                    </svg>
                  </div>
                  <img
                    className='rounded-l-2xl w-full h-full object-cover'
                    src='https://cdn.pixabay.com/photo/2012/06/22/23/08/windmill-50512_1280.jpg'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        Advantages of wind power for you
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc lg:text-xl md:text-md sm:text-sm'>
                        <li>Provides electricity</li>
                        <li>
                          A 6kW turbine can generate around 9000kWh a year which
                          can save you $619 a year on electricity bills
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setSlideClassName(
                        'slideToLeft w-full h-full rounded-2xl flex shadow-2xl',
                      );
                      setTimeout(() => {
                        setSlideClassName(
                          'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
                        );
                        setCurrentSlide(currentSlide + 1);
                      }, 1500);
                    }}
                    className='bg-gray-700 absolute right-[2rem] top-[45%] bg-opacity-5 hover:bg-opacity-10 hover:cursor-pointer  w-fit h-fit rounded-full p-3'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-8 h-8 text-white'
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
            {currentSlide === 4 && (
              <div className={slideClassName}>
                <div className='relative w-full'>
                  <div
                    onClick={() => {
                      setSlideClassName(
                        'slideToRight w-full h-full rounded-2xl flex shadow-2xl',
                      );
                      setTimeout(() => {
                        setSlideClassName(
                          'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
                        );
                        setCurrentSlide(currentSlide - 1);
                      }, 1600);
                    }}
                    className='bg-gray-700 border-2 absolute left-[2rem] top-[45%] bg-opacity-5 hover:bg-opacity-10 hover:cursor-pointer  w-fit h-fit rounded-full p-3'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-8 h-8 text-white'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M15.75 19.5 8.25 12l7.5-7.5'
                      />
                    </svg>
                  </div>
                  <img
                    className='rounded-l-2xl w-full h-full object-cover'
                    src='https://cdn.pixabay.com/photo/2021/06/03/13/18/windmill-6307058_1280.jpg'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        Cost
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                        <li>
                          Wind turbines under 100 kilowatts cost roughly $3,000
                          to $8,000 per kilowatt of capacity. A 10 kilowatt
                          machine (the size needed to power a large home) might
                          have an installed cost of $50,000-$80,000 (or more).
                          (to power your home)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setSlideClassName(
                        'slideToLeft w-full h-full rounded-2xl flex shadow-2xl',
                      );
                      setTimeout(() => {
                        setSlideClassName(
                          'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
                        );
                        setCurrentSlide(currentSlide + 1);
                      }, 1500);
                    }}
                    className='bg-gray-700 absolute right-[2rem] top-[45%] bg-opacity-5 hover:bg-opacity-10 hover:cursor-pointer  w-fit h-fit rounded-full p-3'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-8 h-8 text-white'
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
            {currentSlide === 5 && (
              <div className={slideClassName}>
                <div className='relative w-full'>
                  <div
                    onClick={() => {
                      setSlideClassName(
                        'slideToRight w-full h-full rounded-2xl flex shadow-2xl',
                      );
                      setTimeout(() => {
                        setSlideClassName(
                          'backgroundFadeIn w-full h-full rounded-2xl flex shadow-2xl',
                        );
                        setCurrentSlide(currentSlide - 1);
                      }, 1600);
                    }}
                    className='bg-gray-700 border-2 absolute left-[2rem] top-[45%] bg-opacity-5 hover:bg-opacity-10 hover:cursor-pointer  w-fit h-fit rounded-full p-3'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-8 h-8 text-white'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M15.75 19.5 8.25 12l7.5-7.5'
                      />
                    </svg>
                  </div>
                  <img
                    className='rounded-l-2xl w-full h-full object-cover'
                    src='https://cdn.pixabay.com/photo/2020/09/21/23/31/windmill-5591464_1280.jpg'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        Tax rebate info
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                        <li>
                          30 % for property placed in service after December 31,
                          2016, and before January 1, 2020
                        </li>
                        <li>
                          26% for property placed in service after December 31,
                          2019, and before January 1, 2022
                        </li>
                        <li>
                          30% for property placed in service after December 31,
                          2021, and before January 1, 2033
                        </li>
                        <li>
                          26% for property placed in service after December 31,
                          2032, and before January 1, 2034
                        </li>
                        <li>
                          22% for property placed in service after December 31,
                          2033, and before January 1, 2035
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
