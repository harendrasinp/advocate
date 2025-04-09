import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch,useSelector} from 'react-redux'
import { setNavState } from '../reducer/navbarReducer'
export const Humburg = () => {
    const navState=useSelector((state)=>state.navbar.navState)
    const dispatch=useDispatch()
// ----------------------------------function---------------------------------------------------------------------
    const toggle=()=>{
        dispatch(setNavState(navState==="active"?"unactive":"active"))
    }
// -------------------------------Return---------------------------------------------------------------------------
    return (
        <div className='lg:hidden w-[2rem] h-[2rem] overflow-x-hidden'
            onClick={toggle}>

            <div className='flex flex-col gap-2'>

                <motion.div className='bg-amber-300 w-8 h-0.5'
                    initial={{ opacity: 0, x:50 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 1 }}>
                </motion.div>

                <motion.div className='bg-amber-300 w-8 h-0.5'
                    initial={{ opacity: 0, x:50 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 1.5 }}>
                </motion.div>

                <motion.div className='bg-amber-300 w-8 h-0.5'
                    initial={{ opacity: 0, x:50 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 1.8 }}>
                </motion.div>

            </div>
        </div>
    )
}
