import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName : "parent"
         
      }
      this.greetPrent = this.greetPrent.bind(this)

    }
    greetPrent (child) {
        alert (`Hello ${this.state.parentName} from ${child}`)
    }
    
  render() {
    return (
      <div>
       <ChildComponent greetHandler = {this.greetPrent}/> 
      </div>
    );
  }
}

export default ParentComponent;
