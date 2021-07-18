import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import {projectState } from "./projectState"
import {motion} from "framer-motion"
import {pageAnimation} from "../animation"
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects]=useState(projectState);
    const [project, setProject] = useState(null);

    useEffect(()=>{
        const currentProject=projects.filter((stateProject)=>stateProject.url===url);
        setProject(currentProject[0]);
        console.log(setProjects)
    },[projects,url])
    return (
        <div>
            {project && (
                <Detail exit="exit" variants={pageAnimation} initial="hidden" animate="show">
                    <HeadLine>
                        <h2>{project.title}</h2>
                        <img src={project.secondaryImg} alt="project" />
                    </HeadLine>
                    <Details>
                        {project.details.map((detail)=>(
                            <Single
                                title={detail.title}
                                description={detail.description}
                                key={detail.title}
                            />
                        ))}
                        <Links 
                          github={project.github}
                          deployed={project.deployed}
                        />
                    </Details>
                </Detail>
            )}
        </div>
    )
}

const Detail = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    margin:auto;
    display:block;
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
`;
const Details = styled.div`
  min-height: 60vh;
  display: block;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const DetailStyle = styled.div`
  padding: 1rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #156D75;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
  a{
    display:inline-block;
    text-decoration: none;
    color: white;
    padding:0rem 2rem 0rem 0rem;
    &:hover{
      background-color: #156D75;
      color: black;
  }
  
`;

//Detail Component
const Single = ({ title, description }) => {
  return (
    <DetailStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </DetailStyle>
  );
};

const Links = ({github, deployed})=>{
  return (
    <DetailStyle>
        <a href={github} target="_blank" rel="noreferrer" ><GitHubIcon fontSize='large' />Repo</a>
        <a href={deployed} target="_blank" rel="noreferrer" ><PublicIcon fontSize='large' />Website</a>
    </DetailStyle>
  )
};

export default ProjectDetail
