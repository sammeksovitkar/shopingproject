import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import logo192 from '../logo192.png'
export default function EditForm() {
    const [name,setName] = useState({name:""})
    const [info,setInfo] = useState({info:""})
    const [price,setPrice] = useState({price:""})
    const [image,setImage] = useState({image:""})
  
    const changename=(e)=>{
        let value = e.target.value
        setName({name:value})
    }
    const changeInfo=(e)=>{
        let value = e.target.value
        setInfo({info:value})     
    }
    const changePrice=(e)=>{
        let value = e.target.value
        setPrice({price:value})    
    }
    const changeImage=(e)=>{
        let value = e.target.value
        setImage({image:value})    
    }
    const submitBtn=(e)=>{
        
     console.log(name)
        let formData = new FormData()
        formData.append("id",34)
        formData.append("name",name)
        formData.append("info",info)
        formData.append("price",price)
        formData.append("image",logo192)

       
        console.log("formdata",formData)
        e.preventDefault();  
        axios({
          url:"http://127.0.0.1:8000/34/",
          method:"put",
          data:formData}).then((res)=>{console.log(res)}).catch((error)=>{
            console.log(error)
          })
          alert("added successfully")
        }
    
  return (
    <div>
    <form encType='multipart/form-data'>
        <label htmlFor="">Name:</label>
        <input type="text" onChange={changename} name="name" value={name.name}/>
  
        <label htmlFor="">info:</label>
        <input type="text" onChange={changeInfo} name="info" value={info.info}/>
  
        <label htmlFor="">price:</label>
        <input type="text" onChange={changePrice} name="price" value={price.price}/>
  
        <label htmlFor="">image:</label>
        <input type="file" onChange={changeImage} name="name" value={image.image}/>
  
        <button onClick={submitBtn}>Edit</button>
    </form>  
    </div>
  )
  }
