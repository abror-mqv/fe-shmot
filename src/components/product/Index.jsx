import React from 'react'
import styled from '@emotion/styled'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BACK_URL } from '../../constants';

const StyledProduct = styled`
    .Product{
        
    }
`
function Product(props) {
    const { open, setOpen, handleClose, data } = { ...props }

    if (data != undefined) {
        console.log(data)
        const arr = [
            {
                image: data.image_0,
                color: data.color_0,
                name: data.color_name_0
            },
            {
                image: data.image_1,
                color: data.color_1,
                name: data.color_name_1
            },
            {
                image: data.image_2,
                color: data.color_2,
                name: data.color_name_2
            },
            {
                image: data.image_3,
                color: data.color_3,
                name: data.color_name_3
            },
            {
                image: data.image_4,
                color: data.color_4,
                name: data.color_name_4
            },
        ]
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="StyledBoxModal">
                    <Swiper navigation={true} modules={[Navigation]} slidesPerView={1}
                        spaceBetween={0} className="Swiper__main">
                        {arr.map((el) => {
                            // console.log(el.name) 
                            return (
                                <>
                                    <SwiperSlide>
                                        <img src={BACK_URL + '/media/' + el.image} alt="" className='Swiper__image' />
                                    </SwiperSlide>
                                </>
                            );
                        })}
                    </Swiper>
                    <h1 className='P_title'>{data.product_name}</h1>
                    <Button
                        variant="contained"
                        className="BoxModal__button"
                        color="success"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                    </Button>
                </div>
            </Modal>
        )
    }
    return (<></>)

}

export default Product