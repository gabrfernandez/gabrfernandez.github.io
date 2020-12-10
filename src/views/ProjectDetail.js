import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {useHistory} from "react-router-dom"
import {projectState } from "./projectState"

const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects]=useState(projectState);
    const [project, setProject] = useState(null);

    useEffect(()=>{
        const currentProject=projects.filter((stateProject)=>stateProject.url===url);
        setProject(currentProject[0]);
    },[projects,url])
    return (
        <div>
            {project && (
                <Detail>
                    <HeadLine>
                        <h2>{project.title}</h2>
                        <img src={project.mainImg} alt="project" />
                    </HeadLine>
                    <Details>
                        {project.details.map((detail)=>(
                            <Single
                                title={detail.title}
                                description={detail.description}
                                key={detail.title}
                            />
                        ))}
                    </Details>
                    <ImageDisplay>
                        <img src={project.secondaryImg} alt="project" />
                    </ImageDisplay>
                </Detail>
            )}
        </div>
    )
}

const Detail = styled.div`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Details = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const DetailStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
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

export default ProjectDetail
