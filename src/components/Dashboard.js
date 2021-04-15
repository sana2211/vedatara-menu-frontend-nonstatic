import React, {Component} from 'react';
import DashboardHeader from "./DashboardHeader";
//import Footer from "./footer";
//import Address from "./Address";
//import AddEmployee from './AddEmployee';

class Dashboard extends Component{
    state = {
        fullname: ''
    }
    componentWillMount(){
        const a = window.location.href.split('/');
        const id = a[a.length - 1]
        fetch(`http://localhost:3000/api/users/${id}`)
        .then(result=>result.json())
        .then(result=>{
          this.setState({
              fullname: result.fullname
          })
        })
        .catch(err=>console.log(err))
        }
    
    render(){
        //console.log(this.props.match.params.id)

        return(
            <div className="dashboard">
             <DashboardHeader currentUser={this.state.fullname}></DashboardHeader>
                 <section>

                     </section>   
                     <br>
                     </br>
                     </div>

      
        )};
}

  
export default Dashboard