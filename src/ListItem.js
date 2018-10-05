import React, { Component } from 'react';
import List from './List.js';

import style from './style.css';


const ListItem = ( { item, deleteEvent } ) => {
    //console.log(this.props.deleteuser);
    return(
        <div>
            <h3>{item.name} : {item.job} 
                <a onClick={deleteEvent(item.id)} className="delete" href="#">x</a> </h3>
            <p>{item.description}</p>
        </div>
    )
}

export default ListItem;