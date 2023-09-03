import React from 'react'
import styled from 'styled-components'


const StyledHeader = styled.header`
    width: 100%;
    height: 0px;
    background-color: #774af10;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Logo{
        height: 60px;
        transform: scale(120%);
        margin-right: 8px;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 99999999999999 !important;
    }
    .decor{
        display: flex;
        flex-direction: column;
        height: 20px;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        span{
            width: 30px;
            height: 3px;
            background-color: white;
            border-radius: 4px;

        }
    }
    div{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding-left: 98px;
        text-align: center;
    }

`
function Header() {
    return (
        <StyledHeader>
            {/* <div>Выберите под-подкатегорию</div> */}
            {/* <img src="/Logo_1.0_NoBack.png" alt="" className='Logo' /> */}
        </StyledHeader>
    )
}

export default Header