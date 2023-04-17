import React, { Component } from 'react'

export class Subjective extends Component {
  render() {
    return (
      <div>
        <div>
            <h5>Q. What is the purpose of componentDidMount() lifecycle method?</h5>
            <p>ans:- The componentDidMount() lifecycle method is called by React immediately after a component is mounted. This method is commonly used to perform tasks that require access to the DOM, or to initiate data that the component needs.
</p>
        </div>
        <div>
            <h5>Q. What is the purpose of componentDidUpdate() lifecycle method?</h5>
            <p>ans:- The componentDidUpdate() lifecycle method is called by React immediately after a component updates and the changes have been flushed to the DOM. This method is commonly used to perform tasks that need to be done after an update.
</p>
        </div>
      </div>
    )
  }
}

export default Subjective