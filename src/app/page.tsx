import Image from 'next/image';
import treesvg from './images/tree.svg';
export default function Home() {
  return (
    //Theme colors are grass green, sky blue, and white
    <div className='bg-white h-screen w-screen'>
      <div className="bg-[url('/sky.jpg')] w-full h-full bg-cover bg-no-repeat">
        <div className='flex'>
          {/* add animated sparkles to background, make text bounce up and down aestheticaly */}
          <div className='flex cursive space-x-2 w-full p-8 justify-center text-6xl text-white font-bold'>
            <p>Would</p>
            <p>a</p>
            <p>world</p>
            <p>with</p>
            <p>only</p>
            <p>renewable</p>
            <p>power</p>
            <p>be</p>
            <p>nice?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
