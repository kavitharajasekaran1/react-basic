import React from 'react'

const withCounter = (WrappedComponent, incrementValue) =>{

    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count : 0,
            }
          }
      
          increment = () =>{
              this.setState(prevstate=>{
                  return {count : prevstate.count + incrementValue}
              })
          }

        render() {
            return < WrappedComponent count ={this.state.count} increment ={this.increment} {...this.props} />
        }
    }

    return WithCounter;
}

export default withCounter;