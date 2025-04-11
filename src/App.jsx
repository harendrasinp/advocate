import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pagelayout } from './layout/Pagelayout'
import { Homepage } from './Main_Pages/Homepage'
import { Contact } from './Main_Pages/Contact'
import { Aboutus } from './Main_Pages/Aboutus'
import { Appointment } from './Main_Pages/Appointment'
import { Achievments } from './Main_Pages/Achievments'
import { Cases } from './Main_Pages/Cases'
import { Services } from './Main_Pages/Services'
export const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Pagelayout />}>
          <Route index element={<Homepage />} />
          <Route path='/Appointment' element={<Appointment />} />
          <Route path='/Achievments' element={<Achievments/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Cases' element={<Cases />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<Aboutus />} />
        </Route>
      </Routes>
    </div>
  )
}
