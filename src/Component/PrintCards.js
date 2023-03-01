// import React, { Component } from 'react'
// import axios from 'axios';
// import Cards from './Cards';
// import { CartProvider, useCart } from "react-use-cart";
// const { addItem } = useCart();
// export default class PrintCards extends Component {
//     constructor(props){
//         super(props)
//         this.state={data:[]}
//     }

//     componentDidMount() {
//         axios.get("http://127.0.0.1:8000/")
//         .then(data => this.setState({data:data.data}) )
      
//         .catch(error => console.log(error));
        
//       }
//   render() {
    // return (
    //   <div >
    //   <h1>cards</h1>
    //   <div className="cardLayout">
    //     {
    //       this.state.data.map((each) =>(
    //         <div   key={each.id}>
           
    //         <Cards name={each.name} info={each.info} price = {each.price} image = {"http://127.0.0.1:8000" + each.image} />
           
           
         
    //         </div>
    //       ))
    //     }
    //     </div>
    //   </div>
    // )
//   }
// }
import { CartProvider, useCart } from "react-use-cart";
import Cards from './Cards';
import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
export default function PrintCards(props) {
  const[data,setData]=useState([])
  const { addItem } = useCart();
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/")
        .then(data => setData(data.data) )
          
        .catch(error => console.log(error));
  },[])
  

  return (
   
      <div >
      <h1>cards</h1>
      <div className="cardLayout">
        {
          data.map((each) =>(
          
            <div   key={each.id}>
           
            <Cards name={each.name} id={each.id} info={each.info} price = {each.price} image = {"http://127.0.0.1:8000" + each.image} />
           
          
         
            </div>
          ))
        }
        {console.log("dta",data)}
        </div>
    
    </div>
  )
}
