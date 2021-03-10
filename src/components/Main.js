import React from "react";

import Header from "./Header";
import { Link } from "react-router-dom";

export default class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      searchText: '', 
    }
  }
  searchTextChange = (value) =>{
    console.log(value)
    this.setState({searchText: value})
  }

  render() {
    return (
      <div>
        <Header  searchText={this.state.searchText} change={this.searchTextChange}/>
        <h1>main page</h1>
      <ul>
        {this.props.countries.map((country) => (
          <li key={country.name}>
            <Link to={`/${country.name}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
      </div>
    )
  }
}

