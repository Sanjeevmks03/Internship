import React, { Component } from 'react'
import Form from './Form'

export class Formparent extends Component {
    constructor(props) {
      super(props)
      this.clearRef=React.createRef()

    }

    clearformfunc=()=>{
        this.clearRef.current.clearData()
    }
  render() {
    return (
      <div className='mt-4 border-top pt-3'>
        <Form ref={this.clearRef}/>
        <button type="button" class="btn btn-primary mt-4" onClick={()=>this.clearformfunc()}>ClearAll</button>
      </div>
    )
  }
}

export default Formparent