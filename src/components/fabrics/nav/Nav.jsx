import React from 'react'
import { styled } from 'styled-components'

const StyledNav = styled.nav`
    background-color: var(--tg-theme-bg-color);
    color: #ffffff;
    padding-left: 5%;
    padding-top: 20px;
    height: max-content;
    margin-bottom: 26px;
    width: 90%;
    padding-bottom: 20px;
    z-index: 99999;
    font-family: 'Amatic SC', cursive;
    h4{
      background-color: #764AF1;      
      display: inline;
      padding: 6px;
      border-radius: 4px;
      margin: 10px;
    }
    h4:hover{
      background-color: #b9a8e9;
      padding: 10px;
      transition: 0.2s;
    }

`
function Nav({ children }) {
  return (
    <StyledNav>
      {children}
    </StyledNav>
  )
}

export default Nav