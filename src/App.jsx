import React from 'react'
import { Home } from './home'
import { Contact } from './Contact'
import { Aboutus } from './Aboutus'
import { Route, Routes } from 'react-router-dom'
import { Pagelayout } from './layout/Pagelayout'
export const App = () => {
  return (
    <div className='bg-black/90'>
      <Routes>
        <Route path='/' element={<Pagelayout />}>
          <Route index element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<Aboutus />} />
        </Route>
      </Routes>
    </div>
  )
}
