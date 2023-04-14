import React, { Component } from 'react'

class Errorboundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:false
      }
    }
    static getDerivedStateFromError(error){
        return{
            error:true
        }
    }
  render() {
    if(this.state.error)
    {
        return (
            <h1>Error Occured: It is not a name !!!</h1>
        )
    }
    return this.props.children
  }
}

export default Errorboundary