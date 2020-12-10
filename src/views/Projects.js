import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import myshop from "../img/myshop.png"
import moviedb from "../img/moviedb.png"
import blogger from "../img/blogger.png"



const Projects = () => {
    return (
        <Work>
            <Project>
                <h2>Blogger</h2>
                <div className="line"></div>
                <Link to ="/projects/blogger">
                    <img src={blogger} alt="blogger" />
                </Link>
            </Project>
            <Project>
                <h2>MyShop</h2>
                <div className="line"></div>
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
        </Work>
    )
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Projects
