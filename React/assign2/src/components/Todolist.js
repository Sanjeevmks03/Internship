import React, { Component } from 'react'
import Todoitem from './Todoitem'
class Todolist extends Component {

    onClick(item, event) {
        console.log(event)
        if (!item.done)
            alert(`${item.text} completed`)
    }
    render() {
        const { items } = this.props
        return (
            <div>
                {items.map((item, index) => {
                    return <Todoitem key={index} todo={item} action={this.onClick} />
                })}
            </div>
        )
    }
}

export default Todolist