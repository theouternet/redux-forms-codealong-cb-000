 
import React, { Component } from 'react'
 import { connect } from 'react-redux'; 
 
class CreateTodo extends Component {
  state = {
    text: ''
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }
  
  
  
  render() { 
    return()
  
 
export default CreateTodo;