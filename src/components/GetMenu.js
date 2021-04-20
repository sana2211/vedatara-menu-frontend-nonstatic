import React, { Component } from 'react';
//import './GetMusic.css';

class Getmusic extends Component {
    state = { data: [] }
    async fetchAPI() {
        const a = window.location.href.split('/');
        const id = a[a.length - 1]
        console.log(id);
        const baseURL1 = 'http://localhost:8000/api/restaurants/'+id;
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
        fetch(`http://localhost:8000/api/restaurants/${menuid}`, {
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
              <h2>Get Menu</h2>
              <form className="form2" onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="flex-container2">
            <div className="form-group"></div>
              <ul className="getmenu">
                  
              {
              this.state.data.map((item)=>{
                  return (<div class="flex-container2" key={item.id}>
                          <li>Kind of Food: {item.kindoffood}</li><br></br>
                          <li>Title: {item.title}</li><br></br>
                          <li>Description: {item.description}</li>
                          <li>Calories: {item.calories}</li>
                          <li>Price: {item.price}</li>

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

export default Getmusic;