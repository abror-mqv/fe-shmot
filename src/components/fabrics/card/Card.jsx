import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, Variants } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { BACK_URL } from '../../../constants';

const StyledCard = styled.div`
    /* background-color: #fefefe;
    width: calc(42vw - 20px);
    height: 45vw;
    height: fit-content;
    overflow: hidden;
    background-color: #ff4d6e44;
    padding: 6px;
    transition: all 0.2s;
    border-radius: 10px; */
    .image{
        height: 45vw;
        width: calc(42vw - 20px);
        object-fit: cover;
        object-position: center;
        border-radius: 6px;
    }
    transition: 0.2s;
    transition: transform 0.5s ease-in-out;
    .crd{
        transition: all 0.4s;
        transition: scale 0.4s;
        transition: position 2s;
    }
    .price{
        font-size: 20px;
        text-align: end;        
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        span{
            font-size: 11px;
            color: #000000;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
        }
    }
    .description{
        display: none;
    }
    .Buy{
        display: none;
    }
    .card-container {
        width: 42vw;
        /* minheight: 43vh; */
        .compact{
            width: 100%;
            height: 100%;
            box-shadow:  5px 5px 10px #d4d4d4,
             -5px -5px 10px #ffffff;
            padding: 8px;
            .image{
                width: 100%;
            }
            border-radius: 12px;
        }
        .expanded{
            z-index: 999999999;
            width: 90vw;
            height: 96vh;
            background-color: #ffffff83;
            backdrop-filter: blur(10px);
            position: fixed;
            left: 2%;
            top: 2%; 
            color: navy;
            overflow: scroll;
            border-radius: 20px;
            padding: 3%;
            .crd{
                height: 100%;
                width: 100%;
                .image{
                    width: 94%;
                    height: max-content;
                    max-height:60%;
                    border-radius: 12px;
                }
                .title{
                    font-size: 32px;
                }
                .price{
                    font-size: 18px;
                    span{
                        font-size: 10px;
                        color: navy;
                    }
                }
                .description{
                    margin-top: 40px;
                    display: block;
                    font-size: 20px;
                    background-color: #774af19b;
                    color: white;
                    border-radius: 12px;
                    padding: 12px;
                }
            }
            
        }
    }
    &[data-isOn="true"]{
        .crd{
            transition: all 0.2s;
            position: fixed;
            background-color:  red ;
            /* backdrop-filter: blur(2px); */
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            z-index: 99999;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

                .image{
                    width: 90%;
                    margin-top: 3vw;
                    height: 60%;
                    border-radius:  10px 10px 0 0 ;
                    box-shadow: -1px -1px 1px black;
                }
                .title{
                    background-color: #ffffff8e;


                }

            
            .description{
                display: block;
                width: 86%;
                padding: 2%;
                background-color: #774af1a9;
                color: white;
                border-radius: 10px 10px 0 0;
                padding-bottom: 60px;
                font-size: 24px;
                box-shadow: 2px -2px 5px -4px black;
                backdrop-filter: blur(5px);
            }
            .Buy{
                display: block;
            }
        }
    }
    
`

function Content({ day, disabled, data }) {
    // alert(JSON.stringify(data.image_0));
    return (
        <div className="crdd">
            <motion.img
                // transition={{ delay: 0.3 }}
                // initial={{ opacity: 0, top: "3rem" }}
                // animate={{ opacity: 1, top: "3rem" }}
                className='image' src={`${BACK_URL}/media/` + data.image_0} alt=""
            />
            <motion.h2
                className="title"
                layoutId="title"
                style={{ opacity: disabled ? 0.2 : 1 }}
            >
                {data.product_name}
            </motion.h2>
            <p className='price'>{data.price} <span>СОМ</span></p>
        </div>
    );
}

function ExpandedCard({ children, onCollapse }) {
    return (
        <>
            <motion.div
                className="card expanded"
                layoutId="expandable-card"
                onClick={onCollapse}
            >
                {children}
            </motion.div>
            {/* <motion.p
                className="card expanded secondary"
                onClick={onCollapse}
                transition={{ delay: 0.3 }}
                initial={{ opacity: 0, top: "6rem" }}
                animate={{ opacity: 1, top: "3rem" }}
            >
                Today is clear
            </motion.p> */}
        </>
    );
}

function CompactCard({ children, onExpand, disabled }) {
    return (
        <motion.div
            className="card compact"
            layoutId="expandable-card"
            onClick={disabled ? undefined : onExpand}
        >
            {children}
        </motion.div>
    );
}

function Card({ onCollapse, onExpand, disabled, data, day }) {
    const title = data.product_name
    const image = data.image
    const description = data.description
    const price = data.price
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);
    const [selectedId, setSelectedId] = useState(null)
    const [selected, setSelected] = useState(0);

    const [isExpanded, setIsExpanded] = useState(false);

    const collapseDate = () => {
        setIsExpanded(false);
        onCollapse();
    };

    const expandDate = () => {
        setIsExpanded(true);
        onExpand();
    };

    return (
        <div >
            <StyledCard>
                <div className="card-container">
                    <AnimateSharedLayout>
                        {isExpanded ? (
                            <ExpandedCard onCollapse={collapseDate} day={day}>
                                <div className='crd'>

                                    <img className='image' src={`${BACK_URL}/media/` + data.image_0} alt="" />

                                    <h3 className='title'>{title}</h3>
                                    <p className='price'>{price} <span>СОМ</span></p>
                                    <div className='Buy'>
                                        HGEll
                                    </div>



                                    {/* <p className="description"> */}
                                    <ReactMarkdown className='description'>
                                        {data.description}
                                    </ReactMarkdown>
                                    {/* </p> */}
                                </div>
                            </ExpandedCard>
                        ) : (
                            <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
                                <Content data={data} day={day} disabled={disabled} />
                            </CompactCard>
                        )}
                    </AnimateSharedLayout>
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