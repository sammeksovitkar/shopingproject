import React, { Component } from 'react'
import axios from "axios";
import './add.css'
export default class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", info: "", price: "", data: [], image: "" }
    this.btnclick = this.btnclick.bind(this)
  }
  nameChange = (e) => {
    let name = e.target.value
    this.setState({ name: name })
    console.log(this.state.nam)
  }
  infoChange = (e) => {
    let info = e.target.value
    this.setState({ info: info })
    console.log(this.state.info)
  }
  priceChange = (e) => {
    let price = e.target.value
    this.setState({ price: price })
    console.log(this.state.price)
  }
  fileChange = (e) => {
    let fileName = document.getElementById('file').files[0]
    console.log(typeof fileName)
    this.state.image = fileName
    console.log("file", this.state.image)
  }


  btnclick = (e) => {
    let formdata = new FormData();
    formdata.append("name", this.state.name)
    formdata.append("info", this.state.info)
    formdata.append("price", this.state.price)
    formdata.append("image", this.state.image)
    console.log("formdsta", formdata)
    e.preventDefault();
    axios({
      url: "http://127.0.0.1:8000/",
      method: "post",
      data: formdata
    }).then((res) => { console.log(res) }).catch((error) => {
      console.log(error)
    })
    alert("added successfully")
  }
  render() {
    return (
      <div>
        <h1>Add Product </h1>
        <form encType='multipart/form-data' >
          <div class='input-1'>
            <label >Product Name :</label>
            <input type="text" value={this.state.name} onChange={this.nameChange} />
            <br></br>
            <label > Information :</label>
            <input type="text" value={this.state.info} onChange={this.infoChange} />
            <br></br>
            <label > Price :</label>
            <input type="text" value={this.state.price} onChange={this.priceChange} />
            <br></br>
            <label > Image :</label>
            <input type="file" id="file" onChange={this.fileChange} />
            <br></br>
            <button id='button' onClick={this.btnclick}>Add Product</button>

          </div>
        </form>

      </div>
    )
  }
}

