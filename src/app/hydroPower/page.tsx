'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HydroPower() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideClassName, setSlideClassName] = useState(
    'w-full h-full rounded-2xl flex shadow-2xl',
  );

  const router = useRouter();
  return (
    <div className='bg-grid h-full w-full bg-gray-100 overflow-auto'>
      <div className='flex flex-col bg-grid w-screen h-screen  bg-gray-100'>
        <div className='flex w-full'>
          <div className='w-full font-extrabold flex px-8 py-12 rounded-md bg-gradient-to-r from-green-400 via-blue-500 to-purple-600  text-center'>
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
              All about hydro power
            </p>
          </div>
        </div>
        <div className='w-full h-full p-12'>
          <div className='w-full h-full rounded-2xl flex overflow-hidden'>
            {currentSlide === 1 && (
              <div className={slideClassName}>
                <img
                  className='rounded-l-2xl w-1/2 h-full object-cover'
                  src='https://images.pexels.com/photos/2131892/pexels-photo-2131892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <div className='flex p-8 relative w-full h-full bg-blue-500 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col w-full'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='text-gray-100'>
                        What is Hydro Power?
                      </span>
                    </p>
                    <div className='my-auto pt-4 pl-6 pr-12'>
                      <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                        <ul className='list-disc space-y-2'>
                          <li>
                            Hydro power is power obtained via the generation of
                            electricity using flowing water to drive a turbine
                            that powers a generator
                          </li>
                          <div className='ml-8'>
                            <li>
                              Water is passed through a turbine that spins, and
                              generates power via rotational energy
                            </li>
                            <li>
                              A dam is a barrier constructed to hold back water
                              and raise its level, forming a reservoir used to
                              generate electricity
                            </li>
                            <li>
                              A hydropower system you can use for your house or
                              other small things are known as microhydropower
                              systems, these include pumps, turbines, and
                              waterwheels
                            </li>
                          </div>
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
                <div className='w-full relative'>
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
                    src='https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-blue-500 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col w-full'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='text-gray-100'>
                        Advantages of hydropower for everyone
                      </span>
                    </p>
                    <div className='my-auto pt-4 pl-6 pr-12'>
                      <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                        <ul className='list-disc space-y-2'>
                          <li>
                            They are essential backups during major power
                            outages and disruptions as they can generate power
                            to the grid immediately
                          </li>
                          <li>
                            They also help provide flood control, irrigation
                            support, and clean drinking water
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
            {currentSlide === 3 && (
              <div className={slideClassName}>
                <div className='w-full relative'>
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
                    src='https://images.pexels.com/photos/1335960/pexels-photo-1335960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-blue-500 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col w-full'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='text-gray-100'>
                        Advantages of buying a microhydropower system
                      </span>
                    </p>
                    <div className='my-auto pt-4 pl-6 pr-12'>
                      <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                        <ul className='list-disc space-y-2'>
                          <li>
                            They are good money savers as you will have to pay
                            less on your electricity bill, however, the amount
                            varies hugely on the water source
                          </li>
                          <li>You will get tax rebate for it</li>
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
            {currentSlide === 4 && (
              <div className={slideClassName}>
                <div className='w-full relative'>
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
                    src='https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-blue-500 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col w-full'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='text-gray-100'>Tax rebate info</span>
                    </p>
                    <div className='my-auto pt-4 pl-6 pr-12'>
                      <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                        <ul className='list-disc space-y-2'>
                          <li>For projects starting before 2025:</li>
                          <div className='ml-6'>
                            <li>
                              6% credit + additional credit of 24% if labor
                              standards are met for specific energy and storage
                              technologies.
                            </li>
                          </div>
                          <li>For projects starting after 2025:</li>
                          <div className='ml-6'>
                            <li>
                              6% credit + additional 24% if labor standards are
                              met for zero- or negative-emitting technologies
                              and energy storage technologies. Phases out when
                              power sector emissions reach 25% of 2022 levels.
                            </li>
                          </div>
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
                    src='https://images.pexels.com/photos/3943730/pexels-photo-3943730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-blue-500 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        Cost of an microhydropower system
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                        <li>Very high: $500,000</li>
                        <li>High: $100,000</li>
                        <li>Average: $15,000</li>
                        <li>Low: $6599</li>
                        <li>All of this will vary on size</li>
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
