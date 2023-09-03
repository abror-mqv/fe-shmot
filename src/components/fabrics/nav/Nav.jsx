import React from 'react'
import { styled } from 'styled-components'

const StyledNav = styled.nav`
    background-color: var(--tg-theme-bg-color);
    color: #ffffff;
    padding-left: 90px;
    /* padding-top: 20px; */
    height: max-content;
    /* margin-bottom: 26px; */
    /* width: 80%; */
    padding-bottom: 20px;
    z-index: 99999;
    font-family: 'Amatic SC', cursive;
    padding-top: 20px;
    h4{
      background-color: #B8AE8D;      
      display: inline;
      padding: 6px;
      border-radius: 4px;
      margin: 10px;
    }
    /* h4:hover{
      background-color: #52492A;
      padding: 6px 10px;
      transition: 0.2s;
    } */
    h3{
      color: black;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 300;
      font-size: 19px;
    }
    .items{
      padding  : 20px 0;
      margin-left: -10px;
      display: flex;
      flex-wrap: wrap;
      
    }
    .line{
      width: 100vw;
      background: rgb(2,0,36);
background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 65%);
      height: 1px;
      margin-left: -90px;
    }
`
function Nav(props) {
  const {data, setCurrent, current} = {...props}
  return (
    <StyledNav>
      <h3>Выберите раздел:</h3>
      <div className='items'>
        {
          data.products?.map(el => { return (<h4 key={el.id} className={current == el.id ? 'selected' : 'unselected'} onClick={e => { setCurrent(el.id) }}>{el.subsubcat_name}</h4>) })
        }
      </div>
      <div className="line">

      </div>
    </StyledNav>
  )
}

export default Nav