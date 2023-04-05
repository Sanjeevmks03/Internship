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
        return <div><button onClick={()=>this.countclick()}>Click</button></div>
    }
    else{
        return(
            <div>
                <div>You won the game</div>
                <div><button onClick={()=>this.countclick()} disabled>Click</button></div>
            </div>
        )
    }
  }
}

export default Button5times