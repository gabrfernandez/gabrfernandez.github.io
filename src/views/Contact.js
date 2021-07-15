import React from 'react'
import {motion} from "framer-motion"
import {pageAnimation, titleAnim} from "../animation"
import styled from "styled-components"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import pdf from "../img/GabrielFernandezResume.pdf"


const Contact = () => {
    return (
        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background:"#D3D3D3"}}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Send Me an Email</h2>
                        <a href="mailto:gfernandez@ucdavis.edu"><MailOutlineIcon fontSize='large' />gfernandez@ucdavis.edu</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>Connect on LinkedIn</h2>
                        <a href="https://www.linkedin.com/in/gabriel-antonio-fernandez/" rel="noreferrer" target="_blank" ><LinkedInIcon fontSize='large' />gabriel-antonio-fernandez</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>View my GitHub</h2>
                        <a href="https://github.com/gabrfernandez" rel="noreferrer" target="_blank" ><GitHubIcon fontSize='large' />gabrfernandez</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <h2>View my Resume</h2>
                        <a href={pdf} rel="noreferrer" target="_blank" ><AssignmentIcon fontSize='large' />resume</a>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  a{
    text-decoration: none;
    color: black;
    &:hover{
      background-color: black;
      color: white;
  }
  }
`;

export default Contact
