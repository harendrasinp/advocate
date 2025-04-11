import React from 'react'
import { Section1 } from '../Home page sections/Section1'
import { Section2 } from '../Home page sections/Section2'
export const Homepage = () => {
  return (
    <div>

      <div className='max-w-full min-h-screen lg:h-[30rem] bg-[url("/images/backgrond.jpg")] bg-cover bg-no-repeat bg-center'>
        <Section1 />
      </div>
      <div className='min-h-screen w-full bg-[url("/images/section2Image.jpg")] bg-cover bg-center bg-no-repeat'>
        <Section2 />
      </div>
    </div>
  )
}
