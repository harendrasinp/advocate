import React from 'react'
import "../style/sidemenu.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNavState } from '../reducer/navbarReducer';
export const Sidemenu = () => {
    const navState = useSelector((state) => state.navbar.navState);
    const dispatch=useDispatch()

    const toggle=()=>{
        dispatch(setNavState(navState==="active"?"unactive":"active"))
    }
    return (
        <div className={`absolute min-w-screen min-h-[15rem] bg-slate-800/90 lg:hidden active ${navState}`}>
            <ul className='text-white flex flex-col justify-center px-3 gap-1'>
                <li className='border-b-2 border-amber-300' onClick={toggle}><Link to={"/"}>Home</Link></li>
                <li className='border-b-2 border-amber-300' onClick={toggle}>Appointment</li>
                <li className='border-b-2 border-amber-300' onClick={toggle}>Services</li>
                <li className='border-b-2 border-amber-300' onClick={toggle}>Achievments</li>
                <li className='border-b-2 border-amber-300' onClick={toggle}><Link to={"/Contact"}>Contact Us</Link></li>
                <li className='border-b-2 border-amber-300' onClick={toggle}><Link to={"/About"}>About Us</Link></li>
                <li className='border-b-2 border-amber-300' onClick={toggle}>Cases</li>
            </ul>
        </div>
    )
}
