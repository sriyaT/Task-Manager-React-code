import React from 'react';
import ListItem from './ListItem';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from  '@fortawesome/free-solid-svg-icons';


 
library.add(faTrash);


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currenItem:{
        text:'',
        key:''
      }
      
    }
  }
  handleInput =  (e) =>{
    this.setState({
      currenItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem = (e) =>{
    e.preventDefault();
    const newItem= this.state.currenItem;
    console.log(newItem);
    if(newItem.text !== ''){
      const newItems =[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currenItem: {
          text:'',
          key:''
        }
      })
    }
  }
  deleteItems = (key) =>{
    const fliteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: fliteredItems
    })
  }
  setUpdate = (text, key ) =>{
    const items =  this.state.items;
    items.map(item =>{
      if(item.key === key){
        return item.text=text;
      }
      return item;
    })
    this.setState({
      items:items
    })
  }
  render(){
    return(
      <div className='App'>
        <header>
          <h1 className='Task-Manager'>Task Manager</h1>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input type='text' placeholder='Enter Text...' value={this.state.currenItem.text} onChange={this.handleInput}></input>
            <button type='submit'>Add</button>

          </form>
      </header>
      <ListItem items={this.state.items}
        deleteItems={this.deleteItems}
        setUpdate={this.setUpdate}
      ></ListItem>
      </div>
    ) 
  }
}

export default App;
