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
        <h6>Q. Create a class component that renders an input and focuses the input on mount</h6>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default Focus