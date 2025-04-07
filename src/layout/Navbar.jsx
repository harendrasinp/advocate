import React from 'react'
import { Humberg } from '../humberg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export const Navbar = () => {
  return (
    <div className='w-full h-[8rem] bg-gray-900 flex flex-col justify-around items-center'>

      <div className='w-full flex justify-between items-center px-2 lg:px-20'>
        {/* ---------------------------------------Baldev jiju name and logo----------------------------------------------- */}
        <div className='text-amber-100 text-[1.2rem] flex justify-center items-center'>
          <div className='w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem]'><img src="/images/logo.png" alt="logo" /></div>
          <div className='text-[1.1rem] lg:text-2xl'>Adv.Baldev Rajput</div>
          <div className='w-[2rem] h-[2rem] lg:w-[1.5rem] lg:h-[1.5rem]'><img src="https://cdn-icons-png.flaticon.com/128/14255/14255443.png" alt="tie" /></div>
        </div>
        {/* --------------------------------------Humberg icon for mobile--------------------------------------------- */}
        <div className='lg:hidden w-[2rem] h-[2rem]'>
          {/* <img src="https://cdn-icons-png.flaticon.com/128/15610/15610331.png" alt="humburgIcon" /> */}
          <Humberg/>
        </div>
        {/* -------------------------------------desktop social media section--------------------------------------------- */}
        <div className='hidden w-[28rem] h-[4rem] lg:flex justify-between items-center text-gray-900 bg-pink-200/50 p-[0.2rem] rounded-md'>
          {/* -------------------------------------Contact and number------------------------------------------ */}
          <div className='flex justify-center items-center'>
            <div className='h-full w-[5rem] flex flex-col justify-center items-center rounded-[0.2rem]'>
              <div className='text-[1rem] font-semibold'>Contact</div>
              <img className='w-[2rem] h-[2rem]' src="https://cdn-icons-png.flaticon.com/128/91/91916.png" alt="contact" />
            </div>
            <div className='text-amber-50 text-[1.5rem] barlow-condensed-black'>+91 98 67 77 56 26</div>
          </div>
          {/*--------------------------------------------------Social media icon------------------------------------------ */}
          <div className='flex justify-center items-center w-[12rem] gap-5'>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1 }}
            >
              <img className='w-[2rem] h-[2rem] cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="whatsapp" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1.5 }}>
              <img className='w-[2rem] h-[2rem] cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="facebook" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1 }}>
              <img className='w-[2rem] h-[2rem] cursor-pointer  rounded-md' src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="X" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 1 }}
              transition={{ duration: 1 }}>
              <img className='w-[2rem] h-[2rem] cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="insta" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='w-full h-[3rem] flex justify-center items-center gap-4 bg-slate-700'>

        <div className='text-amber-50 text-[1.1rem] flex justify-center items-center bg-slate-800 px-[1.5rem] p-[0.5rem] rounded-[0.1rem] transition all duration-700 hover:bg-slate-400 '>
          <Link to={"/"}>Home</Link>
        </div>

        <div className='text-amber-50 text-[1.1rem] flex justify-center items-center bg-slate-800 px-[1.5rem] p-[0.5rem] rounded-[0.1rem] transition all duration-700 hover:bg-slate-400'>
          <Link to={"/Contact"}>Contact</Link>
        </div>

        <div className='text-amber-50 text-[1.1rem] flex justify-center items-center bg-slate-800 px-[1.5rem] p-[0.5rem] rounded-[0.1rem] transition all duration-700 hover:bg-slate-400'>
          <Link to={"/About"}>AboutUs</Link>
        </div>
      </div>
    </div>
  )
}
