import React from 'react'
import { Humburg } from '../Navbar/Humburg'
import { Logosection } from '../Navbar/Logosection'
import { Socialmedia } from '../Navbar/Socialmedia'
import { Menuitem } from '../Navbar/Menuitem'
export const Navbar = () => {
  return (
    <div className='relative max-w-full h-[8rem] bg-gray-900 flex flex-col justify-end items-center lg:h-[9rem]'>
      <div className='w-[95%] mb-2 flex justify-between items-center lg:mb-1'>
        <Logosection />
        <Humburg />
        <Socialmedia />
      </div>
      <Menuitem />
    </div>
  )
}
