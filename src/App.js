import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/bootstrap.min.css";
import "./styles/components_styles.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Country from "./components/Country";
import countriesData from "./constants/countries";

export default class App extends React.Component {
  state = {
    langApp: 'en'
  }

  changeLang = (langApp) => {
    this.setState({langApp})
  }

  render() {
    return (
    <div className="root">
      <Router>
        <Switch>
          <Route path="/:name">
            <Country langApp={this.state.langApp} changeLang={this.changeLang} />
          </Route>
          <Route path="/">
            <Main countries={countriesData} langApp={this.state.langApp} changeLang={this.changeLang} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
  }

}

