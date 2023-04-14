import React, { Component } from 'react'

export class Animals extends Component {
  render() {
    return (
      <div >
        <div style={{ display: this.props.value === 'animals' ? "block" : "none" }}>
          <div className='row justify-content-center'>
          <div className='col-3'>
            <label>Animals:: </label>
          </div>
          <div className='col-5'>
            <select class="form-control">
              <option>Cheetah</option>
              <option>Tiger</option>
              <option>Lion</option>
            </select>
          </div>
          </div>

        </div>
      </div>

    )
  }
}

export default Animals