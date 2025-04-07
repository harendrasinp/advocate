import React from 'react'
import { motion } from 'framer-motion'
export const Humberg = () => {
    return (
        <div className='flex flex-col gap-2'>

            <motion.div className='bg-amber-300 w-8 h-0.5'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration:1 }}>
            </motion.div>
            <motion.div className='bg-amber-300 w-8 h-0.5'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration:1.5 }}>
            </motion.div>
            <motion.div className='bg-amber-300 w-8 h-0.5'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 1 }}
                transition={{ duration:1.8 }}>
            </motion.div>

        </div>
    )
}
