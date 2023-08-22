import React from 'react'
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styled from 'styled-components'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(40px at 27px 30px)",
        transition: {
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const StyledBurger = styled.nav`
z-index: 1;
position: fixed;
    .closed{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 300px;
        z-index: -5;
        margin-left: -1000px;
        button{
            margin-left: 1000px;
        }
        ul{
            z-index: -9;
            margin-left: -1000px;
            display: none;
        }
        .background{
            box-shadow:  5px 5px 10px #d4d4d4,
             -5px -5px 10px #ffffff;
        margin-left: -1000px;
                z-index: -5;
        }
    }    
    .open{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 300px;
        .background{
            background-color: white;
            z-index: 9;
            width: 300px;
            height: 105vh;
            border-right: 4px solid #764AF1;
        }
        button{
                z-index: 9999999;
            }
            ul{
                z-index: 9999;
            }
    }
`

function Burger() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    return (
        <StyledBurger>
            <motion.nav
                initial={true}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className={isOpen ? "open" : "closed"}
            >
                <motion.div className="background" variants={sidebar} />
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        </StyledBurger>
    )
}

export default Burger