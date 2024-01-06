'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GreenEnergy() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideClassName, setSlideClassName] = useState(
    'w-full h-full rounded-2xl flex shadow-2xl',
  );

  const router = useRouter();
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
  return (
    <div className='bg-grid h-full w-full overflow-auto'>
      <div className='flex flex-col md:hidden w-screen h-screen bg-green-500 bg-grid'>
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
              <div className='flex p-8 relative overflow-auto w-full h-full bg-green-500'>
                <div className='mx-auto flex flex-col w-full'>
                  <p className='text-4xl text-center font-extrabold'>
                    <span className='text-gray-100'>
                      What is renewable power?
                    </span>
                  </p>
                  <div className='my-auto pt-4 pl-6 pr-12'>
                    <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                      <ul className='list-disc space-y-2'>
                        <li>
                          Green energy is energy that is made and from a source
                          that does not harm the environment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='hidden md:flex flex-col bg-grid w-screen h-screen  bg-gray-100'>
        <div className='flex w-full'>
          <div className='w-full font-extrabold flex px-8 py-12 rounded-md bg-gradient-to-r from-green-400 to-green-500  text-center'>
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
                  src='https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                />
                <div className='flex p-8 relative w-full h-full bg-green-500 rounded-r-2xl'>
                  <div className='mx-auto flex flex-col w-full'>
                    <p className='text-4xl text-center font-extrabold'>
                      <span className='text-gray-100'>
                        What is green energy?
                      </span>
                    </p>
                    <div className='my-auto pt-4 pl-6 pr-12'>
                      <div className='lg:text-xl md:text-md sm:text-sm font-semibold text-white'>
                        <ul className='list-disc space-y-2'>
                          <li>
                            Green energy is energy that is made and from a
                            source that does not harm the environment
                          </li>
                        </ul>
                      </div>
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
