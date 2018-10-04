import React, { Component } from 'react';
import ListItem from './ListItem.js';

import MyData from './userdata.json'

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            "data": MyData,
            "keyword": ""
        }
        this.listItem = this.listItem.bind(this);
        this.deleteuser = this.deleteuser.bind(this);
    }    
    render() { 
        console.log(this.props.data)
        return (
            <div>
                {this.listItem(this.props.data)}
            </div>
        );
    }
    deleteuser(index){
        console.log("deleteuser")
    }

    listItem = (rval) => {
        return rval.map(item => {
            return(
                <ListItem item={item} key={item.id} deleteuser={this.deleteuser} />
            )
        })
    }
}
 
export default List;