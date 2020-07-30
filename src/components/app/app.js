import React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import ItemStatusFilter from '../item-status-filter/';
import TodoList from '../todo-list/';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { id: 1, label: 'Drink Coffee', important: false },
      { id: 2, label: 'Make Awesome App', important: true },
      { id: 3, label: 'Build React App', important: true }
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((element) => {
        return element.id === id;
      });

      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];

      return {
        todoData: newArray
      }
    });
  }

  createItem = (text) => {
    const newItem = {
      id: this.maxId++,
      label: text,
      important: false
    }

    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      }
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDelete={this.deleteItem}
        />

        <ItemAddForm onCreate={this.createItem} />
      </div>
    );
  }
}
