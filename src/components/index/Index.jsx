import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../fabrics/card/Card'
import Header from '../fabrics/header/Header'
import Nav from '../fabrics/nav/Nav'
import Burger from '../fabrics/header/Burger'
import { BACK_URL } from '../../constants'

 
function Index() {
    const { id } = useParams()
    const [data, setData] = useState([])
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
    function Hero() {
        if (data.product != undefined) {
            if ((data.products.find(product => product.id == current).children) != undefined) {
                return (
                    <>
                        {
                            data.products ? data.products.find(product => product.id == current).children?.map(el => {

                                return (
                                    <Card data={el} key={el.id}
                                        day={el.id}
                                        disabled={expandedDay !== el.id && expandedDay !== undefined}
                                        onExpand={() => setCollapsedDay(el.id)}
                                        onCollapse={() => setCollapsedDay()} />
                                )
                            }) : 'Empty as my heart '
                        }
                        {
                            data.products ? data.products.find(product => product.id == current).children?.map(el => {

                                return (
                                    <Card data={el} key={el.id}
                                        day={el.id}
                                        disabled={expandedDay !== el.id && expandedDay !== undefined}
                                        onExpand={() => setCollapsedDay(el.id)}
                                        onCollapse={() => setCollapsedDay()} />
                                )
                            }) : 'Empty as my heart'
                        }</>
                )
            } else {
                return ("Empty as my heart")
            }
        } else {
            return ("Preparing")
        }


    }
    return (
        <div>
            <Header />
            <Burger />
            <Nav current={current}>
                {
                    data.products?.map(el => { return (<h4 key={el.id} className={current==el.id?'selected':'unselected'} onClick={e => { setCurrent(el.id)}}>{el.subsubcat_name}</h4>) })
                }
                
                
            </Nav>
            <div className="hero">
                {/* <Hero /> */}{
                    (data.products) ? data.products?.find(product => product.id == current)?.children?.map(el => {
                        console.log(44444444444444 + data.product)
                        return (
                            <Card data={el} key={el.id}
                                day={el.id}
                                disabled={expandedDay !== el.id && expandedDay !== undefined}
                                onExpand={() => setCollapsedDay(el.id)}
                                onCollapse={() => setCollapsedDay()} />
                        )
                    }) : 'preparing'
                }
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