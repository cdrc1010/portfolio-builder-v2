import React from 'react'
import { motion } from 'framer-motion'
const SectionMotion = ({ children, id, className }) => {
    return (
        <motion.div
            id={id} className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >{children}
        </motion.div>
    )
}

export default SectionMotion