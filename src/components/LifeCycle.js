import React, { Component } from 'react';

 class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'avanthi'
      }
      console.log('lifecycle A constructor')
    }

    static getDerivedFromProps(props, state) {
        console.log('lifecycle A getDerived from props')

    }
    componentDidMount(){
        console.log('lifecycle component did mount')
    }
    
  render() {
    console.log('life cycle render')
    return (
      <div>
        
      </div>
    );
  }
}

export default LifeCycle;
