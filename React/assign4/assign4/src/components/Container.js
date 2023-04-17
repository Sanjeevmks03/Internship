import React, { Component } from 'react'
import Counter from './Counter'

class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    addcounter=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    let counterarray=[]
    for(var i=0;i<this.state.count;i++)
    {
        counterarray.push(
            <tr key={i}>
                 <Counter key={i} />
            </tr>
        )
    }
    return (
      <div>
        <button type="button" class="btn btn-primary mt-5" onClick={()=>this.addcounter()}>Add Counter</button>
        <table className="table">
            <tbody>
                {counterarray}
            </tbody>
        </table>
      </div>
    )
  }
}

export default Container