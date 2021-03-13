import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/bootstrap.min.css";
import "./styles/components_styles.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Country from "./components/Country";
import countriesData from "./constants/countries";
import Context from "./components/Context";

export default function App() {
  const [lang, setLang] = useState('en')

  const val = {
    lang,
    setLang
  }


  return (
    <Context.Provider value={val}>
      <div className="root">
        <Router>
          <Switch>
            <Route path="/:name">
              <Country />
            </Route>
            <Route path="/">
              <Main countries={countriesData} />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Context.Provider>
  )
}

