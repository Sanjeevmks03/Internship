import React, { Component } from 'react'

class Buttonclicked extends Component {
  constructor(){
    super()
    this.state={
        count: 0
    }
  }

  clickhandle(){
    this.setState({
      count: this.state.count+1
    })
    console.log(this.state.count)
  }
    render() {
    return (
        <div>
            <div>clicked count= {this.state.count}</div>
            <div><button onClick={()=>this.clickhandle()}>click</button></div>
        </div>
      
    )
  }
}

export default Buttonclicked