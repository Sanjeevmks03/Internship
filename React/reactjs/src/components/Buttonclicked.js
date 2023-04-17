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
            <h6>Q. Create a class component that renders a button which shows how many times it has been clicked.</h6>
            <div>clicked count= {this.state.count}</div>
            <div><button onClick={()=>this.clickhandle()} className='btn btn-warning'>click</button></div>
        </div>
      
    )
  }
}

export default Buttonclicked