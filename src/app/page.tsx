import Image from 'next/image';
import treesvg from './images/tree.svg';
export default function Home() {
  return (
    //Theme colors are grass green, sky blue, and white
    <div className='bg-black h-screen w-screen comeInFocus'>
      <div className="bg-[url('/Sunrise.jpeg')] fadeToBlack bg-fixed overflow-clip w-full h-full bg-cover bg-no-repeat">
        <div className='flex'>
          {/* add animated sparkles to background*/}
          {/* have clouds from bottom come in for scene change once text is done with animation*/}
          <div className='flex comeFromBottom cursive space-x-4 w-full p-8 justify-center text-6xl text-white font-bold'>
            <p className='textBounce1'>Would</p>
            <p className='textBounce2'>a</p>
            <p className='textBounce3'>world</p>
            <p className='textBounce4'>with</p>
            <p className='textBounce5'>only</p>
            <p className='textBounce6'>renewable</p>
            <p className='textBounce7'>power</p>
            <p className='textBounce8'>be</p>
            <p className='textBounce9'>nice?</p>
          </div>
        </div>
        <div className='cloudsSceneChange'>
          <img src='/cloudstransparent.png' />
        </div>
      </div>
    </div>
  );
}
