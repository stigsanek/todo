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
      this.createItem('Drink Coffee'),
      this.createItem('Make Awesome App'),
      this.createItem('Build React App')
    ],
    term: ''
  }

  createItem(title) {
    return {
      id: this.maxId++,
      label: title,
      done: false,
      important: false
    }
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

  addItem = (text) => {
    const newItem = this.createItem(text);

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

  toggleProp(arr, id, propName) {
    const index = arr.findIndex((element) => {
      return element.id === id;
    });

    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'done')
      }
    });
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'important')
      }
    });
  }

  search(items, term) {
    if (term.length == 0) {
      return items;
    }

    return items.filter((element) => {
      const item = element.label.toLowerCase();
      return item.indexOf(term.toLowerCase()) > -1;
    });
  }

  onSearchItem = (term) => {
    this.setState({ term });
  }

  render() {
    const { todoData, term } = this.state;

    const visibleItems = this.search(todoData, term);

    const doneCount = todoData.filter((element) => {
      return element.done;
    }).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader todo={todoCount} done={doneCount} />

        <div className="top-panel d-flex">
          <SearchPanel onSearchItem={this.onSearchItem} />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={visibleItems}
          onDelete={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />

        <ItemAddForm onCreate={this.addItem} />
      </div>
    );
  }
}
