import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "hello"
    }
    // this.handler = this.handler.bind(this)
  }

  // handler () {
  //   this.setState({
  //     message : "Good bye!"
  //   })
  // }

  handler = () =>{
    this.setState({
      message :"good bye!!!"
    })
  }
  
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.handler.bind(this)}>click me</button> */}
        <button onClick={this.handler}>click me</button>

        {/* <button onClick={()=>this.handler()}>click me</button> */}
      </div>
    );
  }
}

export default EventBind;
