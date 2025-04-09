import React from 'react';
import { baldevjiDetail } from '../data/baldevjiDetail';
export const Section1 = () => {
  return (
        <div className='max-w-full h-full bg-black/65 lg:px-[10rem] lg:py-10'>

          <div className='w-full h-screen py-[2rem] bg-slate-500/20 flex justify-center items-center flex-col lg:h-[22rem]    lg:flex-row lg:items-end lg:py-0'>

            <div className='h-[14rem] w-[12rem] lg:h-[22rem] lg:w-[19rem]'>
              <img className='h-full w-full' src="/images/baldevji2.jpg" alt="jiju" />
            </div>

            <div className='text-amber-50 w-[22rem] flex flex-col justify-center items-center text-justify lg:items-start lg:w-[50rem] lg:px-2'>
              <div className='text-amber-300'>{baldevjiDetail.Name}</div>
              <div>{baldevjiDetail.Experience}</div>
              <div>{baldevjiDetail.Specialization}</div>
            </div>
          </div>
        </div>
  )
}
