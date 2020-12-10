import React from 'react'
import ucdavis from "../img/ucdavis.png"
import codingdojo from "../img/codingdojo.png"
import apple from "../img/apple.png"
import oracle from "../img/oracle.png"
import code from "../img/code.jpg"
import {Bio, Description, Image} from "../styles"
import styled from "styled-components"

const BackgroundSection = () => {
    return (
        <Background>
            <Description>
                <h2>Background</h2>
            </Description>
            <Cards>
                <Card>
                    <div className="pic">
                        <img src={ucdavis} alt="pic" />
                        <h3>UC Davis</h3>
                    </div>
                    <p>undergrad</p>
                </Card>
                <Card>
                    <div className="pic">
                        <img src={codingdojo} alt="pic" />
                        <h3>Coding Dojo</h3>
                    </div>
                    <p>Coding Bootcamp</p>
                </Card>
                <Card>
                    <div className="pic">
                        <img src={apple} alt="pic" />
                        <h3>Apple </h3>
                    </div>
                    <p>GIS Researcher</p>
                </Card>
                <Card>
                    <div className="pic">
                        <img src={oracle} alt="pic" />
                        <h3>Oracle</h3>
                    </div>
                    <p>Tax Operations Intern</p>
                </Card>
            </Cards>
            <Image>
                <img src={code} alt="code" />
            </Image>
        </Background>
    )
}

const Background = styled(Bio)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default BackgroundSection
