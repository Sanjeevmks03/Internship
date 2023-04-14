import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
      this.nameRef=React.createRef()
      this.AddressRef=React.createRef()
      this.ageRef=React.createRef()
    }

    clearData=()=>{
        this.nameRef.current.value=""
        this.AddressRef.current.value=""
        this.ageRef.current.value=""
    }
  render() {
    return (
      <div>
        <div class="container">
            <form>
                <div class="form-group">
                  <label for="">Name :: </label>
                  <input type="text" ref={this.nameRef} class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Adress :: </label>
                  <input type="textfield" ref={this.AddressRef} class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">Age :: </label>
                  <input type="Number" ref={this.ageRef} class="form-control" />
                </div>
            </form>
        </div>
      </div>
    )
  }
}

export default Form