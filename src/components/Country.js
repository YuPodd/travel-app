import {React, Fragment }from "react";
import Header from "./Header";
import countriesData from "../constants/countries";
import { useParams } from "react-router-dom";
import Weather from './Weather/Weather';
import Currency from "./Currency/Currency";

export default function Country({langApp, changeLang}) {
  const { name } = useParams();
  const country = countriesData.find((country) => country.name === name);
  return (
    <Fragment>
    <Header isActive={false} change={null} langApp={langApp} changeLang={changeLang}/>
      <div>
        <section>
          <h3>{country.name}</h3>
          <img className="country_image" src={country.img} alt={country.name}></img>
          <p>{country.capital}</p>
          <p>{country.info}</p>
        </section>
        <Weather city={country.capital} langApp={langApp} />
        <Currency />
      </div>
    </Fragment>
  );
}
