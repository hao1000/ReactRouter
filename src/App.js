import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav'
import Home from './Component/Home'
import Fotter from './Component/Fotter'
import Contact from './Component/Contact'
import New from './Component/New'
import NewDeatai from './Component/NewDetail'
import DieuHuongURL from './router/DieuHuongURL';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <DieuHuongURL></DieuHuongURL>
          <Fotter></Fotter>
        </div>
      </Router>
    );
  }
}

export default App;
