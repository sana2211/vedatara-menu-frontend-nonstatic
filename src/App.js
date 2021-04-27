import React, {Component } from "react";
import './App.css';
//mport signIn from "./components/signIn";
//import signUp from "./components/signUp";
//import { Link } from "react-router-dom";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
import Footer from "./components/footer";

class App extends Component{
  state= {
    data: []
  }
  componentDidMount()
  {
    fetch("https://serene-retreat-26485.herokuapp.com/api/restaurants")
        .then(res=>res.json())
        .then(res => this.setState({
          data: res
          }))
          .catch(error => {
            console.error(error)
          });
    }
render()
  {
    console.log(this.state.data);
    return (
    <div className="app">
      <Header>
      </Header>
      <main>
      <SubHeader></SubHeader>
      </main>
      <ul>
      {
        <li>{JSON.stringify(this.state.data)}</li>
      }
      </ul>
      
      <Footer></Footer>
    </div>
  );
  }

}

export default App;
