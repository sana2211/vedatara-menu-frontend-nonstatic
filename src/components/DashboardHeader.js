import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const style = {
  color: 'white',
  'textDecoration': 'none'
};
function DashboardHeader(props) {
  return (

    <nav>
      <ul>
        <ul className="menuul">

        <li><Link to="/"style={style}>Log out</Link></li>
        <li><Link to="/addMenu"style={style}>Add Menu</Link></li>
        <li><Link to="/address"style={style}>Edit Info</Link></li>

         </ul>
      </ul>
    </nav>

        
    );
}
  export default DashboardHeader;
