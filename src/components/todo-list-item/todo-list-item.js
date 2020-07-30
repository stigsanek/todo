import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    });
  }

  onMarkClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    });
  }

  render() {
    const { label, onDeleteItem } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <div className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkClick}
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleteItem}
        >
          <i className="fa fa-trash-o" />
        </button>
      </div >
    );
  }
}
