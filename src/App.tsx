import React from 'react';
import './App.css';
import './styles/bootstrap.min.css'
import './styles/components_styles.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './components/Footer';
import Main from './components/Main';
import Country from'./components/Country';

function App() {
  return (
    <div className="root">
      <Router>
        <Switch>
          <Route path="/country">
            <Country />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
