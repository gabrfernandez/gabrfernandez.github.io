import React from 'react'
import Gabe from '../img/gabe.png' 
import {Bio, Description, Image, Hide} from "../styles"
import styled from "styled-components"

const BioSection = () => {
    return (
        <Bio>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Gabriel Fernandez</h2>
                    </Hide>
                    <Hide>
                        <h2><span>Full Stack</span> Developer</h2>
                    </Hide>
                </div>
                <p>Open to work. This is my portfolio</p>
                <button>Contact Me</button>
            </Description>
            <div className="image">
                <img src={Gabe} alt="me" />
            </div>
        </Bio>
    )
}

export default BioSection
