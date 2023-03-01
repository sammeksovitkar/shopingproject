import React, { Component } from 'react'
import './add.css'
import AddProduct from './AddProduct'
import EditForm from './EditForm'
export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {uname:"",pass:"",click:false}
  }
  namechange=(e)=>{
      let name = e.target.value
      this.setState({uname:name}) 
  }
  passChange=(e)=>{
    let pass = e.target.value
    this.setState({pass:pass}) 
}
buttonSubmit(e){
  e.preventDefault()
  this.setState({click:true})
  console.log(this.state.click)
}
  render() {
    return (
        <>

        <h1>Login form</h1>
    <form  >

      <div class = 'input-1'>
      <label >UserName</label>  
     <input  type="text" value={this.state.uname} onChange={this.namechange} />
        <br></br>
        <label > Password:</label>  
       <input type="text" value={this.state.pass} onChange={this.passChange} />
       <br></br>
   
        <button id='button' onClick={this.buttonSubmit} >SignIn</button>
        </div>
        </form>
        {this.state.click && <EditForm/>}
      </>
    )
  }
}
