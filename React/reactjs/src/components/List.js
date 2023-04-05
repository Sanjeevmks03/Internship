import React, { Component } from 'react'
import Todoitems from './Todoitems'

export class List extends Component {
  render() {
    return (
      <div>
        <Todoitems mesg="Some text is there"/>
        <Todoitems mesg="Some text is there"/>
        <Todoitems mesg="Some text is there"/>
      </div>
    )
  }
}

export default List