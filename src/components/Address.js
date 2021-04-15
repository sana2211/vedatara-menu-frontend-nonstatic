import React from "react";
import './login.css';
import DashboardHeader from "./DashboardHeader";
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
    fetch('https://localhost:3000/api/bookmarks/'+id, {
      method: 'POST',
      body: JSON.stringify({
        'user_id': id,
        'RestaurantName': this.state.RestaurantName, 
        'StreetAddress': this.state.streetAddress,
        'PhoneNo': this.state.phoneNo,
        'City': this.state.city,
        'Country': this.state.country,
        'Timings': this.state.timings

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
        <DashboardHeader></DashboardHeader>
        <h1> Address</h1>

        <form onSubmit={(evt)=> this.handleSubmit(evt)}>

        <fieldset>
  <label htmlFor="restaurantname">Restaurant : </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" id="restaurantname" name="restaurantname"/><br></br>
  <label htmlFor="address">Street : </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" id="address" name="address"/><br></br>
  <label htmlFor="phone">Phone No: </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="integer" id="phone" name="phone"/><br></br>
  <label htmlFor="city">City: </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" id="city" name="city"/><br></br>
  <label htmlFor="country">Country: </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" id="country" name="country"/><br></br>
  
  <label htmlFor="timings">Timings: </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="number" id="timings" name="timings"/><br></br>
  </fieldset>
  <button>Add</button>

  </form>
  <Footer></Footer>

  </div>
    );
  }
}