import React, { Component } from 'react';

 class ClickHoverTwo extends Component {
  render() {
    const {increment, count} = this.props
    return (
      <div>
        <button onMouseOver={increment}>hover clicked {count} </button>
      </div>
    );
  }
}

export default ClickHoverTwo;
