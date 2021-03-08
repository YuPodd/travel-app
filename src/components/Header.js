import React, { Component } from 'react';
import { Link } from "react-router-dom";

 class Header extends Component {
      render() {
        return (
            <header>
              <nav className="navbar navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">Travel App</Link>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                  <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
              </nav>
            </header>
        )
    }
}

export default Header
