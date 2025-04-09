import React from 'react'
import "../style/sidemenu.css"
import { useSelector } from 'react-redux'
export const Sidemenu = () => {
    const navState = useSelector((state) => state.navbar.navState);
    
    return (
        <div className={`absolute w-full min-h-[15rem] bg-slate-800/90 lg:hidden active ${navState}`}>
            <ul className='text-white flex flex-col justify-center px-3 gap-1'>
                <li className='border-b-2 border-amber-300'>Home</li>
                <li className='border-b-2 border-amber-300'>Appointment</li>
                <li className='border-b-2 border-amber-300'>Services</li>
                <li className='border-b-2 border-amber-300'>Achievments</li>
                <li className='border-b-2 border-amber-300'>Contact Us</li>
                <li className='border-b-2 border-amber-300'>About Us</li>
                <li className='border-b-2 border-amber-300'>Cases</li>
            </ul>
        </div>
    )
}
