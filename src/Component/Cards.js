import React from 'react'
import './Card.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Cards(props) {
    const [cardadd, setCardAdd] = useState(false)
    const [datacard, setDataCard] = useState([])
    const [id, setId] = useState()

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/").then((res) => setDataCard(res.data))
    }, [])

    const addCartButton = (id, price) => {
        setCardAdd(true)
        axios.post("http://127.0.0.1:8000/cardid/", {
            cardid: id
        }).then((res) => console.log(res))
        alert("added successfully")
    }
    return (
        <>
            <div className="main">
                <div className="card">
                    <div className="image">
                        <img src={props.image} />
                    </div>
                    <div className="title">
                        <h3>
                            {props.name}</h3>
                    </div>
                    <div className="desc">
                        <p>{props.info}</p>
                    </div>
                    <div className="des">
                        <p> ₹ {props.price}</p>
                        <button onClick={() => addCartButton(props.id, props.price)} >Add To Cart</button>
                    </div>
                </div>
            </div>        
        </>
    )
}
