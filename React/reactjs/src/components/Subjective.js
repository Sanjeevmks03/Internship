import React, { Component } from 'react'

export class Subjective extends Component {
  render() {
    return (
      <div>
        <div>
            <h6>Q. How many elements can be returned from a react component?</h6>
            <p>ans:-  Only one element can be returned from a react component. But  the element can have nested elements inside of it.</p>
        </div>
        <div>
            <h6>Q Why do we use setState instead of directly mutating this.state?</h6>
            <p>ans:- since there is no reference point, adding to or changing the value of an existing element is still going to equal it's previous state. That's why we use setState instea of this.state</p>
        </div>
      </div>
    )
  }
}

export default Subjective