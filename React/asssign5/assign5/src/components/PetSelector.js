import React, { Component } from 'react'
import Animals from './Animals'
import Birds from './Birds'

class PetSelector extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedpet: ""
    }
  }
  handleselect = (event) => {
    this.setState({
      selectedpet: event.target.value
    })
  }
  render() {
    return (
      <div>
        <div className='row justify-content-center mt-5'>
          <div className='col-3'>
            <label >Select Pet::  </label>
          </div>
          <div className='col-5'>
            <select class="form-control m-3" value={this.state.selectedpet} onChange={(event) => this.handleselect(event)}>
              <option>Pet Select</option>
              <option value='animals'>Animals</option>
              <option value='birds'>Birds</option>
            </select>
          </div>


        </div>


        <Animals value={this.state.selectedpet} />
        <Birds value={this.state.selectedpet} />
      </div>
    )
  }
}

export default PetSelector