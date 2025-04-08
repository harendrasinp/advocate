import React from 'react'
import { Link } from 'react-router-dom'
export const Menuitem = () => {
    return (
        <div className='w-full h-[3rem] flex justify-center items-center gap-4 bg-slate-700 lg:h-[3rem]'>

            <Link to={"/"} className='bg-slate-900 p-1  text-amber-50 text-[1.2rem] hover:text-slate-900 hover:bg-slate-400 transition duration-300 rounded-[0.2rem] lg:p-2'>Home</Link>

            <Link to={"/Contact"} className='bg-slate-900 p-1 text-amber-50 text-[1.2rem] hover:text-slate-900 hover:bg-slate-400 transition duration-300 rounded-[0.2rem] lg:p-2'>Contact</Link>

            <Link to={"/About"} className='bg-slate-900 p-1 text-amber-50 text-[1.2rem] hover:text-slate-900 hover:bg-slate-400 transition duration-300 rounded-[0.2rem] lg:p-2'>AboutUs</Link>
        </div>
    )
}

