import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';
import withCounter from './WithCounter';

 class ClickCounter extends Component {
   
    
  render() {
    const { count, increment } = this.props
    console.log(this.props.name,"name---->>>")
    return (
      <div>
        <button onClick={increment}> {this.props.name} onClick {count} times</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
