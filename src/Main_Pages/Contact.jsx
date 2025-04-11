import React from 'react'
import { ContactDetail } from '../ContactpageData/ContactDetail'
export const Contact = () => {
  return (
    <div className='min-h-screen px-1 w-full bg-[url("/images/contactImage.jpg")] bg-center bg-cover bg-no-repeat 
          lg:flex lg:justify-center lg:px-20'>
      <ContactDetail/>
    </div>
  )
}
