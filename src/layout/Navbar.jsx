import React from 'react'
import { Humburg } from '../Navbar/Humburg'
import { Logosection } from '../Navbar/Logosection'
import { Socialmedia } from '../Navbar/Socialmedia'
import { Menuitem } from '../Navbar/Menuitem'
export const Navbar = () => {
  return (
    <div className='max-w-full z-10 h-[5rem] bg-gray-900 flex flex-col justify-end items-center lg:h-[8rem]'>
      <div className='w-[23rem] mb-2 flex justify-between items-center lg:mb-1 lg:w-[95%]'>
        <Logosection />
        <Humburg />
        <Socialmedia />
      </div>
      <Menuitem />
    </div>
  )
}
