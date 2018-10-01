import React, { Component } from 'react';
import Header from './Header.js';
import List from './List.js';

import MyData from './userdata.json';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      'data': MyData,
      'filtered': MyData
    }

  }

  filterListFn = (keyword) => {
    let filtered = this.state.data.filter((item) => {
      return(item.name.indexOf(keyword) > -1 || (item.job.indexOf(keyword) > -1));
    })
    this.setState({filtered});
  }

  

  render() {
    return (
      <div>
        <Header filterList={function (keyword) { this.filterListFn(keyword).bind(this)}} />        
        <List data={this.state.filtered} />
      </div>
    );
  }
}

export default App;
