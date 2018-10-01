import React, { Component } from 'react';
import List from './List.js';

const ListItem = ( { item } ) => {
    return(
        <div>
            <h3>{item.name} : {item.job}</h3>
            <p>{item.description}</p>
        </div>
    )
}
export default ListItem;