import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div>
      
      <div className='nav-bar'>
      <h3 id='heading'>Online Shoping </h3>
        <nav>
            <Link className = 'link' to=""></Link>
            <Link className = 'link' to="addproduct">Admin</Link>
            <Link className ='link' to="printcard">Cards</Link>
            <Link className = 'link' to="/login">Login</Link>
            <Link className = 'link' to="/productlist">Product List</Link>
            <Link className='link' to = "/addedcarts" >Added Carts</Link>
            <Link className='link' to = "/myorder" >MyOrders</Link>
            
        </nav>
        </div>
      </div>
    )
  }
}
