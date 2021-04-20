import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const style = {
  color: 'white',
  'textDecoration': 'none'
};

function Header(props) {
  //const { data} = props;
  return (
    
        <nav>
           <ul className="menuul">
            <li><Link to="/"style={style}>Home</Link></li>
            <li><Link to="/signup">Sign-up</Link></li>
            <li><Link to="/signin">Sign-In</Link></li>

            </ul>
        </nav>
   
   
       
    );
}
  export default Header;
  