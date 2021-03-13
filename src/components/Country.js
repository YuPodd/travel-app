import {React, Fragment, useContext }from "react";
import Header from "./Header";
import countriesData from "../constants/countries";
import { useParams } from "react-router-dom";
import Weather from './Weather/Weather';
import Currency from "./Currency/Currency";
import Context from "./Context";

export default function Country() {
  const { name } = useParams();
  const value = useContext(Context);
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
        <Weather city={country.capital} langApp={value.lang} />
        <Currency />
      </div>
    </Fragment>
  );
}
