import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

const ListItem = (props) =>{
    const items= props.items;
    const listItems = items.map(item =>{
         return<div className='list' key ={item.key}>
             <p>
                 <input type='text' id={item.key} value = {item.text} onChange={(e)=>{props.setUpdate(e.target.value, item.key)}}></input>
                <span>
                    <FontAwesomeIcon className='faicons' icon='trash' onClick={() => props.deleteItems(item.key)} />
                </span>
             </p>
             
         </div>
    })
    return(
       <div>
           <FlipMove duration={300} easing='ease-in-out'>
                {listItems}
           </FlipMove>
           
       </div>
    )
}
export default ListItem;
