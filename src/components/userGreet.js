import React, { Component } from 'react';

 class UserGreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {
    return (
        this.state.isLoggedIn && <div>welcome avanthi</div>
    //     this.state.isLoggedIn ? (
    //   <div>
    //     Welocm Avanthika
    //   </div>) : (<div>Welocm Guest</div>)
    );
  }
}

export default UserGreet;
