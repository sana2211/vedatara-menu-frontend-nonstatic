import React from "react";
import Footer from "./footer";
import './login.css';


export default class addMenu extends React.Component {

  state = {

    title: '',
    type: '',
    description: '',
    calories:  '',
    price: ''
  }
  handleInput(evt)
  { 
    
    const {name, value} = evt.currentTarget;
    console.log(value)
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
    if(!this.state.title)
    {
      alert("'Title' is Required");
      return false;
    }
  
    fetch('https://serene-retreat-26485.herokuapp.com/api/restaurants/'+id,{

    
      method: 'POST',
      body: JSON.stringify({
        'user_id': id,
        'title': this.state.title,
        'description': this.state.description,
        'calories': this.state.calories,
        'price': this.state.price, //convert this with parseDouble
        'type': this.state.type, 

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
          alert("Menu Updated!");
          window.location.reload();
        }  })
    .catch(err=>console.log(err))
    }
  render() {
    //const { menu } = this.props

return (
<div>
        <h1> Add Menu</h1>      
       
<form onSubmit={(evt)=> this.handleSubmit(evt)} className="border" action="editAccount" >
<fieldset>
  <p>What type of food is served ?</p>
  <div className="flexbox">
  <input value="Vegan" name="type" onChange={(evt)=>this.handleInput(evt)} type="radio" className="flex" required></input>
      "Vegan"
    <input value="Veg" name="type" onChange={(evt)=>this.handleInput(evt)} type="radio" className="flex" required></input>
      "Veg"
      <input value="Non-Veg" name="type" onChange={(evt)=>this.handleInput(evt)} type="radio" className="flex" required></input>
      "Non-Veg"
  </div>
  <label htmlFor="Title"> Title </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="name" name="title" required></input>
  <p></p>
  <label htmlFor="Description">Description </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" name="description" required></input>
  <p></p>
  <label htmlFor="Calories"> Calories  </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" name="calories" required></input>
  <p></p>
  <label htmlFor="Price">Price </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="text" name="price" required></input>
  <p></p>
  </fieldset> 

  <button>Add Menu</button>

</form>
                   
          <Footer></Footer>
            </div>

    );
  }
}