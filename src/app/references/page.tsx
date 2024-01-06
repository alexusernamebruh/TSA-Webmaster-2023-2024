'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function References() {
  const router = useRouter();
  return (
    <div className='bg-grid h-full w-full overflow-auto'>
      <div className='flex flex-col bg-grid w-screen h-screen  bg-gray-100'>
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
            <p className='text-4xl md:text-5xl mx-auto text-gray-200 text-center'>
              References
            </p>
          </div>
        </div>
        <div className='p-12'>
          <img src='./WorkLog.png' />
          <img src='./CopyrightChecklist.jpg' />
        </div>
      </div>
    </div>
  );
}
