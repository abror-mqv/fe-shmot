import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, Variants } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BACK_URL } from '../../../constants';

const StyledCard = styled.div`
    .card-container {
       width: 100%;
       height: 260px;
       display: flex;
       justify-content: flex-start;
       font-family: 'Oswald', sans-serif;
       margin-bottom: 30px;
       /* box-shadow:  5px 5px 10px #d7d7d7,
             -5px -5px 10px #e9e9e9; */
       .image{
            width: 50%;
            object-fit: cover;

       }
       .info{
        width: calc(50% - 40px);
            background: radial-gradient(rgb(217, 216, 216), #ffffff);

            padding: 20px;
            color: #000000;
           display: flex;
           flex-direction: column;
           justify-content: flex-start;

            .title{
                font-size: 17px;
                margin-bottom: 20px;
                font-weight: 900;
            }
            .price{
                font-size: 15px;
                color: #000000;
                
            }
            .sizes{
                font-size: 10px;
                margin-bottom: 20px;
            }
            .description{
                font-size: 10px;
                color: rgb(27, 27, 27);
                margin-bottom: 20px;
            }
            .qaptal{
                align-self: flex-end;
            }
       }
    }    

`







function Card({ onCollapse, onExpand, disabled, data, day }) {
    const title = data.product_name
    const image = data.image
    const description = data.description
    const price = data.price
    const siezes = data.siezes
    const [isOn, setIsOn] = useState(false);

    return (
        <div >
            <StyledCard>
                <div className="card-container">
                    <img src={BACK_URL + '/media/' + data.image_0} alt="" className='image' />
                    <div className='info'>
                        <p className="title">
                            {title}
                        </p>

                        
                        <p className="sizes">
                            размеры: <span className='price'>{siezes ? siezes : 0}</span>
                        </p>
                        <p className="description">
                            {description.slice(0, 83) + '...'}
                        </p>
                        <p className="description qaptal">
                            Цена   <span className='price'>{price}</span> руб.
                        </p>
                    </div>
                </div>
            </StyledCard>
        </div>
    )
}


export default Card


const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 30,

};



{/* <div >
            <StyledCard data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className='crd' layout={'position'} transition={spring}>

                    <img className='image' src={'https://abaa-212-112-100-242.ngrok-free.app/media/' + image} alt="" />
                    <div className='switch' data-isOn={isOn} onClick={toggleSwitch}>
                        <motion.h3 layout transition={spring}>{title}</motion.h3>
                        <p className='price'>{price} <span>СОМ</span></p>
                        <div className='Buy'>
                            HGEll
                        </div>
                    </div>


                    <p className="description">
                        <ReactMarkdown>
                            {description}
                        </ReactMarkdown>
                    </p>


                </motion.div>
            </StyledCard>
        </div> */}