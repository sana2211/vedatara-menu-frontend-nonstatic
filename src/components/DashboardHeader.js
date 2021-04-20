import React from "react";
import { Link } from "react-router-dom";
import './header.css';
import './login.css';

const style = {
  color: 'white',
  'textDecoration': 'none'
};
function DashboardHeader(props) {
  return (

    <nav>
      <ul>
        <li><Link to="/"style={style}>Log out</Link></li>
      </ul>
    </nav>

        
    );
}
  export default DashboardHeader;
