import React from "react";
import Header from "./header";
import Footer from "./footer";

//import { Link } from "react-router-dom";

export default class SignIn extends React.Component {
  state = {
    email: '',
    pasword:  ''
  }
  handleInput(evt)
  { 
    //console.log(evt.currentTarget.value);
    const {name, value} = evt.currentTarget;
    this.setState({
      [name]: value,
    });
    console.log(this.state.name);
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(`http://localhost:8000/api/users/checkuser/${this.state.email}`,
     {
      method: 'POST',
      body: JSON.stringify({
        'email': this.state.email,
        'password': this.state.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(result=>result.json())
    .then(result=>{
      console.log(result);
      if(result.email)
      {
        window.location.replace('/dashboard/'+result.id)
      }
      else{
       alert('Invalid login')
      }
    })
    .catch(err=>console.log(err))
  }
 
      
  render() {
    return (
      <div>
        <Header></Header><br></br>
        <form onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="flex-container1">
          <h1>Sign in</h1>

            <div className="form-group">
              <label htmlFor="email">Email     </label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="email" placeholder="Email" required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={(evt)=>this.handleInput(evt)}  type="password" name="password" placeholder="password" required/>
            </div>
            <div className="form-group">
             <button>Sign In</button>
            </div>
            <br></br>
          </div>
          </form>

          <Footer></Footer>
          </div>
    );
  }
}
