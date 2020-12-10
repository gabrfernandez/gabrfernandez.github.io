import React from 'react'
import ucdavis from "../img/ucdavis.png"
import codingdojo from "../img/codingdojo.png"
import apple from "../img/apple.png"
import oracle from "../img/oracle.png"
import code from "../img/code.jpg"

const BackgroundSection = () => {
    return (
        <div className="background">
            <div className="description">
                <h2>Background</h2>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="pic">
                        <img src={ucdavis} alt="pic" />
                        <h3>UC Davis</h3>
                    </div>
                    <p>undergrad</p>
                </div>
                <div className="card">
                    <div className="pic">
                        <img src={codingdojo} alt="pic" />
                        <h3>Coding Dojo</h3>
                    </div>
                    <p>Coding Bootcamp</p>
                </div>
                <div className="card">
                    <div className="pic">
                        <img src={apple} alt="pic" />
                        <h3>Apple </h3>
                    </div>
                    <p>GIS Researcher</p>
                </div>
                <div className="card">
                    <div className="pic">
                        <img src={oracle} alt="pic" />
                        <h3>Oracle</h3>
                    </div>
                    <p>Tax Operations Intern</p>
                </div>
            </div>
            <div class="image">
                <img src={code} alt="code" />
            </div>
        </div>
    )
}

export default BackgroundSection
