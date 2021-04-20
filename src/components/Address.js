import React from "react";
import './login.css';
import Footer from "./footer";



export default class addaddress extends React.Component {

  state = {
    RestaurantName: '',
    StreetAddress: '',
    PhoneNo:  '',
    City: '',
    Country:  '',
    Timings: ''
  }

  componentDidMount()
  {
    const a = window.location.href.split('/');
        const id = a[a.length - 1]
        console.log(id);
    fetch('http://localhost:8000/api/address/'+id)
    .then(response=>response)
    .then(response=>{
      this.setState({
        'RestaurantName': response.RestaurantName, 
        'StreetAddress': response.StreetAddress,
        'PhoneNo': response.PhoneNo,
        'City': response.City,
        'Coutry': response.Country,
        'Timings': response.Timings
      })
    })
    .catch(err=>console.log(err))
  }
  
  handleInput(evt)
  { 
    
    const {name, value} = evt.currentTarget;
    this.setState({
      [name]: value,
    });
   
  }
  handleSubmit = (evt) => {
    //Add validation
const a = window.location.href.split('/');
const id = a[a.length - 1]
console.log(id);
evt.preventDefault();
    if(!this.state.RestaurantName)
    {
      alert("RestaurantName is Required");
      return false;
    }
    fetch('http://localhost:8000/api/address/'+id, {
      method: 'POST',
      body: JSON.stringify({
        'RestaurantName': this.state.RestaurantName, 
        'StreetAddress': this.state.StreetAddress,
        'PhoneNo': this.state.PhoneNo,
        'City': this.state.City,
        'Coutry': this.state.Country,
        'Timings': this.state.Timings

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //.then(result=>console.log(result.json()))
    .then(response=>response.json())
    .then(response=>
      {
        if(response)
        {
          alert("Restaurant Added!");
          window.location.reload();
        }
      })
    .catch(err=>console.log(err))
  }

  render() {
        //const { RestaurantName } = this.props

    return (

      <div>
        <h1> Address</h1>

        <form  onSubmit={(evt)=> this.handleSubmit(evt)}>

        <fieldset>
  <label htmlFor="restaurantname">Restaurant : </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" id="RestaurantName" name="RestaurantName" value={this.state.RestaurantName} required></input>
  <label htmlFor="address">Street : </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" id="StreetAddress" name="StreetAddress" value={this.state.StreetAddress} required></input>
  <label htmlFor="phone">Phone No: </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="integer" id="PhoneNo" name="PhoneNo" value={this.state.PhoneNo} required></input>
  <label htmlFor="city">City: </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" id="City" name="City"required></input>
  <label htmlFor="country">Country: </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" id="Country" name="Country"required></input>
  
  <label htmlFor="timings">Timings: </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="number" id="Timings" name="Timings"required></input>
  </fieldset>
  <button>Add</button>

  </form>
  <Footer></Footer>

  </div>
    );
  }
}