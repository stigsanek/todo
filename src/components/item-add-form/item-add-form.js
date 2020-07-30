import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  render() {
    const { onCreate } = this.props;

    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => { onCreate('Hello World') }}
        >
          Add Item
        </button>
      </div>
    );
  }
}
