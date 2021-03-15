import {React, Fragment }from "react";
import Header from "./Header";
import countriesData from "../constants/countries";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel"
import { Trans } from 'react-i18next'

function Country() {
  const { name } = useParams();
  const country = countriesData.find((country) => country.name === name);
 
  return (
    <Fragment>
    <Header isActive={false} change={null}/>
      <div>
        <section>
        <img className="country_image" src={country.img} alt={country.name}></img>
          <p><Trans>{country.capital}</Trans></p>
          <p><Trans>{country.info}</Trans></p>
          <h3><Trans>{country.name}</Trans></h3>
        </section>
        <Carousel countryToCarousel = {country.gallery}/>
        </div>
    </Fragment>
  );


}

export default Country;
