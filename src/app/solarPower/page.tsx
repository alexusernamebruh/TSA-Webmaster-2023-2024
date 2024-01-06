'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SolarPower() {
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
        if (currentSlide !== 7) {
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
            setCurrentSlide(7);
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
                      What is Solar Power?
                    </span>
                  </p>
                  <div className='my-auto pl-6 pr-12'>
                    <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                      <ul className='list-disc space-y-2'>
                        <li>
                          Solar power is power obtained by harvesting the energy
                          of the suns rays.
                        </li>
                        <div className='ml-8'>
                          <li>
                            We use solar panels to absorb the sun&apos;s rays
                            and convert it into energy
                          </li>
                          <li>
                            A solar panel is a panel designed to absorb the
                            sun&apos;s rays as a source of energy for generating
                            electricity or heating.
                          </li>
                        </div>
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
                      What are the benefits of Solar Panels?
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                      <li>
                        You can save up to $1141 a year on your electricity
                        bills!
                      </li>
                      <li>
                        A 12-panel solar system could generate enough
                        electricity in a year to:
                      </li>
                      <div className='ml-8'>
                        <li>
                          Power a Tesla Model 3 for 17,660 miles of driving
                        </li>
                        <li>Run an A++ dishwasher for 4,465 loads</li>
                        <li>Save over $680 a year on electricity bills</li>
                      </div>
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
                      Cost & savings of solar panels
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc lg:text-xl md:text-md sm:text-sm'>
                      <li>Cost:</li>
                      <div className='ml-8'>
                        <li>Average: $16,000</li>
                        <li>Low: $4,500</li>
                        <li>High: $36,000</li>
                      </div>
                      <li>Savings:</li>
                      <div className='ml-8'>
                        <li>Estimated yearly savings: $1640</li>
                        <li>Estimated number of years to break even: 6.96</li>
                      </div>
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
                      Will weather affect power generation?
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                      <li>
                        Modern solar panels work reasonably well in cloudy
                        weather, even though the light on cloudy days isn&apos;t
                        as strong. And that makes sense as the sun doesn&apos;t
                        suddenly stop working because of a bit of cloud.
                      </li>
                      <li>
                        Rain can even make solar panels work better by washing
                        away any dust or dirt that might block light.
                      </li>
                      <li>
                        Solar panels work through all four seasons of the year,
                        come rain or shine, or even hail or in light snow
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
                      Will weather affect power generation? (Part 2)
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                      <li>
                        Solar panels don&apos;t work as well in the winter but
                        that is ultimately because there is less sunlight on
                        shorter days
                      </li>
                      <li>
                        Solar panels work more efficiently in cold weather than
                        warm weather, so while there is the downside of less
                        sunlight in the winter, there is also a plus side.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentSlide === 6 && (
            <div className={slideClassName}>
              <div className='flex p-8 relative w-full h-full bg-sky-400 overflow-auto'>
                <div className='mx-auto flex flex-col'>
                  <p className='text-4xl text-center font-extrabold'>
                    <span className='bg-gray-100 text-transparent bg-clip-text'>
                      Tax rebate information
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                      <li>
                        Solar PV systems installed in 2020 and 2021 are eligible
                        for a 26% tax credit
                      </li>
                      <li>
                        Solar PV systems installed between 2022 and 2032 (also
                        before 2020) are eligible for a 30% tax credit
                      </li>
                      <li>
                        Solar PV systems installed in 2033 are eligible for a
                        26% tax credit
                      </li>
                      <li>
                        Solar PV systems installed in 2034 are eligible for a
                        22% tax credit
                      </li>
                      <li>There is no maximum amount that can be claimed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentSlide === 7 && (
            <div className={slideClassName}>
              <div className='flex p-8 relative w-full h-full bg-sky-400 overflow-auto'>
                <div className='mx-auto flex flex-col'>
                  <p className='text-4xl text-center font-extrabold'>
                    <span className='bg-gray-100 text-transparent bg-clip-text'>
                      Battery investment alongside solar panels
                    </span>
                  </p>
                  <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                    <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                      <li>
                        You should invest in a battery alongside solar panels
                      </li>
                      <div className='ml-8'>
                        <li>
                          A battery allows you to store unused electricity for
                          later, allowing for power during dark, or charge
                          something overnight
                        </li>
                        <li>
                          Batteries are important because most homes use more
                          energy at times of the year when there are fewer hours
                          of daylight when solar panels generate less
                          electricity
                        </li>
                      </div>
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
              All about solar power
            </p>
          </div>
        </div>
        <div className='w-full h-full p-12'>
          <div className='w-full h-full rounded-2xl flex overflow-hidden'>
            {currentSlide === 1 && (
              <div className={slideClassName}>
                <img
                  className='rounded-l-2xl w-1/2 h-full object-cover'
                  src='https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col w-full'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        What is Solar Power?
                      </span>
                    </p>
                    <div className='my-auto pl-6 pr-12'>
                      <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                        <ul className='list-disc space-y-2'>
                          <li>
                            Solar power is power obtained by harvesting the
                            energy of the suns rays.
                          </li>
                          <div className='ml-8'>
                            <li>
                              We use solar panels to absorb the sun&apos;s rays
                              and convert it into energy
                            </li>
                            <li>
                              A solar panel is a panel designed to absorb the
                              sun&apos;s rays as a source of energy for
                              generating electricity or heating.
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
                    src='https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        What are the benefits of Solar Panels?
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                        <li>
                          You can save up to $1141 a year on your electricity
                          bills!
                        </li>
                        <li>
                          A 12-panel solar system could generate enough
                          electricity in a year to:
                        </li>
                        <div className='ml-8'>
                          <li>
                            Power a Tesla Model 3 for 17,660 miles of driving
                          </li>
                          <li>Run an A++ dishwasher for 4,465 loads</li>
                          <li>Save over $680 a year on electricity bills</li>
                        </div>
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
                    src='https://images.pexels.com/photos/4148472/pexels-photo-4148472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        Cost & savings of solar panels
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc lg:text-xl md:text-md sm:text-sm'>
                        <li>Cost:</li>
                        <div className='ml-8'>
                          <li>Average: $16,000</li>
                          <li>Low: $4,500</li>
                          <li>High: $36,000</li>
                        </div>
                        <li>Savings:</li>
                        <div className='ml-8'>
                          <li>Estimated yearly savings: $1640</li>
                          <li>Estimated number of years to break even: 6.96</li>
                        </div>
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
                    src='https://images.pexels.com/photos/13804966/pexels-photo-13804966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        Will weather affect power generation?
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                        <li>
                          Modern solar panels work reasonably well in cloudy
                          weather, even though the light on cloudy days
                          isn&apos;t as strong. And that makes sense as the sun
                          doesn&apos;t suddenly stop working because of a bit of
                          cloud.
                        </li>
                        <li>
                          Rain can even make solar panels work better by washing
                          away any dust or dirt that might block light.
                        </li>
                        <li>
                          Solar panels work through all four seasons of the
                          year, come rain or shine, or even hail or in light
                          snow
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
                    src='https://images.pexels.com/photos/13804966/pexels-photo-13804966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        Will weather affect power generation? (Part 2)
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                        <li>
                          Solar panels don&apos;t work as well in the winter but
                          that is ultimately because there is less sunlight on
                          shorter days
                        </li>
                        <li>
                          Solar panels work more efficiently in cold weather
                          than warm weather, so while there is the downside of
                          less sunlight in the winter, there is also a plus
                          side.
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
            {currentSlide === 6 && (
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
                    src='https://images.pexels.com/photos/4386369/pexels-photo-4386369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        Tax rebate information
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                        <li>
                          Solar PV systems installed in 2020 and 2021 are
                          eligible for a 26% tax credit
                        </li>
                        <li>
                          Solar PV systems installed between 2022 and 2032 (also
                          before 2020) are eligible for a 30% tax credit
                        </li>
                        <li>
                          Solar PV systems installed in 2033 are eligible for a
                          26% tax credit
                        </li>
                        <li>
                          Solar PV systems installed in 2034 are eligible for a
                          22% tax credit
                        </li>
                        <li>There is no maximum amount that can be claimed</li>
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
            {currentSlide === 7 && (
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
                    src='https://images.pexels.com/photos/698485/pexels-photo-698485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  />
                </div>
                <div className='flex p-8 relative w-full h-full bg-sky-300 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='bg-gray-100 text-transparent bg-clip-text'>
                        Battery investment alongside solar panels
                      </span>
                    </p>
                    <div className='pl-6 pr-12 pt-4 my-auto text-xl font-semibold text-white'>
                      <ul className='list-disc space-y-2 lg:text-xl md:text-md sm:text-sm'>
                        <li>
                          You should invest in a battery alongside solar panels
                        </li>
                        <div className='ml-8'>
                          <li>
                            A battery allows you to store unused electricity for
                            later, allowing for power during dark, or charge
                            something overnight
                          </li>
                          <li>
                            Batteries are important because most homes use more
                            energy at times of the year when there are fewer
                            hours of daylight when solar panels generate less
                            electricity
                          </li>
                        </div>
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
