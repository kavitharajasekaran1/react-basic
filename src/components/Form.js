import React, { Component } from 'react';
import   './FormStyle.css'
 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : '',
         comments : '',
         topic : 'react'
      }
    }

    handleChangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
    handleChangeComments = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    
    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit =(event) =>{
        event.preventDefault()
    }

  render() {
    return (
        <form className='container' onChange={this.handleSubmit}>
      <div className='topicStyle'>
      <label >Name</label>
        <input type= "text" value = {this.state.name} onChange = {this.handleChangeName}/>
      </div>
       <div className='topicStyle'>
        <label >comments</label>
        <textarea  type= "text" value = {this.state.comments} onChange = {this.handleChangeComments}/>
      </div>
      <div className='topicStyle'>
      <label >Topic</label>
      <select value={this.state.topic} onChange={this.handleTopicChange}>
        <option value='React'> React</option>
        <option value='vue'> Vue</option>
        <option value='Angular'> Angular</option>
      </select>
      </div>
      {/* <div className='topicStyle'>
        <label >comments</label>
        <textarea  type= "text" value = {this.state.comments} onChange = {this.handleChangeComments}/>
      </div>
      <div className='topicStyle'>
      <label >Topic</label>
      <select value={this.state.topic} onChange={this.handleTopicChange}>
        <option value='React'> React</option>
        <option value='vue'> Vue</option>
        <option value='Angular'> Angular</option>
      </select>
      </div> */}
      </form>
    );
  }
}

export default Form;
