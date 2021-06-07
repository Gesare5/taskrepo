import React from 'react';
import Buton from './components/button';
import List from './components/list';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }

    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  //function to add item to list
  addItem(e) {

    //to stop page reloading when add button is pressed
    e.preventDefault();
    const newItem = this.state.currentItem;
    //console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        // this is an empty object where the item will be added to, it contains a key to provide unque identification
        currentItem: {
          text: '',
          key: ''
        }
      })
    }

  }

  //function to remove item from list
  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  // this enables editing of items on the list
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className="app" >
        <form id="to-do" onSubmit={this.addItem}>
          <input type="text" placeholder="Item" id="item" value={this.state.currentItem.text} onChange={this.handleInput} />

          <Buton type="submit">+</Buton>
        </form>
        <List items={this.state.items}
          deleteItem={this.deleteItem}
          setUpdate={this.setUpdate} />
      </div>

    )
  };
}

export default App;

