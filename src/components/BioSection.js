import React from 'react'
import Gabe from '../img/gabe.png'

const BioSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Gabriel Fernandez</h2>
                    </div>
                    <div className="hide">
                        <h2><span>Full Stack</span> Developer</h2>
                    </div>
                </div>
                <p>Open to work. This is my portfolio</p>
                <button>Contact Me</button>
            </div>
            <div className="image">
                <img src={Gabe} alt="me" />
            </div>
        </div>
    )
}

export default BioSection
