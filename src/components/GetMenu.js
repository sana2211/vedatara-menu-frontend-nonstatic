import React, { Component } from 'react';
import './GetMusic.css';

class Getmusic extends Component {
    state = { data: [] }
    async fetchAPI() {
        const a = window.location.href.split('/');
  const id = a[a.length - 1]
  console.log(id);
        const baseURL1 = 'https://musicappbackend101.herokuapp.com/api/bookmarks/'+id;
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

      handleDelete = (musicid) =>
      {
        fetch(`https://musicappbackend101.herokuapp.com/api/bookmarks/${`${musicid}`}`, {
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
              <h2>Get music</h2>
              <form onSubmit={(evt)=> this.handleSubmit(evt)}>
          <div className="flex-container2">
            <div className="form-group"></div>
              <ul className="getmusicul">
                  
              {
              this.state.data.map((item)=>{
                  return (<div class="flex-container2" key={item.id}>
                          <li>TITLE: {item.title}</li><br></br>
                          <li>ARTIST: {item.artist}</li><br></br>
                          <li>URL: {item.url}</li>
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