import React, { Component } from 'react';
import List from './List.js';

import style from './style.css';


    const ListItem = (props) => {
    console.log(props.item.mode);
    if(props.item.mode == "Edit"){
        return(
            <div>
            <input type="text" ref={(txtval) => {
                this.name = txtval;
            }} defaultValue={props.item.name} /> : 
            <input type="text" ref={(txtval) => {
                this.job = txtval;
            }} defaultValue={props.item.job} />
            <p><textarea ref={(txtval) => {
                this.desc = txtval;
            }} defaultValue={props.item.description} /></p>
            <button onClick={() => {
                props.cancelEvent(props.itemIndex);
            }}>Cancel</button>
            <button type="submit" onClick={() => {
                props.updateEvent(this.name.value,this.job.value,this.desc.value,props.itemIndex);
            }}>Update User</button>
            </div>
        )
    }
    return(
        <div>
            <h3>{props.item.name} : {props.item.job} 
                <a onClick={() => 
                    {props.deleteEvent(props.itemIndex)}
            } className="delete" href="#">x</a> 
            <button onClick={() => {
                props.editEvent(props.itemIndex)
            }}>Edit</button> </h3>
            <p>{props.item.description}</p>            
            

        </div>
    )
}
    
 //   const ListItem = ( { item } ) => {
    //console.log(this.props.deleteuser);        
  //  return(
   //     <div>
    //        <h3>{item.name} : {item.job} 
     //           <a onClick={deleteEvent.item.id} className="delete" href="#">x</a> </h3>
      //      <p>{item.description}</p>
      //  </div>
   // )
// }

export default ListItem;
