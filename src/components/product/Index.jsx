import React from 'react'
import styled from '@emotion/styled'
import Modal from "@mui/material/Modal";
import { Button } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Mousewheel,
    Pagination,
    Thumbs,
    Controller,
    EffectCube,
} from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BACK_URL } from '../../constants';
import TextField from "@mui/material/TextField";
import { useState } from 'react';
SwiperCore.use([Navigation, Pagination, Thumbs, Controller, EffectCube]);
function Product(props) {
    const { open, setOpen, handleClose, data } = { ...props }
    const [name, setName] = useState(null)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [currentSlide, setCutterntSlide] = useState(1);
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

        const ColorRounds = arr.map((el) => {
            return (
                <SwiperSlide>
                    <div className="ColorRound" style={{ backgroundColor: `${el.color}` }}>

                    </div>
                </SwiperSlide>
            )
        })

        return (

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="StyledBoxModal">
                    <Swiper className='Swiper__main' navigation={true} pagination={{ clickable: true }} controller={{ control: controlledSwiper }} thumbs={{
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                    }}>
                        {arr.map(el => {
                            return (
                                <SwiperSlide>
                                    <img src={BACK_URL + '/media/' + el.image} alt="" className='Swiper__image' />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <div className='AddToCart'>
                        <div className="Liner">
                            {data.siezes}
                        </div>
                        <div className="Counter">
                            <TextField
                                variant="outlined"
                                id="outlined-controlled"
                                label="Кол-во линеек"
                                value={name}
                                type='number'
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </div>
                        <div className="AddButton" onClick={() => {
                            alert(name)
                        }}>

                        </div>
                    </div>
                    <div className="Colors">
                        Цвета в наличии:
                        <Swiper
                            id="thumbs"
                            // spaceBetween={1}
                            slidesPerView={5}
                            onSwiper={setThumbsSwiper}
                            className="HeaderLine"
                        >
                            {ColorRounds}
                        </Swiper>
                    </div>
                    <h1 className='P_title'>{data.product_name} </h1>
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




//     <Swiper Swiper
// navigation = { true}
// modules = { [Navigation]}
// slidesPerView = { 1}
// spaceBetween = { 0}
// className = "Swiper__main"
//     // pagination={{
//     //     clickable: true,
//     // }}
//     // controller={{ control: controlledSwiper }}
//     // thumbs={{
//     //     swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//     // }}
//     // onSlideChange={(swiper) => {
//     //     console.log("slide change, ", swiper.activeIndex);
//     //     setCutterntSlide(swiper.activeIndex);
//     // }}
//     >
// {
//     arr.map((el) => {
//         // console.log(el.name)
//         return (
//             <>
//                 <SwiperSlide>
//                     <img src={BACK_URL + '/media/' + el.image} alt="" className='Swiper__image' />
//                 </SwiperSlide>
//             </>
//         );
//     })
// }
// </Swiper >