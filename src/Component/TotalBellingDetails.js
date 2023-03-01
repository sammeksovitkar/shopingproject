import React from 'react'
import { useParams, } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
export default function TotalBellingDetails(props) {
    const total = useParams().total;
    console.log(total)
    const [userInfo, setUserInfo] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        email: "",
        mobile: ""
    })

    const userHandle = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }
    const checkOutButton = async(event) => {
        event.preventDefault();
        const userData = new FormData()
        userData.append("name", userInfo.name)
        userData.append("address", userInfo.address)
        userData.append("city", userInfo.city)
        userData.append("state", userInfo.state)
        userData.append("pincode", userInfo.pincode)
        userData.append("email", userInfo.email)
        userData.append("mobile", userInfo.mobile)

        // Post user Data
        await axios.post("http://127.0.0.1:8000/users/", userInfo).then((resp) => console.log(resp))
        alert("success")
    }

    return (
        <>
        <h2>My Orders </h2>
            <div className='mainTotal'>
                <div className='middleTotal'>
                    <span>Total Amount</span>
                    <span>{total}</span>
                </div>
                <div className='middleTotal'>
                    <span>Delivery</span>
                    <span>40</span>
                </div>
                <div className='middleTotal'>
                    <span >Order Total </span>
                    <span>{parseInt(total) + 40}</span>
                </div>

            </div>


            {/* user form  */}

            <form action="">
                <span className='totalTableMiddle' style={{}}>
                    {/* <label htmlFor=""> Name </label> */}
                    <input type="text" placeholder='Name' name='name' value={userInfo.name} onChange={userHandle} />
                </span>
                <span className='totalTableMiddle'>
                    {/* <label htmlFor=""> Address </label> */}
                    <input type="text" placeholder='Address' name='address' value={userInfo.address} onChange={userHandle} />
                </span>
                <span className='totalTableMiddle'>
                    {/* <label htmlFor=""> City </label> */}
                    <input type="text" placeholder='City' name='city' value={userInfo.city} onChange={userHandle} />
                </span>
                <span className='totalTableMiddle'>
                    {/* <label htmlFor=""> State </label> */}
                    <input type="text" placeholder='State' name='state' value={userInfo.state} onChange={userHandle} />
                </span>
                <span className='totalTableMiddle'>
                    {/* <label htmlFor="">Pincode </label> */}
                    <input type="text" placeholder='Pincode' name='pincode' value={userInfo.pincode} onChange={userHandle} />
                </span>
                <span className='totalTableMiddle'>
                    {/* <label htmlFor=""> Email </label> */}
                    <input type="text" placeholder='Email id ' name='email' value={userInfo.email} onChange={userHandle} />
                </span>
                <span className='totalTableMiddle'>
                    {/* <label htmlFor=""> Email </label> */}
                    <input type="text" placeholder='MobileNo' name='mobile' value={userInfo.mobile} onChange={userHandle} />
                </span>
                <br></br>
                <button onClick={checkOutButton}>CheckOut</button>
                <button>Cancel</button>
            </form>


        </>
    )
}
