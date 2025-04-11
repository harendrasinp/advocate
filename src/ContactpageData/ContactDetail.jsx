import React, { useEffect, useRef } from 'react'
import "../style/sidemenu.css"
export const ContactDetail = () => {

  const animateRef = useRef()

  useEffect(() => {
    animateRef.current.classList.add("animate")

  }, [])
  return (
    <div ref={animateRef} className='w-full h-[100rem] mt-0 bg-slate-700/50 lg:w-[60rem] lg:h-[25rem] lg:mt-5 rounded-md'>

      <div className='barlow-condensed-thin text-amber-400 text-[1.4rem] border-b-2 border-amber-800 shadow-amber-800
                    lg:shadow-2xl flex justify-center items-center lg:text-2xl'>Contact Detail</div>
 
    </div>
  )
}
