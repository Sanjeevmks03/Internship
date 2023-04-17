import React, { Component } from 'react'

export default class Todoitems extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         display: true
      }
    }

    func(){
        this.setState({
            display: false
        })
        console.log(this.state.display)
    }
  render() {
    console.log(this.props.mesg)
    console.log(this.state.display)
    return (
        
        <div style={{display: this.state.display ? 'block' : 'none'}}>
            <div><p>{this.props.mesg}</p></div>
            <button onClick={()=>this.func()} className='btn btn-warning'>Mark as complete</button>
        </div>
      
      
    )
    
    
  }
}
