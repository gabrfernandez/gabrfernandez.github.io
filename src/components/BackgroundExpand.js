import React from 'react'
import styled from "styled-components"
import {Bio} from "../styles"

const BackgroundExpand = () => {
    return (
        <BG>
            <h2>Schooling<span>& Experience</span></h2>
            <div className="title">
                <h4>University & Coding Bootcamp</h4>
            </div>
            <div className="subtext">
                <p>UC Davis & Coding Dojo</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="border-line"></div>
            <div className="title">
                <h4>Work Experience</h4>
            </div>
            <div className="subtext">
                <p>Apple & Oracle</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="border-line"></div>
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
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .subtext {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default BackgroundExpand
