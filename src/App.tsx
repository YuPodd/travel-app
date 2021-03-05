import React from 'react';
import './App.css';
import './styles/bootstrap.min.css'
import './styles/components_styles.css'

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
