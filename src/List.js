import React, { Component } from 'react';
import ListItem from './ListItem.js';

import MyData from './userdata.json'

class List extends Component {
    constructor(props){
        super(props);

        // this.state = {
        //     "data": MyData,
        //     "keyword": ""
        // }
        this.listItem = this.listItem.bind(this);
        
    }    
    render() { 
        console.log(this.props.data)
        return (
            <div>
                {this.listItem(this.props.data)}                
            </div>
        );
    }
    
    // deleteEvent(id){
    //     this.props.deleteuser(id)
    // }

    listItem = (rval) => {
        return rval.map((item, itemIndex) => {
            return(
                <ListItem item={item} key={item.id} 
                deleteEvent={this.props.deleteuser} 
                editEvent={this.props.edituser}
                cancelEvent={this.props.canceluser}
                updateEvent={this.props.updateuser}
                itemIndex={itemIndex} />
            )
        })
    }
}
 
export default List;