'use client';
import { useRouter } from 'next/navigation';

export default function SolarPower() {
  const router = useRouter();
  return (
    <div className='flex flex-col bg-grid w-screen h-screen bg-gray-100'>
      <div className='w-full bg-gradient-to-b  rounded-lg text-center from-sky-500 to-sky-300 p-12'>
        <p className='text-5xl font-extrabold text-gray-100'>
          What are solar panels?
        </p>
      </div>
      <div className='flex w-full mt-auto'>
        <div className='mr-auto bg-gradient-to-tr from-purple-500 via-pink-500 to-white w-[15rem] h-[7rem] rounded-tr-full ' />
        <div
          onClick={() => router.push('/')}
          className='hover:from-sky-600 hover:to-sky-400 bg-gradient-to-r hover:cursor-pointer hover:scale-110 transition ease-in-out duration-500 hover:-translate-y-1  from-sky-500 to-sky-300 text-center my-auto p-5 rounded-lg'
        >
          <p className='text-white text-4xl font-bold my-auto'>Home</p>
        </div>
        <div className='ml-auto bg-gradient-to-tl from-green-700 to-green-500 w-[15rem] h-[7rem] rounded-tl-full '></div>
      </div>
    </div>
  );
}
