import React, { Component } from 'react'

class Birds extends Component {
  render() {
    return (
      <div style={{ display: this.props.value === 'birds' ? "block" : "none" }}>
        <div className='row justify-content-center'>
          <div className='col-3'>
            <label>Birds:: </label>
          </div>
          <div className='col-5'>
            <select class="form-control">
              <option>Sparrow</option>
              <option>Pigeon</option>
              <option>Parrot</option>
            </select>
          </div>
        </div>


      </div>
    )
  }
}

export default Birds