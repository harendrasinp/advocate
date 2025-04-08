import React from 'react'
import { motion } from 'framer-motion'
export const Socialmedia = () => {
    return (
        <div className='hidden lg:w-[28rem] lg:h-[4rem] lg:flex lg:justify-around lg:items-center lg:text-gray-900 lg:bg-pink-200/50 lg:rounded-md'>
            {/* -------------------------------------Contact and number------------------------------------------ */}
            <div className='flex justify-center items-center'>
                <div className='h-full w-[5rem] flex flex-col justify-center items-center rounded-[0.2rem]'>
                    <div className='text-[1rem] font-semibold'>Contact</div>
                    <img className='w-[2rem] h-[2rem]' src="https://cdn-icons-png.flaticon.com/128/91/91916.png" alt="contact" />
                </div>
                <div className='text-amber-50 text-[1.5rem] barlow-condensed-black'>+91 9322592926</div>
            </div>
            {/*--------------------------------------------------Social media icon------------------------------------------ */}
            <div className='flex justify-center items-center w-[12rem] gap-5'>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 1 }}>
                    <img className='w-[2rem] h-[2rem] transition duration-200 hover:scale-110 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="whatsapp" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 1.5 }}>
                    <img className='w-[2rem] h-[2rem] transition duration-200 hover:scale-110 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/20/20837.png" alt="facebook" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 1 }}>
                    <img className='w-[2rem] h-[2rem] transition duration-200 hover:scale-110 cursor-pointer  rounded-md' src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="X" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 1 }}>
                    <img className='w-[2rem] h-[2rem] transition duration-200 hover:scale-110 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="insta" />
                </motion.div>
            </div>
        </div>
    )
}
