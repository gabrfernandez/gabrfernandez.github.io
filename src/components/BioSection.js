import React from 'react'
import Gabe from '../img/gabe.png' 
import {Bio, Description, Image, Hide} from "../styles"
import styled from "styled-components"
import {motion} from "framer-motion"
import { fade, titleAnim, photoAnim } from '../animation'
import Wave from "./Wave"

const BioSection = () => {
    return (
        <Bio>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Gabriel Fernandez</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}><span>Full Stack</span> Developer</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Open to work. This is my portfolio</motion.p>
                <motion.button variants={fade}>Contact Me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={Gabe} alt="me" />
            </Image>
            <Wave />
        </Bio>
    )
}

export default BioSection
