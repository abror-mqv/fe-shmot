import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../fabrics/card/Card'
import Header from '../fabrics/header/Header'
import Nav from '../fabrics/nav/Nav'
import Burger from '../fabrics/header/Burger'
import { BACK_URL } from '../../constants'
import Test from '../product/Test'
import Product from '../product/Index'


function Index() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    useEffect((e) => {
        axios.get(`${BACK_URL}/api/subcat/${id}`).then(res => {
            setData(res.data);
            setCurrent(res.data.products[0].id)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    const [current, setCurrent] = useState(1)
    const [expandedDay, setCollapsedDay] = useState();
    const [productData, setProductData] = useState()
    return (
        <div>
            <Header />
            <Burger />
            <Nav current={current} data={data} setCurrent={setCurrent} />
            <div className="hero" >
                {
                    (data.products) ? data.products?.find(product => product.id == current)?.children?.map(el => {
                        console.log(44444444444444 + data.product)
                        return (
                            <div onClick={() => { setOpen(true); setProductData(el) }}>
                                <Card data={el} key={el.id} />
                            </div>

                        )
                    }) : 'preparing'
                }
                <Product handleClose={handleClose} setOpen={setOpen} open={open} data={productData}/>
                {/* <Test handleClose={handleClose} setOpen={setOpen} open={open} data={0}/> */}
            </div>
            
        </div>
    )
}

export default Index













// <div className="hero">
//                 {
//                     data.products ? data.products.find(product => product.id == current).children?.map(el => {

//                         return (
//                             <Card data={el} key={el.id}
//                                 day={el.id}
//                                 disabled={expandedDay !== el.id && expandedDay !== undefined}
//                                 onExpand={() => setCollapsedDay(el.id)}
//                                 onCollapse={() => setCollapsedDay()} />
//                         )
//                     }) : 'preparing'
//                 }
//                 {
//                     data.products ? data.products.find(product => product.id == current).children?.map(el => {

//                         return (
//                             <Card data={el} key={el.id}
//                                 day={el.id}
//                                 disabled={expandedDay !== el.id && expandedDay !== undefined}
//                                 onExpand={() => setCollapsedDay(el.id)}
//                                 onCollapse={() => setCollapsedDay()} />
//                         )
//                     }) : 'preparing'
//                 }
//             </div>