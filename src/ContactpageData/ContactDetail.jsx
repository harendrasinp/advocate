import React, { useEffect, useRef } from 'react'
import "../style/sidemenu.css"
import { contactetail } from '../data/ContactDetail'
export const ContactDetail = () => {

  const animateRef = useRef()

  useEffect(() => {
    animateRef.current.classList.add("animate")

  }, [])
  return (
    <div ref={animateRef} className='w-full h-[35rem] mt-5 bg-slate-700/50 lg:w-[60rem] lg:h-[25rem] lg:mt-5 rounded-md'>
      <div className='barlow-condensed-thin text-amber-400 text-[1.4rem] border-b-2 border-amber-800 shadow-2xl shadow-amber-800
                    lg:shadow-2xl flex justify-center items-center lg:text-2xl'>Contact Detail</div>

      <div className='text-white flex flex-col justify-center items-center h-[20rem] gap-4'>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center gap-2'>
            <div>Email</div>
            <img className='w-[1.5rem] h-[1.5rem]' src="https://cdn-icons-png.flaticon.com/128/2965/2965306.png" alt="email" />
          </div>
          <div className='text-amber-200'>{contactetail.Email}</div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center gap-2'>
            <div>Phone</div>
            <img className='w-[1.5rem] h-[1.5rem]' src="https://cdn-icons-png.flaticon.com/128/3014/3014736.png" alt="email" />
          </div>
          <div className='text-amber-200'>{contactetail.Phone}</div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center gap-2'>
            <div>Office Tel</div>
            <img className='w-[1.5rem] h-[1.5rem]' src="https://cdn-icons-png.flaticon.com/128/2208/2208224.png" alt="email" />
          </div>
          <div className='text-amber-200'>{contactetail.Office_Tel}</div>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center gap-2'>
            <div>Address</div>
            <img className='w-[1.5rem] h-[1.5rem]' src="https://cdn-icons-png.flaticon.com/128/854/854901.png" alt="email" />
          </div>
          <div className='text-amber-200'>{contactetail.Office_Address}</div>
        </div>

      </div>
    </div>
  )
}
