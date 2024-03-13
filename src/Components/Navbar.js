import React, { Component } from 'react'
import './NavbarStyle.css';
import { MenuItems } from './MenuItems';
import {Link} from "react-router-dom";

export class Navbar extends Component {
    state = {clicked : false};
    handleClick = () =>{
        this.setState({clicked : !this.state.clicked});
    }
  render() {
    return (
      <div>
        <nav className="NavbarItems">
          <div className="left">
            <a href="/">
            <img src="/assest/logo.png" />
          </a>
          <a href="/" style={{ textDecoration: 'none' }}>
            <h1 className="navbar-logo" >NSS<p id='log-lowerpart'>SGSITS</p></h1> 
          </a>
          </div>
            <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li>
                        <Link className={item.cName} to={item.url}> <i className={item.icon}></i> {item.title}</Link>
                    </li>
                    )
                })}
               {/* <button>Sign up</button> */}
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar
