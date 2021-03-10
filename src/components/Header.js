import React, { Component } from 'react';
import { Link } from "react-router-dom";

 class Header extends Component {
  componentDidMount(){
    this.Input.focus(); 
 }

  handleEnter = (event) => {
    if(event.key === 'Enter') 
    this.search();
  }  
  handleClick = (e) => {
    e.preventDefault();
    this.search();
  }
  search(){
    console.log('work'); 
  }
      render() {
        return (
            <header>
              <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Travel App</Link>
                <form className="form-inline my-2 my-lg-0">
                  <input 
                  className="form-control mr-sm-2" 
                  type="text" 
                  placeholder="Search" 
                  ref={ (input) => {this.Input = input}} 
                  autoComplete="off"
                  onKeyDown={this.handleEnter}
                  ></input>
                  <button className="btn btn-secondary my-2 my-sm-0" type="submit" onClick={this.handleClick} >Search</button>
                </form>
              </nav>
            </header>
        )
    }
}

export default Header
