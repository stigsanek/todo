import React from 'react';

import DateTime from '../date-time/';
import './app-header.css';

const AppHeader = ({ todo, done }) => {
  return (
    <div className="app-header d-flex">
      <div className="app-header-title">
        <h1>Todo List</h1>
        <h2>{todo} more to do, {done} done</h2>
      </div>
      <DateTime />
    </div>
  );
}

export default AppHeader;
