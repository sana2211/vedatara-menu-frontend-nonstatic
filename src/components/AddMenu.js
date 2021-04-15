import React from "react";
import Footer from "./footer";
import './login.css';
import DashboardHeader from "./DashboardHeader";


export default class addMenu extends React.Component {

  state = {
    title: '',
    description: '',
    calories:  ''
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
    if(!this.state.title)
    {
      alert("'Name of the dish' is Required");
      return false;
    }
    console.log(JSON.stringify({
      'user_id': id,
      'title': this.state.title, 
      'calories': this.state.calories,
      'description': this.state.description
    }));
    fetch('http://localhost:8000/api/restaurants/'+id, {
      method: 'POST',
      body: JSON.stringify({
        'user_id': id,
        'title': this.state.title, 
        'calories': this.state.calories,
        'description': this.state.description
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
        }
      })
    .catch(err=>console.log(err))
  }
  render() {
    //const { menu } = this.props

return (
<div>
        <h1> Add Menu</h1>      
       
<form onSubmit={(evt)=> this.handleSubmit(evt)} class="border" action="editAccount" >
<fieldset>
  <p>What kind of food is served in your restaurant?</p>
  <div className="flexbox">
  <input onChange={(evt)=>this.handleInput(evt)} type="checkbox" className="flex"></input>
      "Vegan"
    <input onChange={(evt)=>this.handleInput(evt)} type="checkbox" className="flex"></input>
      "Veg"
      <input onChange={(evt)=>this.handleInput(evt)} type="checkbox" className="flex"></input>
      "Non-Veg"
  </div>
  <p></p>
  <label htmlFor="Name of the Dish">Name of the Dish </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="name" name="title" required></input>
  <p></p>
  <label htmlFor="Description">Description </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="price" name="description" required></input>
  <p></p>
  <label htmlFor="Calories"> Calories  </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="ingredients" name="calories" required></input>
  <p></p>
  </fieldset> 

  <button>Add Menu</button>

</form>
                   
          <Footer></Footer>
            </div>

    );
  }
}