import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '../fabrics/card/Card'
import Header from '../fabrics/header/Header'
import Nav from '../fabrics/nav/Nav'
import { Navigation } from '../fabrics/header/Navigation'
import Burger from '../fabrics/header/Burger'
import { BACK_URL } from '../../constants'



function Index() {
    const { id } = useParams()

    const [data, setData] = useState([])

    useEffect((e) => {
        axios.get(`${BACK_URL}/api/subcat/${id}`).then(res => {
            setData(res.data);
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    const [current, setCurrent] = useState(1)
    const [expandedDay, setCollapsedDay] = useState();
    const days = [25, 26, 27, 28, 29];
    return (
        <div>
            <Header />
            <Burger/>
            <Nav>
                {
                    data.products?.map(el => { return (<h4 key={el.id} onClick={e => { setCurrent(el.id); console.log(current) }}>{el.subsubcat_name}</h4>) })
                }
            </Nav>
            <div className="hero">
                {
                    data.products ? data.products.find(product => product.id == current).children?.map(el => {

                        return (
                            <Card data={el} key={el.id}
                                day={el.id}
                                disabled={expandedDay !== el.id && expandedDay !== undefined}
                                onExpand={() => setCollapsedDay(el.id)}
                                onCollapse={() => setCollapsedDay()} />
                        )
                    }) : 'preparing'
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
                    }) : 'preparing'
                }
               
            </div>
        </div>
    )
}

export default Index