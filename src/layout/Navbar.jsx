import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export const Navbar = () => {
  return (
    <div className='w-full h-[5rem] bg-gray-900 flex flex-col justify-center items-center'>
      <div className='w-full flex justify-between items-center lg:px-20'>
        <div className='text-amber-100 text-[1.2rem] flex justify-center items-center'>
          <div className='w-[3rem] h-[3rem] lg:w-[5rem] lg:h-[5rem]'><img src="/images/logo.png" alt="logo" /></div>
          <div className='text-[1.1rem] lg:text-2xl'>Adv.Baldev Rajput</div>
        </div>
        
        <div className='hidden w-[28rem] h-[4rem] lg:flex justify-between items-center text-gray-900 bg-pink-200/50 p-[0.2rem] rounded-md'>

          <div className='flex justify-center items-center'>
            <div className='h-full w-[5rem] flex flex-col justify-center items-center rounded-[0.2rem]'>
              <div className='text-[1rem] font-semibold'>Contact</div>
              <img className='w-[2rem] h-[2rem]' src="https://cdn-icons-png.flaticon.com/128/91/91916.png" alt="contact" />
            </div>
            <div className='text-amber-50 text-[1.5rem] barlow-condensed-black'>+91 98 67 77 56 26</div>
          </div>

          <div className='flex justify-center items-center w-[12rem] gap-5'>
            <motion.div
              initial={{opacity:0,x:50}}
              animate={{opacity:1,x:1}}
              transition={{duration:1}}
              >
              <img className='w-[2rem] h-[2rem] cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="whatsapp" />
            </motion.div>

            <motion.div
              initial={{opacity:0,x:50}}
              animate={{opacity:1,x:1}}
              transition={{duration:1.5}}>
              <img className='w-[2rem] h-[2rem] cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="facebook" />
            </motion.div>

            <motion.div
            initial={{opacity:0,x:50}}
            animate={{opacity:1,x:1}}
            transition={{duration:1}}>
              <img className='w-[2rem] h-[2rem] cursor-pointer  rounded-md' src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="X" />
            </motion.div>

            <motion.div
            initial={{opacity:0,x:50}}
            animate={{opacity:1,x:1}}
            transition={{duration:1}}>
              <img className='w-[2rem] h-[2rem] cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="insta" />
            </motion.div>
          </div>
        </div>

      </div>
      {/* <div className='w-full felx '>
        <div><Link to={"/"}>Home</Link></div>
        <div><Link to={"/Contact"}>Contact</Link></div>
        <div><Link to={"/About"}>AboutUs</Link></div>
      </div> */}
    </div>
  )
}
