import React from "react";

import Header from "./Header";
import { Link } from "react-router-dom";

function Main(props) {
  return (
    <div>
      <Header></Header>
      <h1>main page</h1>
      <ul>
        {props.countries.map((country) => (
          <li key={country.name}>
            <Link to={`/${country.name}`}>{country.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
