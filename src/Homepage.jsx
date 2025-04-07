import React from 'react'
import { baldevjiDetail } from './data/baldevjiDetail'
export const Homepage = () => {
  return (
    <div>
      {/* ----------------------------------------Section One-------------------------------------------------- */}
      <div className='w-full min-h-full  bg-[url("/images/backgrond.jpg")] bg-cover bg-no-repeat bg-center'>
      <div className='w-full min-h-screen bg-black/65 lg:px-[10rem] lg:py-10'>

        <div className='w-full py-[2rem] bg-slate-500/20 flex justify-center items-center flex-col lg:flex-row lg:items-end lg:py-0'>
          
          <div className='h-[13rem] w-[10rem] lg:h-[25rem] lg:w-[19rem]'>
            <img className='h-full w-full' src="/images/baldevji2.jpg" alt="jiju" />
          </div>

          <div className='text-purple-200 w-[22rem] flex flex-col justify-center items-center text-justify lg:items-start lg:w-[50rem] px-2'>
            <div>{baldevjiDetail.Name}</div>
            <div>{baldevjiDetail.Experience}</div>
            <div>{baldevjiDetail.Specialization}</div>
          </div>
        </div>

      </div>
    </div>
      {/* ------------------------------Second Two---------------------------------------------------- */}
      {/* <div className='min-h-screen w-full bg-[url("/images/section2Image.jpg")] bg-cover bg-center bg-no-repeat'>
        <div className='min-h-screen w-full bg-black/65 flex flex-col gap-[1rem]  items-center  lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-10'>
          <div className='text-3xl text-amber-100'>Associates</div>

          <div className='text-amber-50 grid grid-cols-2 gap-2 lg:flex lg:flex-row lg:h-[20rem] lg:justify-center lg:gap-5'>

            <div className='w-[10rem] h-[13rem] bg-slate-400/25 p-[0.5rem] lg:w-[13rem] lg:h-[16rem] flex flex-col items-center rounded-[0.2rem]'>
              <img className='h-[9rem] lg:h-[12rem] w-full' src="/images/baldevji.jpg" alt="associat1" />
              <div>Harendrasinh</div>
              <div>LLM (Mumbai Univ)</div>
            </div>

            <div className='w-[10rem] h-[13rem] bg-slate-400/25 p-[0.5rem] lg:w-[13rem] lg:h-[16rem] flex flex-col items-center rounded-[0.2rem]'>
              <img className='h-[9rem] lg:h-[12rem] w-full' src="/images/baldevji.jpg" alt="associat1" />
              <div>Harendrasinh</div>
              <div>LLM (Mumbai Univ)</div>
            </div>

            <div className='w-[10rem] h-[13rem] bg-slate-400/25 p-[0.5rem] lg:w-[13rem] lg:h-[16rem] flex flex-col items-center rounded-[0.2rem]'>
              <img className='h-[9rem] lg:h-[12rem] w-full' src="/images/baldevji.jpg" alt="associat1" />
              <div>Harendrasinh</div>
              <div>LLM (Mumbai Univ)</div>
            </div>

            <div className='w-[10rem] h-[13rem] bg-slate-400/25 p-[0.5rem] lg:w-[13rem] lg:h-[16rem] flex flex-col items-center rounded-[0.2rem]'>
              <img className='h-[9rem] lg:h-[12rem] w-full' src="/images/baldevji.jpg" alt="associat1" />
              <div>Harendrasinh</div>
              <div>LLM (Mumbai Univ)</div>
            </div>

          </div>
        </div>
      </div> */}
    </div>
  )
}
