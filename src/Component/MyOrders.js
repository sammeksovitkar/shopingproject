import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MyOrders() {
    const [myOrder, setMyOrder] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/users/").then((res) => setMyOrder(res.data)).catch((err) => console.log(err))
    }, [])
    const cancelOrderBtn=async (id)=>{
        console.log(id)
        await axios.delete(`http://127.0.0.1:8000/users/${id}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
        const setData = myOrder.filter((data)=>data.id!==id)
        setMyOrder(setData)
    }
    return (
        <>
             <h2>My Orders </h2>
            <div style={{ padding: "20px" }}>
                <table align='center' border={"5"}>
                    <thead>
                       
                            <tr style={{ padding: "25px", border: "12" }}  >
                                <th>Sr No</th>
                                <th>OrderId</th>
                                <th>Name </th>
                                <th>Mobiler</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>View Products</th>
                                <th>Cancel Order</th>
                            </tr>
                    
                    </thead>
                    <tbody>
                        {
                            myOrder.map((info, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td> order id </td>
                                    <td>{info.name}</td>
                                    <td>{info.mobile}</td>
                                    <td>{info.address}</td>
                                    <td><button><Link to ="/vieworder"> View order </Link></button></td>
                                    <td>Pending</td>
                                    <td><button onClick={()=>cancelOrderBtn(info.id)}>cancel order</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
