import React from "react";

import Header from "./Header";
import { Link } from "react-router-dom";
import countries from "../constants/countries";

export default class Main extends React.Component {
  constructor(){
    super();
    this.state = {
      searchText: '',
    }
  }
  search = (value) =>{
    this.setState({searchText: value})
  }

  filter = (country) => {
    return this.state.searchText === '' ? true :
    (country.name.toLowerCase().indexOf(this.state.searchText.toLocaleLowerCase()) !== -1 ||
    country.capital.toLowerCase().indexOf(this.state.searchText.toLocaleLowerCase()) !== -1 ? true: false)
  }

  render() {
    const cards = countries.filter(this.filter).map((country) => (
      <li key={country.name}>
        <Link to={`/${country.name}`}>{country.name}</Link>
      </li>
    ))
    return (
      <div>
        <Header isActive={true} text={this.state.searchText} change={this.search}/>
        <h1>main page</h1>
        <ul>
        {cards}
        </ul>
      </div>
    )
  }
}

