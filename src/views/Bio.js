import React from 'react'
import BioSection from '../components/BioSection'
import BackgroundSection from '../components/BackgroundSection'
import BackgroundExpand from '../components/BackgroundExpand'
import {motion} from "framer-motion"
import { pageAnimation } from '../animation'




const Bio = () => {
    return (
        
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <BioSection />
            <BackgroundSection />
            <BackgroundExpand />
        </motion.div>
        
    )
}

export default Bio
