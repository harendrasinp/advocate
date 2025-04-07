import React from 'react'
import { Homepage } from './Homepage'
import { Contact } from './Contact'
import { Aboutus } from './Aboutus'
import { Route, Routes } from 'react-router-dom'
import { Pagelayout } from './layout/Pagelayout'
export const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Pagelayout />}>
          <Route index element={<Homepage />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<Aboutus />} />
        </Route>
      </Routes>
    </div>
  )
}
