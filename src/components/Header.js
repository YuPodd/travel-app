import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    this.props.isActive ? this.Input.focus() : this.Input = null;
  }

  handleChange = (e) => {this.props.change(e.target.value) }
  handeEnter = (e) => { this.props.change(e.target.value) }
  handleClick = (e) => { e.preventDefault();  this.props.change(this.Input.value) } 

  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Travel App</Link>
          {this.props.isActive ?
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              ref={input => this.Input = input}
              value={this.props.text}
              autoComplete="off"
              onChange={this.handleChange}
              onKeyDown={this.handeEnter}
              ></input>
            <button
              className="btn btn-secondary my-2 my-sm-0"
              type="submit"
              onClick={this.handleClick}
              >Search</button>
          </form> : ''}
        </nav>
      </header>
    )
  }
}

export default Header
