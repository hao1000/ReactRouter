import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
              <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                      <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/tin">Tin tuc</a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                      <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/tin-chi-tiet">Tin chi tiet</a>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                      <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/lien-he">Lien he</a>
                    </li>
                    <li>
                      <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/tin">Tin Tuc</NavLink>
                    </li>
                    <li>
                      <NavLink to="/tin-chi-tiet">Tin chi tiet</NavLink>
                    </li>
                    <li>
                      <NavLink to="/lien-he">Lien He</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}
export default Nav;