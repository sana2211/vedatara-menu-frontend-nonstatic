import React from "react";
import Footer from "./footer";
import './login.css';
import DashboardHeader from "./DashboardHeader";


export default class addMenu extends React.Component {

  state = {
    NameOfTheDish: '',
    artist: '',
    url:  ''
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
    fetch('https://localhost:3000/api/bookmarks/'+id, {
      method: 'POST',
      body: JSON.stringify({
        'user_id': id,
        'title': this.state.title, 
        'artist': this.state.artist,
        'url': this.state.url
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
        <DashboardHeader></DashboardHeader>
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
  <input onChange={(evt)=>this.handleInput(evt)} type="name" id="name" required></input>
  <p></p>
  <label htmlFor="Price of the Dish">Price of the Dish </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="price" id="price" required></input>
  <p></p>
  <label htmlFor="Ingredients"> Ingredients  </label>
  <input onChange={(evt)=>this.handleInput(evt)} type="ingredients" id="ingredients" required></input>
  <p></p>
  </fieldset> 

  <button>Add Menu</button>

</form>
                   
          <Footer></Footer>
            </div>

    );
  }
}