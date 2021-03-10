import React, { Component } from 'react';

import Header from './Header';

export class Main extends Component {
  constructor(){
    super();
    this.state = {
      searchText: '', 
    }
  }
  searchTextChange = (value) =>{
    console.log(value)
    this.setState({searchText: value})
  }

  render() {
    return (
      <div>
        <Header  searchText={this.state.searchText} change={this.searchTextChange}/>
        <h1>main page</h1>
      </div>
    )
  }
}

export default  Main

