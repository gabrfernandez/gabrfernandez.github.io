import React from 'react'
import styled from "styled-components"

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <a id="logo" href="/">Gabriel Fernandez</a>
            </h1>
            <ul>
                <li>
                    <a href="/">1. Bio</a>
                </li>
                <li>
                    <a href="/projects">2. My Projects</a>
                </li>
                <li>
                    <a href="/contact">3. Contact Me</a>
                </li>
            </ul>
        </StyledNav>
    )
}
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top:0;
  z-index:10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Nav
