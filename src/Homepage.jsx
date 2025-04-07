import React from 'react'
import { baldevjiDetail } from './data/baldevjiDetail'
export const Homepage = () => {
  return (
    <div className='w-full min-h-full  bg-[url("/images/backgrond.jpg")] bg-cover bg-no-repeat bg-center'>
      <div className='w-full min-h-screen bg-black/65 lg:px-[10rem] lg:py-10'>

        <div className='w-full py-[2rem] bg-slate-500/20 flex justify-center items-center flex-col lg:flex-row lg:items-end lg:py-0'>
          
          <div className='h-[13rem] w-[10rem] lg:h-[25rem] lg:w-[19rem]'>
            <img className='h-full w-full' src="/images/baldevji2.jpg" alt="jiju" />
          </div>

          <div className='text-amber-50 w-[22rem] flex flex-col justify-center items-center text-justify lg:items-start lg:w-[50rem] px-2'>
            <div>{baldevjiDetail.Name}</div>
            <div>{baldevjiDetail.Experience}</div>
            <div>{baldevjiDetail.Specialization}</div>
          </div>
        </div>

      </div>

    </div>
  )
}
