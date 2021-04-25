import React from "react";
import Header from "./header";
import Footer from "./footer";
export default class SignUp extends React.Component {

  state = {
    fullname: '',
    email: '',
    password:  '',
    jobTitle: '',
    address:  '',

  }

  handleInput(evt)
  { 
    //console.log(evt.currentTarget.value);
    const {name, value} = evt.currentTarget;
    this.setState({
      [name]: value,
    });
    console.log(this.state.fullname);
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('https://vedatara-menu-backend.herokuapp.com/api/users', 
    {
      method: 'POST',
      body: JSON.stringify({
        'fullname': this.state.fullname, 
        'email': this.state.email,
        'password': this.state.password,
        'jobTitle': this.state.jobTitle,
        'address': this.state.address


      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(result=>{
      if(result.ok){
        alert("Thank you for your registration!")
      window.location.replace('/signin')
      }
    })
    .catch(err=>console.log(err))
  }
  render() {
    return (
      <div>
        <Header></Header><br/><br></br>
        <form className="form3" onSubmit={(evt)=> this.handleSubmit(evt)}>
            <h4> Sign up </h4>

          <div className="flex-container1">
            <div className="form-group">
              <label htmlFor="fullname">Fullname</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="fullname" placeholder="fullname" required/>
            </div>
            <div className="form-group">
              <label htmlFor="jobTitle">Job Title</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="jobTitle" placeholder="jobTitle" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="address" placeholder="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="text" name="email" placeholder="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={(evt)=>this.handleInput(evt)} type="password" name="password" placeholder="password" required/>
            </div>
            <div className="form-group">
             <button>Sign Up</button>
            </div>
            <br></br>
          </div>
          </form>
          <Footer></Footer>
            </div>

    );
  }
}
