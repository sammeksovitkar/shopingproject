
import React, { useEffect, useState } from 'react'
import axios from "axios";
import AddProduct from './AddProduct';
import "./Itemlist.css"
import EditForm from './EditForm';

export default function ItemList() {
    const [data, setData] = useState([])
    const[editdata,setEditdata]=useState(false)
    let mount = false
    useEffect(() => {
        mount = true
        getData()
            .then(res => {
                console.log("res from api", res)
                setData(res)
                return () => mount = false
            })
    }, [])
    function getData() {
        return axios.get('http://127.0.0.1:8000/')
        .then(res => {
          return res.data
        })}
    function deletedata(id) {
        console.log(id)
        return axios.delete(`http://127.0.0.1:8000/${id}/`)
            .then(res => {
                console.log(data)
                return res.data
            })
    }
    const deleteBtn = (id) => {
        deletedata(id)
        .then(res => {
           setData(data.filter(p=> p.id !== id))
           console.log(data)

        })
        alert("Data Deleted SuccessFully ")
    }
    const editBtn=(element)=>{
        setEditdata(true)
        
    }
    return (
        <>
        <div className='main'>
            <h3>Product LIST</h3>
            <div className='align'>
            <table border={"2px"} cellSpacing={"2px"} align="center"  id='tab' width={"60%"} cellPadding={"10px"}  >
                <thead border="1">
                    <tr>
                        <th>Name</th>
                        <th>Info</th>
                        <th>Price</th>
                        <th>image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(element => {
                        return <tr key={element.id}>
                            <th>{element.name}</th>
                            <th>{element.info}</th>
                            <th>{element.price}</th>
                            {/* <td>{element.image}</td> */}
                            <th> <img src={"http://127.0.0.1:8000" + element.image} alt="img" /></th>
                       
                            <td>
                            <button onClick={()=>editBtn(element)} >Edit</button>
                             <button onClick={()=>deleteBtn(element.id)}>Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
            </div>
            {/* <button>Add New Product </button> */}
            {editdata && <EditForm/>}
            </div>
        </>
    )
}
