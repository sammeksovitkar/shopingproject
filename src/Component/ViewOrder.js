import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
export default function ViewOrder() {
    const path = "http://127.0.0.1:8000/"
    const [mainData, setMainData] = useState([])
    const [addedData, setAddedData] = useState([])
    useEffect(() => {
        axios.get(path).then((res) => setMainData(res.data).catch((err) => console.log(err)))
    }, [])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/cardid/").then((res) => setAddedData(res.data).catch((err) => console.log(err)))
    }, [])

    const displayView = mainData.filter((item) => addedData.find((item2) => item.id === item2.cardid))
    console.log(displayView)
    return (
        <>
            <h2>My Orders </h2>
           <div style={{padding:"15px"}}>
           <h3>Order View</h3>
            <table align='center' border={"1px"} width="60%">
                    <thead>
                        <th>Name</th>
                        <th>Info</th>
                        <th>Price</th>

                    </thead>

                    <tbody>
                        {
                            displayView.map((info) =>
                                <tr>
                                    <td>{info.name}</td>
                                    <td>{info.info}</td>
                                    <td>{info.price}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
           </div>
        </>
    )
}
