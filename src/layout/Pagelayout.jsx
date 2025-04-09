import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'
import { Sidemenu } from '../Navbar/Sidemenu'

export const Pagelayout = () => {
    return (

        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex-1'>
                <Sidemenu />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
