import React, { Component } from 'react'
import Todoitems from './Todoitems'

export class List extends Component {
  render() {
    return (
      <div>
        <h6>Q. Create two class components . The ‘List’ component renders 3
‘TodoItems’. The ‘TodoItem’ component takes a prop of ‘todo’ which is a text and displays the text
and a button next to it. The button has text - “Mark as complete”, on clicking the button, the
‘TodoItem’ does not render anything anymore.</h6>
        <Todoitems mesg="text-1 is there"/>
        <Todoitems mesg="text-2 is there"/>
        <Todoitems mesg="text-3 is there"/>
      </div>
    )
  }
}

export default List