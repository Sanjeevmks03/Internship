import React, { Component } from 'react'

export class Button5times extends Component {
    constructor() {
      super()
    
      this.state = {
         count: 0
      }
    }

    countclick(){
        this.setState({
            count: this.state.count+1
        })
        console.log(this.state.count)
    }
  render() {
    if(this.state.count<5){
        return <div>
            <h6>Q. Create a class component that renders a button, which when clicked 5 times, renders a win
message and disables the button.</h6>
            <button className='btn btn-success' onClick={()=>this.countclick()}>Click</button>
            </div>
    }
    else{
        return(
            <div>
                <h6>Q. Create a class component that renders a button, which when clicked 5 times, renders a win
message and disables the button.</h6>
                <div>You won the game</div>
                <div><button className='btn btn-warning' onClick={()=>this.countclick()}  disabled>Click</button></div>
            </div>
        )
    }
  }
}

export default Button5times