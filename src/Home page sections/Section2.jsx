import React from 'react'

export const Section2 = () => {
  return (
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
  )
}
