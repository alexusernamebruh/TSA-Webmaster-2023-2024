import Image from 'next/image';
import treesvg from './images/tree.svg';
import { useState } from 'react';
import Typewriter from './components/typewriter';

export default function Home() {
  return (
    //Theme colors are grass green, sky blue, and white
    <div className='bg-gray-900 h-screen w-screen z-40 flex flex-col'>
      <div className='flex bg-gradient-to-br bg-gray-900 h-[7vh] z-40'>
        <div className='my-auto p-4'>
          <div>
            <img
              className='loadingAnimationSolarPanel w-12 rounded-full h-12 shadow-xl'
              src='https://www.svgrepo.com/show/236459/solar-energy-solar-panel.svg'
            />
          </div>
        </div>
      </div>

      <div className='w-full h-full bg-grid flex'>
        <img
          className='w-full h-[93vh] opacity-70 z-0 bgFadeIn absolute'
          src='https://cdn.pixabay.com/photo/2017/03/13/07/34/photovoltaic-2138992_1280.jpg'
        />
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
            {/* <p className='text-5xl font-extrabold text-transparent  bg-clip-text textIntro bg-gradient-to-r from-green-400 to-lime-500'>
              Solar Panel
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
