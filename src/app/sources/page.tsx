'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Sources() {
  const router = useRouter();
  return (
    <div className='bg-grid h-full w-full overflow-auto'>
      <div className='flex flex-col md:hidden bg-green-600 w-screen h-screen  bg-grid'>
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
          <p className='my-auto font-extrabold text-white pl-[6rem]'>Sources</p>
        </div>
        <div className='p-12 text-white font-semibold'>
          Images(both websites are royalty-free):{' '}
          <div
            onClick={() => router.push('https://pexels.com')}
            className='text-blue-500 mx-2 hover:underline hover:cursor-pointer'
          >
            https://pexels.com
          </div>{' '}
          <div
            onClick={() => router.push('https://pexels.com')}
            className='text-blue-500 mx-2 hover:underline hover:cursor-pointer'
          >
            https://pixabay.com
          </div>
          <div className='overflow-scroll text-md'>
            Information:
            <div
              onClick={() =>
                router.push(
                  'https://www.eonenergy.com/our-blog/ways-to-power-your-home-with-renewable-energy.html',
                )
              }
              className='text-blue-500 ml-2 hover:underline hover:cursor-pointer'
            >
              https://www.eonenergy.com/our-blog/ways-to-power-your-home-with-renewable-energy.html
            </div>{' '}
            <div
              onClick={() =>
                router.push(
                  'https://www.nationalgrid.com/stories/energy-explained/what-are-different-types-renewable-energy#:~:text=Renewable%20energy%20is%20energy%20that,and%20hydroelectric%2C%20including%20tidal%20energy',
                )
              }
              className='text-blue-500 ml-2 hover:underline hover:cursor-pointer'
            >
              https://www.nationalgrid.com/stories/energy-explained/what-are-different-types-renewable-energy#:~:text=Renewable%20energy%20is%20energy%20that,and%20hydroelectric%2C%20including%20tidal%20energy
            </div>{' '}
            <div
              onClick={() =>
                router.push(
                  'https://www.inspirecleanenergy.com/blog/clean-energy-101/cost-of-renewable-energy',
                )
              }
              className='text-blue-500 ml-2 hover:underline hover:cursor-pointer'
            >
              https://www.inspirecleanenergy.com/blog/clean-energy-101/cost-of-renewable-energy
            </div>{' '}
            <div
              onClick={() =>
                router.push(
                  'https://www.nerdwallet.com/article/finance/solar-panel-cost',
                )
              }
              className='text-blue-500 ml-2 hover:underline hover:cursor-pointer'
            >
              https://todayshomeowner.com/eco-friendly/guides/wind-turbine-cost/#:~:text=How%20much%20does%20a%20wind,million%20to%20manufacture%20and%20install.
            </div>{' '}
            <div
              onClick={() => router.push('https://energy.gov')}
              className='text-blue-500 mx-2 hover:underline hover:cursor-pointer'
            >
              https://energy.gov
            </div>{' '}
            <div
              onClick={() =>
                router.push(
                  'https://www.energystar.gov/about/federal_tax_credits/small_wind_turbines',
                )
              }
              className='text-blue-500 mx-2 hover:underline hover:cursor-pointer'
            >
              https://www.energystar.gov/about/federal_tax_credits/small_wind_turbines
            </div>{' '}
          </div>
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
              Sources
            </p>
          </div>
        </div>
        <div className='mx-auto my-auto'>
          <div className='text-3xl font-semibold mx-auto text-gray-900 text-center'>
            <div className='flex flex-col'>
              Images(both websites are royalty-free):{' '}
              <div
                onClick={() => router.push('https://pexels.com')}
                className='text-blue-500 mx-2 hover:underline hover:cursor-pointer'
              >
                https://pexels.com
              </div>{' '}
              and{' '}
              <div
                onClick={() => router.push('https://pexels.com')}
                className='text-blue-500 mx-2 hover:underline hover:cursor-pointer'
              >
                https://pixabay.com
              </div>{' '}
            </div>
          </div>
          <div className='text-3xl mt-12 font-semibold mx-auto text-gray-900 text-center'>
            <div className='flex flex-col'>
              Information:
              <div
                onClick={() =>
                  router.push(
                    'https://www.eonenergy.com/our-blog/ways-to-power-your-home-with-renewable-energy.html',
                  )
                }
                className='text-blue-500 ml-2 hover:underline hover:cursor-pointer'
              >
                https://www.eonenergy.com/our-blog/ways-to-power-your-home-with-renewable-energy.html
              </div>{' '}
              <div
                onClick={() =>
                  router.push(
                    'https://www.nationalgrid.com/stories/energy-explained/what-are-different-types-renewable-energy#:~:text=Renewable%20energy%20is%20energy%20that,and%20hydroelectric%2C%20including%20tidal%20energy',
                  )
                }
                className='text-blue-500 ml-2 hover:underline hover:cursor-pointer'
              >
                https://www.nationalgrid.com/stories/energy-explained/what-are-different-types-renewable-energy#:~:text=Renewable%20energy%20is%20energy%20that,and%20hydroelectric%2C%20including%20tidal%20energy
              </div>{' '}
              <div
                onClick={() =>
                  router.push(
                    'https://www.inspirecleanenergy.com/blog/clean-energy-101/cost-of-renewable-energy',
                  )
                }
                className='text-blue-500 ml-2 hover:underline hover:cursor-pointer'
              >
                https://www.inspirecleanenergy.com/blog/clean-energy-101/cost-of-renewable-energy
              </div>{' '}
              <div
                onClick={() =>
                  router.push(
                    'https://www.nerdwallet.com/article/finance/solar-panel-cost',
                  )
                }
                className='text-blue-500 ml-2 hover:underline hover:cursor-pointer'
              >
                https://todayshomeowner.com/eco-friendly/guides/wind-turbine-cost/#:~:text=How%20much%20does%20a%20wind,million%20to%20manufacture%20and%20install.
              </div>{' '}
              <div
                onClick={() => router.push('https://energy.gov')}
                className='text-blue-500 mx-2 hover:underline hover:cursor-pointer'
              >
                https://energy.gov
              </div>{' '}
              <div
                onClick={() =>
                  router.push(
                    'https://www.energystar.gov/about/federal_tax_credits/small_wind_turbines',
                  )
                }
                className='text-blue-500 mx-2 hover:underline hover:cursor-pointer'
              >
                https://www.energystar.gov/about/federal_tax_credits/small_wind_turbines
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
