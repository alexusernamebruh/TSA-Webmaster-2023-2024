'use client';
export default function Home() {
  return (
    //Theme colors are grass green, sky blue, and white
    <div className='bg-black h-screen w-screen'>
      <div className="bg-[url('/Sunrise.jpeg')] scale fadeToBlack bg-fixed overflow-clip w-full h-full bg-cover bg-no-repeat">
        <div className='flex'>
          <div>
            <img
              src='https://clipart-library.com/img1/1663288.gif'
              className='absolute w-10 h-10 birdFlying'
            />
            <img
              src='https://clipart-library.com/img1/1663288.gif'
              className='absolute w-10 h-10 -ml-[2rem] birdFlying'
            />{' '}
            <div>
              <img
                src='https://clipart-library.com/img1/1663288.gif'
                className='absolute w-10 h-10 mt-[2rem] -ml-[0.5rem] birdFlying'
              />
              <img
                src='https://clipart-library.com/img1/1663288.gif'
                className='absolute w-10 h-10 mt-[4rem] -ml-[2rem] birdFlying'
              />{' '}
              <img
                src='https://clipart-library.com/img1/1663288.gif'
                className='absolute w-10 h-10 mt-[5.8rem] -ml-[3.5rem] birdFlying'
              />
            </div>
            <img
              src='https://clipart-library.com/img1/1663288.gif'
              className='absolute w-10 h-10 -ml-[4rem] birdFlying'
            />{' '}
            <img
              src='https://clipart-library.com/img1/1663288.gif'
              className='absolute w-10 h-10 -ml-[6rem] birdFlying'
            />
            <img
              src='https://clipart-library.com/img1/1663288.gif'
              className='absolute w-10 h-10 -ml-[8rem] birdFlying'
            />
          </div>
          {/* have text be typewriter effect before bounce*/}
          {/* have clouds from bottom come in for scene change once text is done with animation*/}
          {/* <Typewriter text={['AmongUs', 'ez', 'eae']} delay={200} infinite /> */}
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
        <div className='cloudsSceneChange opacity-0'>
          <img src='/cloudsTransparent.png' />
        </div>
      </div>
    </div>
  );
}
