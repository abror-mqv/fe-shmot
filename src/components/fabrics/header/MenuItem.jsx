import * as React from "react";
import { motion } from "framer-motion";

import styled from 'styled-components'

const StyledIconPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
  background-image: url("https://a376-212-112-100-242.ngrok-free.app/pics/deal.png");
  object-fit: cover;
  object-position: center;
`
const StyledTextPlaceHolder = styled.div`
      border-radius: 5px;
        width: 200px;
        height: 20px;
        flex: 1;
        padding: 4px;
`
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};



const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, data }) => {
    const style = { border: `2px solid ${colors[i]}` };
    const StyledMenuItem = styled.div`
background-color: #ffffff58;
  background-image: url(${`/pics/${data.picture}`});
  background-position: center;
  background-size: 28px;
  background-repeat: no-repeat;
`;
    const StyledFuckingText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  text-align: start;
  height: 100%;
  font-weight: 600;
  padding-bottom: 2px;
  font-size: 14px;
`;
    return (
        <motion.div
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <a to={data.link}>
                <motion.li
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <StyledMenuItem
                        className="icon-placeholder"
                        style={style}
                    ></StyledMenuItem>
                    <StyledFuckingText className="text-placeholder" style={style}>
                        {data.title}
                    </StyledFuckingText>
                </motion.li>
            </a>
        </motion.div>
    );
};
