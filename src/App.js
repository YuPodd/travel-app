import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap';
import "./styles/bootstrap.min.css";
import "./styles/components_styles.css";
import Footer from "./components/Footer";
import Main from "./components/main-page.component/Main";
import CountryPage from "./components/countru-page.component/CountryPage";
import getCoutryList from "./constants/countries";
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
              <CountryPage countries={getCoutryList(val.lang)} />
            </Route>
            <Route path="/">
              <Main countries={getCoutryList(val.lang)} />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </Context.Provider>
  )
}

