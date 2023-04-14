import React, { Component } from 'react'

class ErrorComponent extends Component {
  render() {
    if(this.props.name==="Baburao"){
        throw new Error('Not a proper name !!!')
    }
    return (
      <p>{this.props.name}</p>
    )
  }
}

export default ErrorComponent