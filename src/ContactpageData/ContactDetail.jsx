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
      <div className='barlow-condensed-thin text-amber-400 text-[1.4rem] border-b-2 border-amber-800 shadow-amber-800
                    lg:shadow-2xl flex justify-center items-center lg:text-2xl'>Contact Detail</div>
          <div className='text-white flex flex-col justify-center items-center h-[20rem] gap-4'>
              Email<div className='text-amber-200'>{contactetail.Email}</div>
              Phone<div className='text-amber-200'>{contactetail.Phone}</div>
              Office Tel<div className='text-amber-200'>{contactetail.Office_Tel}</div>
              Address <div className='text-amber-200'>{contactetail.Office_Address}</div>
          </div>
    </div>
  )
}
