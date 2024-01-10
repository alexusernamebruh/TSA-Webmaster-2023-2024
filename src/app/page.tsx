'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const images = [
    {
      imageUrl: './windmill1.jpg',
      page: '/windPower',
    },
    {
      imageUrl: './solarpanel1.jpg',
      page: '/solarPower',
    },
    {
      imageUrl: './hydro1.jpg',
      page: '/hydroPower',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      page: '/greenEnergy',
    },
  ];
  const images2 = [
    {
      imageUrl: './windmill1.jpg',
      page: '/windPower',
    },
    {
      imageUrl: './solarpanel1.jpg',
      page: '/solarPower',
    },
    {
      imageUrl: './hydro1.jpg',
      page: '/hydroPower',
    },
    {
      imageUrl:
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      page: '/greenEnergy',
    },
  ];
  return (
    <div className=''>
      <div className='bg-gray-900 h-screen w-screen z-40 flex flex-col'>
        <div className='flex bg-gradient-to-br bg-gray-900 h-[7vh] z-40'>
          <div className='pt-2 pl-4'>
            <div className=''>
              <img
                className='loadingAnimationSolarPanel rounded-full h-[4vh] shadow-xl'
                src='https://www.svgrepo.com/show/236459/solar-energy-solar-panel.svg'
              />
            </div>
          </div>
          <div
            onClick={() => router.push('/sources')}
            className='pr-6 font-semibold hover:cursor-pointer hover:underline ml-auto my-auto text-gray-100 text-xl hover:text-gray-200'
          >
            Sources
          </div>
          <div
            onClick={() => router.push('/references')}
            className='pr-6 font-semibold hover:cursor-pointer hover:underline my-auto text-gray-100 text-xl hover:text-gray-200'
          >
            References
          </div>
        </div>
        <div className='w-full h-full flex'>
          <div className='hidden md:block'>
            <img
              src='./birdflying.gif'
              className='absolute hidden md:block md:opacity-0 0 md:w-10 md:h-10 birdFlying'
            />
            <img
              className='w-full hidden md:block h-[93vh] opacity-70 z-0 bgFadeIn absolute'
              src='./sky1.jpg'
            />
          </div>
          <div className='mx-auto my-auto text-center z-40'>
            <div>
              <p className=' text-5xl font-extrabold'>
                <span className='bg-gradient-to-r from-green-400 to-lime-500 text-transparent bg-clip-text textIntro1'>
                  Green
                </span>
                <span className='textIntro2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-500 text-transparent bg-clip-text'>
                  {' '}
                  Energy
                </span>
              </p>
              <p className='textIntro3 text-3xl pt-2 font-bold text-white'>
                The best for our world
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gray-200 flex flex-col bg-grid h-screen overflow-hidden'>
        <div className=''>
          <div className='font-extrabold px-8 py-12 rounded-md bg-gradient-to-r from-green-500 to-green-700  text-center'>
            <p className='text-5xl text-gray-200'>What is green energy?</p>
          </div>
        </div>
        <div className='flex my-auto'>
          <div className='flex marquee1'>
            <div className='flex w-full '>
              {images.map((v, i: number) => (
                <div key={i}>
                  <div
                    onClick={() => router.push(v.page)}
                    className='h-[15rem] w-[22rem] flex ml-[10rem]'
                  >
                    <img
                      className='transition ease-in-out duration-[700ms] hover:cursor-pointer rounded-2xl shadow-xl hover:scale-[120%]'
                      src={v.imageUrl}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex marquee2'>
            <div className='flex w-full '>
              {images2.map((v, i: number) => (
                <div key={i}>
                  <div
                    onClick={() => router.push(v.page)}
                    className='h-[15rem] w-[22rem] flex ml-[10rem]'
                  >
                    <img
                      className='transition ease-in-out duration-[700ms] hover:cursor-pointer rounded-2xl shadow-xl hover:scale-[120%]'
                      src={v.imageUrl}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='flex w-full mt-auto'>
          <div className='hidden md:block mr-auto bg-gradient-to-tr from-purple-500 via-pink-500 to-white w-[15rem] h-[7rem] rounded-tr-full ' />
          <div className='bg-gradient-to-r from-green-500 to-green-700 text-center my-auto p-5 rounded-lg'>
            <p className='text-white text-4xl font-bold my-auto'>
              Click on an image to learn more!
            </p>
          </div>
          <div className='hidden md:block ml-auto bg-gradient-to-tl from-sky-500 via-cyan-500 to-white w-[15rem] h-[7rem] rounded-tl-full '></div>
        </div>
      </div>
    </div>
  );
}
