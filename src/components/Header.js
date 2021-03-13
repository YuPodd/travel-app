import React, {Component} from 'react';
import {Link} from "react-router-dom";
import SelectLang from './SelectLang/Selectlang';

export default class Header extends Component {
  componentDidMount() {
    this.props.isActive ? this.Input.focus() : this.Input = null;
  }

  handleChange = (e) => {this.props.change(e.target.value) }
  handeEnter = (e) => { this.props.change(e.target.value) }
  handleClick = (e) => { e.preventDefault();  this.props.change(this.Input.value) }

  render() {
    const {isActive, text } = this.props;
    const searchForm = (
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          ref={input => this.Input = input}
          value={text}
          autoComplete="off"
          onChange={this.handleChange}
          onKeyDown={this.handeEnter} />
        <button
          className="btn btn-secondary my-2 my-sm-0"
          type="submit"
          onClick={this.handleClick}
        >Search</button>
      </form>
    )

    return (
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Travel App</Link>
          <SelectLang />
          {isActive ? searchForm : null}
        </nav>
      </header>
    )
  }
}
