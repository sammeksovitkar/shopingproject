import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TotalBellingDetails from './TotalBellingDetails'
import { Link } from 'react-router-dom'
export default function AddToCart(props) {
    const ans = true
    // const [addcart,setAddCart]=useState([])
    const [allcards, setAllCards] = useState([])
    const [addedcarts, setAddedCarts] = useState([])
    const [totalAmount, setTotalAmount] = useState(false)
    

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/cardid/").then((res) => setAddedCarts(res.data))
    }, [])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/").then((res) => setAllCards(res.data))
    }, [])

    let addcards = allcards.filter((item) => {
        return addedcarts.find((item2) => {
            return item2.cardid === item.id;
        });
    });

    let total = addcards.reduce((a, v) => a = a + v.price, 0)
    const removeClick = async (id) => {
        let value = addedcarts.find((data) => { return data.cardid === id })
        let mainvalue = value.cardpk
        await axios.delete(`http://127.0.0.1:8000/cardid/${mainvalue}`).then((res) => console.log(res))
        let remainingData = allcards.filter((data)=>data.id!==id)
        setAllCards(remainingData)
 
    }
   
    return (
        <>
            <h1> Added Cards </h1>
            <table border={"2px solid"} width={"70%"} align={"center"} style={{ margin: "50" }}>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Info</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>

                    </tr>

                    {
                        addcards.map((item3) => {
                            return (

                                <tr key={item3.id}>
                                    {/* {setTotalAmount(totalAmount+item3.price)} */}
                                    <td>{item3.name}</td>
                                    <td>{item3.info}</td>
                                    <td>{item3.price}</td>
                                    <td><img src={"http://127.0.0.1:8000" + item3.image} alt="" /></td>
                                    {/* <td>{data.image}</td> */}
                                    <td><button onClick={() => removeClick(item3.id)}>Remove </button></td>

                                </tr>

                            )
                        })

                    }

                </tbody>

            </table>

            {<h4 align={"center"} color={"red"} >total amount is : {total}</h4>}
            <button><Link  to={`/payment/${total}`}>Proced to payment </Link></button>
            
            
           </> 
            )}