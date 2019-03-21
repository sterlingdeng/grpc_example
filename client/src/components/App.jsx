import React, { Component } from 'react';
import { List } from './List.jsx';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      addTextBox: ''
    };
    this.handleGetListClick = this.handleGetListClick.bind(this);
    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.handleAddToGoClick = this.handleAddToGoClick.bind(this);
  }

  handleGetListClick() {
    fetch('/getList')
      .then(res => res.json())
      .then(list => {
        this.setState({ list });
      });
  }

  handleInputOnChange(e) {
    this.setState({
      addTextBox: e.target.value
    });
  }

  handleAddToGoClick() {
    fetch('/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.addTextBox)
    });
  }

  render() {
    return (
      <div>
        <h1>To Do List</h1>
        <ol>
          <List list={this.state.list} />
        </ol>
        <button onClick={this.handleGetListClick}>Get List</button>
        <input
          placeholder="add to do"
          value={this.state.addTextBox}
          onChange={this.handleInputOnChange}
        />
        <button onClick={this.handleAddToGoClick}>Add to do</button>
      </div>
    );
  }
}
