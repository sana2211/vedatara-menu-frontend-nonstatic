import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './components/signUp';
import SignIn from './components/signIn';

import Dashboard from './components/Dashboard';
import Address from './components/Address';
import AddMenu from './components/AddMenu';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact={true} path="/"><App /></Route>
      <Route path="/signup"><SignUp></SignUp></Route>
      <Route path="/signin"><SignIn></SignIn></Route>

      <Route path="/dashboard/"><Dashboard></Dashboard></Route>
      <Route path="/Address/"><Address ></Address ></Route>
      <Route path="/AddMenu/"><AddMenu ></AddMenu></Route>

    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
