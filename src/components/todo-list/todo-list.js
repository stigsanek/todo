import React from 'react';

import TodoListItem from '../todo-list-item/';
import './todo-list.css';

const TodoList = ({ todos, onDelete }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      // Use spread syntax for object
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleteItem={() => { onDelete(id) }}
        />
      </li>
    );
  })

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
}

export default TodoList;
