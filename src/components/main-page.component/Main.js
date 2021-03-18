import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import countries from "../../constants/countries";
import CountryCard from './CountryCard';

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
    const cards = this.props.countries.filter(this.filter).map((country) => (
      <Link to={`/${country.label}`}>
        <CountryCard country={country} ></CountryCard>
      </Link>
    ))
    return (
      <div>
        <Header isActive={true} text={this.state.searchText} change={this.search}/>
        <div className="main-page-content__container">
          {cards}
        </div>
      </div>
    )
  }
}
