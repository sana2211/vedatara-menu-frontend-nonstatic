import React, { Component } from 'react';
import './GetMenu.css';

class GetMenu extends Component {
    state = { data: [] }
    async fetchAPI() {
        const a = window.location.href.split('/');
        const id = a[a.length - 1]
   console.log(id);
        const baseURL1 = 'https://serene-retreat-26485.herokuapp.com/api/restaurants/'+id;
        const response = await fetch(baseURL1);
        const data = await response.json();
        console.log(data);
        this.setState({
            data: data
        })
      }
      componentDidMount()
      {
        this.fetchAPI();
      }

      handleDelete = (menuid) =>
      {
        console.log(menuid);
        fetch(`https://serene-retreat-26485.herokuapp.com/api/restaurants/${`${menuid}`}`, {
               method: 'DELETE',
        })                    
        .then(res => {
            if (!res.ok) {
              return res.json().then(error => {
                // then throw it
                throw error
              })
            }
            alert('Deleted!');
            this.fetchAPI();
          })
          .catch(error => {
            console.error(error)
          });
    }


    render() { 
      return ( 
          <div>
              <h5>Get Menu</h5>
              <form className="form2" onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="flex-container2">
            <div className="form-group"></div>
              <ul className="getmenu">
                  
              {
              this.state.data.map((item)=>{
                  return (<div className="flex-container2" key={item.id}>
     
                          <li>Type of Food: {item.typeOfFood}</li><br></br>
                          <li>Title: {item.title}</li><br></br>
                          <li>Description: {item.description}</li><br></br>
                          <li>Calories: {item.calories}</li><br></br>
                          <li>Price: {item.price}</li><br></br>

                          <button onClick={()=>this.handleDelete(item.id)}>                         
                           <i className="fas fa-trash"></i>
                            </button>
                          <br></br>
                          </div>
                  )
              })
               }
               </ul>
          </div>
          </form>
          </div>
       );
  }
}

export default GetMenu;