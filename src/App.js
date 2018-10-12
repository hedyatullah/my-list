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
    this.deleteuser = this.deleteuser.bind(this);
    this.edituser = this.edituser.bind(this);
    this.canceluser = this.canceluser.bind(this);
    this.updateuser = this.updateuser.bind(this);
  }

  filterListFn = (keyword) => {
    let filtered = this.state.data.filter((item) => {
      return(item.name.indexOf(keyword) > -1 || (item.job.indexOf(keyword) > -1));
    })
    this.setState({filtered});
  }

  updateuser(name,job,desc,index){
    let filtered = this.state.filtered;
    filtered[index].name = name;
    filtered[index].job = job;
    filtered[index].description = desc;
    filtered[index].mode = 'Undefined';
    this.setState({filtered})    
  }
  canceluser(id){
    let filtered = this.state.filtered;
    delete filtered[id].mode;
    this.setState({filtered});
  }

  edituser(id){
    console.log("edit " + id)
    let filtered = this.state.filtered;
    filtered = filtered.map(item => {
      delete item.mode;
      return item;
    })
    filtered[id].mode = 'Edit';
    this.setState({filtered})
  }

  deleteuser(id){
    console.log(id)
    let filtered = this.state.filtered;
    filtered.splice(id,1);
    this.setState({filtered:filtered})
  }

  render() {
    return (
      <div>
        <Header filterList={(keyword) => this.filterListFn(keyword)} />        
        <List data={this.state.filtered} 
          deleteuser={this.deleteuser} 
          edituser={this.edituser} 
          canceluser={this.canceluser} 
          updateuser={this.updateuser} />
      </div>
    );
  }
}

export default App;
