import React from 'react'
import { Navbar } from '../Main_Pages/Navbar'
import { Footer } from '../Main_Pages/Footer'
import { Outlet } from 'react-router-dom'
import { Sidemenu } from '../Navbar/Sidemenu'

export const Pagelayout = () => {
    return (

        <div className='flex flex-col justify-center min-h-screen'>
            <Navbar />
            <main className='flex-1'>
                <Sidemenu />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
