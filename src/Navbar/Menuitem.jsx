import React from 'react'
import {NavLink} from 'react-router-dom'
export const Menuitem = () => {
    return (
        <div className='hidden lg:w-full lg:flex lg:justify-center lg:items-center lg:gap-4 bg-slate-700 lg:h-[3rem]'>

            <NavLink to={"/"} className={({isActive})=>isActive?"text-slate-800 bg-slate-400 px-2 py-1 rounded-[0.2rem]":"text-amber-50 bg-slate-900 px-2 py-1 rounded-[0.2rem]"}>Home</NavLink>

            <NavLink to={"/Appointment"} className={({isActive})=>isActive?"text-slate-800 bg-slate-400 px-2 py-1 rounded-[0.2rem]":"text-amber-50 bg-slate-900 px-2 py-1 rounded-[0.2rem]"}>Appointment</NavLink>

            <NavLink to={"/Services"} className={({isActive})=>isActive?"text-slate-800 bg-slate-400 px-2 py-1 rounded-[0.2rem]":"text-amber-50 bg-slate-900 px-2 py-1 rounded-[0.2rem]"}>Services</NavLink>

            <NavLink to={"/Achievments"} className={({isActive})=>isActive?"text-slate-800 bg-slate-400 px-2 py-1 rounded-[0.2rem]":"text-amber-50 bg-slate-900 px-2 py-1 rounded-[0.2rem]"}>Achievments</NavLink>

            <NavLink to={"/Contact"} className={({isActive})=>isActive?"text-slate-800 bg-slate-400 px-2 py-1 rounded-[0.2rem]":"text-amber-50 bg-slate-900 px-2 py-1 rounded-[0.2rem]"}>Contact Us</NavLink>

            <NavLink to={"/About"} className={({isActive})=>isActive?"text-slate-800 bg-slate-400 px-2 py-1 rounded-[0.2rem]":"text-amber-50 bg-slate-900 px-2 py-1 rounded-[0.2rem]"}>About Us</NavLink>

            <NavLink to={"/Cases"} className={({isActive})=>isActive?"text-slate-800 bg-slate-400 px-2 py-1 rounded-[0.2rem]":"text-amber-50 bg-slate-900 px-2 py-1 rounded-[0.2rem]"}>Cases</NavLink>
        </div>
    )
}

