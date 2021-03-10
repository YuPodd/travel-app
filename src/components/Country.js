import {React, Fragment }from "react";
import countriesData from "../constants/countries";
import { useParams } from "react-router-dom";

function Country() {
  const { name } = useParams();
  const country = countriesData.find((country) => country.name === name);
  return (
    <Fragment>
      <div>
        <section>
          <h3>{country.name}</h3>
          <img className="country_image" src={country.img} alt={country.name}></img>
          <p>{country.capital}</p>
          <p>{country.info}</p>
        </section>
      </div>
    </Fragment>
  );


}

export default Country;
