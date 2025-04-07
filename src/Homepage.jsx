import React from 'react'
import { baldevjiDetail } from './data/baldevjiDetail'
export const Homepage = () => {
  return (
    <div className='w-full min-h-full  bg-[url("/images/backgrond.jpg")] bg-cover bg-no-repeat bg-center'>
      <div className='w-full min-h-screen bg-black/65 lg:px-[10rem] lg:py-10'>

        <div className='w-full lg:h-[25rem] py-[2rem] flex flex-col justify-center items-center bg-slate-500/35 lg:flex-row'>
          
          <div className='h-[15rem] w-[10rem] lg:h-[25rem] lg:w-[20rem] shadow-slate-700'>
            <img className='h-full w-full' src="/images/baldevji.png" alt="jiju" />
          </div>

          <div className='text-white w-[20rem] text-justify flex flex-col justify-center items-center lg:w-[50rem]  lg:justify-end'>
            <div>{baldevjiDetail.Name}</div>
            <div>{baldevjiDetail.Experience}</div>
            <div>{baldevjiDetail.Specialization}</div>
          </div>
        </div>

      </div>

    </div>
  )
}
