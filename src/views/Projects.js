import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import myshop from "../img/myshop.png"
import moviedb from "../img/moviedb.png"
import blogger from "../img/blogger.png"
import {motion} from "framer-motion"
import {lineAnim, pageAnimation, slider, sliderContainer, fade, swoopAdoop} from "../animation"
import {useScroll} from "../components/useScroll"
import ScrollTop from '../components/ScrollTop'


const Projects = () => {
  const [element, controls]= useScroll();
  const [element2, controls2]=useScroll();
    return (
        <Work style={{background:"#fff"}} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <motion.div variants={sliderContainer}>
              <Frame1 variants={slider}></Frame1>
              <Frame2 variants={slider}></Frame2>
              <Frame3 variants={slider}></Frame3>
              <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Project ref={element} variants={fade} animate={controls} initial="hidden">
                <motion.h2 variants={fade}>Blogger</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to ="/projects/blogger">
                    <Hide>
                      <motion.img src={blogger} alt="blogger" />
                    </Hide>
                </Link>
            </Project>
            <Project ref={element2} variants={fade} animate={controls2} initial="hidden" >
                <h2>MyShop</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="projects/myshop">
                    <img src={myshop} alt="myshop" />
                </Link>
            </Project>
            <Project>
                <h2>MovieDB API</h2>
                <div className="line"></div>
                <Link to="/projects/moviedb">
                    <img src={moviedb} alt="moviedb" />
                </Link>
            </Project>
            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Projects
