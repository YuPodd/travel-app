import {React, Fragment }from "react";
import Header from "./Header";
import countriesData from "../constants/countries";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import CountryMap from "./CountryMap";

function Country() {
  const { name } = useParams();
  const country = countriesData.find((country) => country.name === name);
 
  return (
    <Fragment>
    <Header isActive={false} change={null}/>
      <div>
        <section>
          <h3>{country.name}</h3>
          <img className="country_image" src={country.img} alt={country.name}></img>
          <p>{country.capital}</p>
          <p>{country.info}</p>
        </section>
        <Carousel countryToCarousel = {country.gallery}/>
        </div>
        <CountryMap country={country}></CountryMap>
    </Fragment>
  );


}

export default Country;
