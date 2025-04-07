import React from 'react'
import { baldevjiDetail } from './data/baldevjiDetail'
export const Homepage = () => {
  return (
    <div>
      {/* ----------------------------------------Section One-------------------------------------------------- */}
      <div className='w-full h-[35rem] lg:h-[30rem]  bg-[url("/images/backgrond.jpg")] bg-cover bg-no-repeat bg-center'>
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
      {/* ------------------------------Second Two---------------------------------------------------- */}
      <div className='min-h-screen w-full bg-[url("/images/section2Image.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className='min-h-screen w-full bg-black/65'>
          <div className='text-amber-50 flex flex-col justify-center items-center gap-5 lg:flex lg:flex-row lg:h-[20rem] lg:justify-center lg:gap-5 '>

            <div className='bg-slate-400/25 p-[0.5rem] w-[13rem] h-[16rem] flex flex-col items-center rounded-[0.2rem]'>
                <img className=' relative h-[12rem] w-full' src="/images/baldevji.jpg" alt="associat1" />
                <div>Harendrasinh</div>
                <div>LLM (Mumbai Univercity)</div>
            </div>

            <div className='bg-slate-400/25 p-[0.5rem] w-[13rem] h-[16rem] flex flex-col items-center rounded-[0.2rem]'>
                <img className=' relative h-[12rem] w-full' src="/images/baldevji.jpg" alt="associat1" />
                <div>Harendrasinh</div>
                <div>LLM (Mumbai Univercity)</div>
            </div>

            <div className='bg-slate-400/25 p-[0.5rem] w-[13rem] h-[16rem] flex flex-col items-center rounded-[0.2rem]'>
                <img className=' relative h-[12rem] w-full' src="/images/baldevji.jpg" alt="associat1" />
                <div>Harendrasinh</div>
                <div>LLM (Mumbai Univercity)</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
