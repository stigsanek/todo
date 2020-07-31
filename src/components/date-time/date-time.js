import React, { Component } from 'react';

import './date-time.css';

export default class DateTime extends Component {
  state = {
    date: new Date()
  }

  timerId = '';

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="date-time-box">
        <div>
          <span>{this.state.date.toLocaleDateString()}</span>
        </div>
        <span>
          {this.state.date.toLocaleTimeString()}
        </span>
      </div>
    );
  }
}
