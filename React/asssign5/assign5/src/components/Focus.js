import React, { Component } from 'react'

class Focus extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default Focus