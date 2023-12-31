'use client';
import { useRouter } from 'next/navigation';

export default function HydroPower() {
  const router = useRouter();
  return (
    <div className='flex flex-col bg-grid w-screen h-screen bg-gray-100'>
      <div className='rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
        <div className='font-extrabold px-8 py-12 rounded-md  text-center'>
          <p className='text-5xl text-gray-200'>What is hydro power?</p>
        </div>
      </div>
      <div>HEY WHATS UP</div>
      <div className='flex w-full mt-auto'>
        <div className='mr-auto bg-gradient-to-tr from-purple-500 via-pink-500 to-white w-[15rem] h-[7rem] rounded-tr-full ' />
        <div
          onClick={() => router.push('/')}
          className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-center my-auto p-5 rounded-lg'
        >
          <p className='text-white text-4xl font-bold my-auto'>Home</p>
        </div>
        <div className='ml-auto bg-gradient-to-tl from-sky-500 via-cyan-500 to-white w-[15rem] h-[7rem] rounded-tl-full '></div>
      </div>
    </div>
  );
}
