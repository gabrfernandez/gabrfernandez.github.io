import React from 'react'
import styled from "styled-components"
import {Bio} from "../styles"
import Toggle from './Toggle'
import {AnimateSharedLayout} from "framer-motion"
import {useScroll} from "./useScroll"
import {scrollReveal} from "../animation"

const BackgroundExpand = () => {
  const [element, controls]=useScroll()
    return (
        <BG
          variants={scrollReveal}
          ref={element}
          animate={controls}
          initial="hidden"
        >
            <h2>Education<span>& Experience</span></h2>
            <AnimateSharedLayout>
              <Toggle title="University & Coding Bootcamp">
              <div className="subtext">
                  <p>UC Davis & Coding Dojo</p>
                  <p>I am a recent graduate of Coding Dojo, a coding bootcamp. I learned three full stacks: Python, MERN, & Java, including Web fundamentals.
                    Here is where I experienced building advanced web applications, solved job-relevant problems and learned to think like true software engineer.

                  </p>
                  <p>I graduated from the University of California, Davis, as a double major student in Economics and Political Science in 2017. 
                    UC Davis provided me the opportunity to gain superior problem-solving analytical skills, learned state-of-the-art economic and econometric techniques, and other tools used in policy-relevant and business-related quantitative analysis. </p>
              </div>
              </Toggle>

            <Toggle title="Work Experience">
            <div className="subtext">
                <p>Apple & Oracle</p>
                <p>I was recently a GIS Researcher for Apple as a contractor. In this role, I began analyzing aerial imagery to highlight changes to the mapped network. Due to my success, I took more of a QA role, checking other researchers' work. In this role, I developed my cross-functional skills as I communicated information among multiple teams. 
                  I developed my analytics skills as this position was heavily reliant on metrics. Priorities change frequently in the tech industry and I can adapt and focus my attention on the projects that needed to be completed. 
                </p>
                <p>
                As a Tax Operations Intern for Oracle, I had a key role in the source to settle business process as I helped manage suppliers with registering, contracting, purchasing and payment. With this role, I developed my data analysis skills. I used Excel and Oracle Business Intelligence tools to help suppliers with the creation of services and payments to ensure Tax and Treasury services for Oracle. 
                Here I gained experience in Project Management as I routinely manage status update meetings to other analysts, managers, and suppliers. I managed trackers to ensure projects are completed. I performed metric updates to ensure our department was on track with tax managers' service requests and our suppliers received payments promptly.
                </p>
            </div>
            </Toggle>
            </AnimateSharedLayout>
        </BG>
    )
}

const BG = styled(Bio)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .border-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .title {
    font-size:1.75rem;
    padding: 3rem 0rem;
    cursor: pointer;
    &:hover{
      color: #156D75;
  }
  }
  .subtext {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default BackgroundExpand
