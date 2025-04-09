import React from 'react'
import { Link } from 'react-router-dom'
export const Menuitem = () => {
    return (
        <div className='hidden lg:w-full lg:flex lg:justify-center lg:items-center lg:gap-4 bg-slate-700 lg:h-[3rem]'>

            <Link to={"/"} className='lg:bg-slate-900/50 lg:text-amber-50 lg:text-[1.2rem] lg:hover:text-slate-900 lg:hover:bg-slate-400 lg:transition lg:duration-300 lg:rounded-[0.1rem] lg:p-1'>Home</Link>

            <Link to={"/"} className='lg:bg-slate-900/50 lg:text-amber-50 lg:text-[1.2rem] lg:hover:text-slate-900 lg:hover:bg-slate-400 lg:transition lg:duration-300 lg:rounded-[0.1rem] lg:p-1'>Appointment</Link>

            <Link to={"/"} className='lg:bg-slate-900/50 lg:text-amber-50 lg:text-[1.2rem] lg:hover:text-slate-900 lg:hover:bg-slate-400 lg:transition lg:duration-300 lg:rounded-[0.1rem] lg:p-1'>Services</Link>

            <Link to={"/"} className='lg:bg-slate-900/50 lg:text-amber-50 lg:text-[1.2rem] lg:hover:text-slate-900 lg:hover:bg-slate-400 lg:transition lg:duration-300 lg:rounded-[0.1rem] lg:p-1'>Achievments</Link>

            <Link to={"/Contact"} className='lg:bg-slate-900/50 lg:text-amber-50 lg:text-[1.2rem] lg:hover:text-slate-900 lg:hover:bg-slate-400 lg:transition lg:duration-300 lg:rounded-[0.1rem] lg:p-1'>Contact Us</Link>

            <Link to={"/About"} className='lg:bg-slate-900/50 lg:text-amber-50 lg:text-[1.2rem] lg:hover:text-slate-900 lg:hover:bg-slate-400 lg:transition lg:duration-300 lg:rounded-[0.1rem] lg:p-1'>About Us</Link>

            <Link to={"/"} className='lg:bg-slate-900/50 lg:text-amber-50 lg:text-[1.2rem] lg:hover:text-slate-900 lg:hover:bg-slate-400 lg:transition lg:duration-300 lg:rounded-[0.1rem] lg:p-1'>Cases</Link>
        </div>
    )
}

